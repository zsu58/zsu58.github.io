---
title: "[SQL] Intermediate SQL(3)"
layout: single
date: '01/02/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
---

---
### SQL Intermediate(3)
* Correlated Subquery
* Nested Subquery
* Common Table Expression(CTE)
* 비교

---


```python
import sqlite3
%load_ext sql
%sql sqlite:////Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/Jupyter_Projects/blog/data_engineer/sql/3_intermediate_sql/database.sqlite
```




    'Connected: @/Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/Jupyter_Projects/blog/data_engineer/sql/3_intermediate_sql/database.sqlite'



---

### Correlated Subquery
* Difference with simple Subquery
    * Dependent on the main query to execute
    * evaluted in each loop(significantly slows down query runtime)

* average number of goals scored in each country


```sql
%%sql
SELECT 
	c.name AS country,
	(SELECT
		AVG(m.home_team_goal + m.away_team_goal) 
	 FROM Match AS m
	 WHERE m.country_id = c.id) AS avg_goals
FROM country as c
GROUP BY country;

-- 위와 같음
-- SELECT 
--	  c.name AS country,
--	  AVG(m.home_team_goal + m.away_team_goal) AS avg_goals
-- FROM country as c
-- LEFT JOIN Match as m
--	  ON c.id = m.country_id
-- GROUP BY country
```

     * sqlite:////Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/Jupyter_Projects/blog/data_engineer/sql/3_intermediate_sql/database.sqlite
    Done.





<table>
    <thead>
        <tr>
            <th>country</th>
            <th>avg_goals</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Belgium</td>
            <td>2.8015046296296298</td>
        </tr>
        <tr>
            <td>England</td>
            <td>2.710526315789474</td>
        </tr>
        <tr>
            <td>France</td>
            <td>2.443092105263158</td>
        </tr>
        <tr>
            <td>Germany</td>
            <td>2.9015522875816995</td>
        </tr>
        <tr>
            <td>Italy</td>
            <td>2.6168379184620485</td>
        </tr>
        <tr>
            <td>Netherlands</td>
            <td>3.0808823529411766</td>
        </tr>
        <tr>
            <td>Poland</td>
            <td>2.425</td>
        </tr>
        <tr>
            <td>Portugal</td>
            <td>2.534600389863548</td>
        </tr>
        <tr>
            <td>Scotland</td>
            <td>2.633771929824561</td>
        </tr>
        <tr>
            <td>Spain</td>
            <td>2.767105263157895</td>
        </tr>
        <tr>
            <td>Switzerland</td>
            <td>2.929676511954993</td>
        </tr>
    </tbody>
</table>



* get matches with scores that are 3 times above the average score for each country


```sql
%%sql
SELECT 
	main.country_id,
    main.date,
    main.home_team_goal, 
    main.away_team_goal
FROM match AS main
WHERE
	(home_team_goal + away_team_goal) > 
        (SELECT AVG((sub.home_team_goal + sub.away_team_goal) * 3)
         FROM Match AS sub
         WHERE main.country_id = sub.country_id);
```

* get matches with scores that are equal to the highest scoring match for each country, in each season
* highest scoring: (home_team_goal + away_team_goal)


```sql
%%sql
SELECT 
	main.country_id,
    main.date,
    main.home_team_goal,
    main.away_team_goal
FROM match AS main
WHERE 
	(home_team_goal + away_team_goal) =
        (SELECT MAX(sub.home_team_goal + sub.away_team_goal)
         FROM match AS sub
         WHERE main.country_id = sub.country_id
               AND main.season = sub.season);
```

---

### Nested Subquery
* can be either simple or correlated subquery

* get the highest total number of goals in each season, overall, and during July across all seasons


```sql
%%sql
SELECT
	season,
    MAX(home_team_goal + away_team_goal) AS max_goals,
   (SELECT MAX(home_team_goal + away_team_goal) FROM Match) AS overall_max_goals,
   (SELECT MAX(home_team_goal + away_team_goal) 
    FROM Match
    WHERE id IN (
          SELECT id FROM Match WHERE EXTRACT(MONTH FROM date) = 07)) AS july_max_goals
FROM Match
GROUP BY season;
```

* get average number of matches per season where a team scored 5 or more goals by country


```sql
%%sql
SELECT
	c.name AS country,
	AVG(matches) AS avg_seasonal_high_scores
FROM country AS c
LEFT JOIN (
  SELECT country_id, 
  	     season,
         COUNT(id) AS matches
  FROM (
    SELECT country_id, season, id
	FROM match
	WHERE home_team_goal >= 5 OR away_team_goal >= 5) AS inner_s
  GROUP BY country_id, season) AS outer_s
ON c.id = outer_s.country_id
GROUP BY country;
```

     * sqlite:////Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/Jupyter_Projects/blog/data_engineer/sql/3_intermediate_sql/database.sqlite
    Done.





<table>
    <thead>
        <tr>
            <th>country</th>
            <th>avg_seasonal_high_scores</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Belgium</td>
            <td>9.571428571428571</td>
        </tr>
        <tr>
            <td>England</td>
            <td>14.5</td>
        </tr>
        <tr>
            <td>France</td>
            <td>8.0</td>
        </tr>
        <tr>
            <td>Germany</td>
            <td>13.75</td>
        </tr>
        <tr>
            <td>Italy</td>
            <td>8.5</td>
        </tr>
        <tr>
            <td>Netherlands</td>
            <td>20.125</td>
        </tr>
        <tr>
            <td>Poland</td>
            <td>5.857142857142857</td>
        </tr>
        <tr>
            <td>Portugal</td>
            <td>8.625</td>
        </tr>
        <tr>
            <td>Scotland</td>
            <td>7.125</td>
        </tr>
        <tr>
            <td>Spain</td>
            <td>19.125</td>
        </tr>
        <tr>
            <td>Switzerland</td>
            <td>8.0</td>
        </tr>
    </tbody>
</table>



---

### Common Table Expression(CTE)
* method to make code readable

* get number of matches with more than 10 total goals in each country


```sql
%%sql
WITH match_list AS (
    SELECT 
  		country_id, 
  		id
    FROM match
    WHERE (home_team_goal + away_team_goal) >= 10)

SELECT
    l.name AS league,
    COUNT(match_list.id) AS matches
FROM league AS l
LEFT JOIN match_list ON l.id = match_list.country_id
GROUP BY l.name;
```

     * sqlite:////Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/Jupyter_Projects/blog/data_engineer/sql/3_intermediate_sql/database.sqlite
    Done.





<table>
    <thead>
        <tr>
            <th>league</th>
            <th>matches</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Belgium Jupiler League</td>
            <td>0</td>
        </tr>
        <tr>
            <td>England Premier League</td>
            <td>4</td>
        </tr>
        <tr>
            <td>France Ligue 1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Germany 1. Bundesliga</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Italy Serie A</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Netherlands Eredivisie</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Poland Ekstraklasa</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Portugal Liga ZON Sagres</td>
            <td>0</td>
        </tr>
        <tr>
            <td>Scotland Premier League</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Spain LIGA BBVA</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Switzerland Super League</td>
            <td>0</td>
        </tr>
    </tbody>
</table>



---

### 비교
* get all match's date, home_team_name, away_team_name and each team's goal 

#### Simple Query


```sql
%%sql
SELECT 
	m.date,
	home.hometeam,
	away.awayteam,
	m.home_team_goal,
	m.away_team_goal 
FROM Match AS m
LEFT JOIN (
		SELECT m1.id, t1.team_long_name AS hometeam
		FROM Match m1
		LEFT JOIN Team t1
			ON m1.home_team_api_id = t1.team_api_id) AS home
	ON m.id = home.id
LEFT JOIN (
		SELECT m2.id, t2.team_long_name AS awayteam
		FROM Match m2
		LEFT JOIN Team t2
			ON m2.away_team_api_id = t2.team_api_id ) AS away
	ON m.id = away.id
LIMIT 10;
```

     * sqlite:////Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/Jupyter_Projects/blog/data_engineer/sql/3_intermediate_sql/database.sqlite
    Done.





<table>
    <thead>
        <tr>
            <th>date</th>
            <th>hometeam</th>
            <th>awayteam</th>
            <th>home_team_goal</th>
            <th>away_team_goal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2008-08-17 00:00:00</td>
            <td>KRC Genk</td>
            <td>Beerschot AC</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>SV Zulte-Waregem</td>
            <td>Sporting Lokeren</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>KSV Cercle Brugge</td>
            <td>RSC Anderlecht</td>
            <td>0</td>
            <td>3</td>
        </tr>
        <tr>
            <td>2008-08-17 00:00:00</td>
            <td>KAA Gent</td>
            <td>RAEC Mons</td>
            <td>5</td>
            <td>0</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>FCV Dender EH</td>
            <td>Standard de Liège</td>
            <td>1</td>
            <td>3</td>
        </tr>
        <tr>
            <td>2008-09-24 00:00:00</td>
            <td>KV Mechelen</td>
            <td>Club Brugge KV</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>KSV Roeselare</td>
            <td>KV Kortrijk</td>
            <td>2</td>
            <td>2</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>Tubize</td>
            <td>Royal Excel Mouscron</td>
            <td>1</td>
            <td>2</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>KVC Westerlo</td>
            <td>Sporting Charleroi</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>2008-11-01 00:00:00</td>
            <td>Club Brugge KV</td>
            <td>KV Kortrijk</td>
            <td>4</td>
            <td>1</td>
        </tr>
    </tbody>
</table>



#### Correlated Subquery


```sql
%%sql
SELECT
    m.date,
    (SELECT team_long_name
     FROM team AS t
     WHERE t.team_api_id = m.home_team_api_id) AS hometeam,
    (SELECT team_long_name
     FROM team AS t
     WHERE t.team_api_id = m.away_team_api_id) AS awayteam,
     m.home_team_goal,
     m.away_team_goal
FROM Match AS m
LIMIT 10;
```

     * sqlite:////Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/Jupyter_Projects/blog/data_engineer/sql/3_intermediate_sql/database.sqlite
    Done.





<table>
    <thead>
        <tr>
            <th>date</th>
            <th>hometeam</th>
            <th>awayteam</th>
            <th>home_team_goal</th>
            <th>away_team_goal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2008-08-17 00:00:00</td>
            <td>KRC Genk</td>
            <td>Beerschot AC</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>SV Zulte-Waregem</td>
            <td>Sporting Lokeren</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>KSV Cercle Brugge</td>
            <td>RSC Anderlecht</td>
            <td>0</td>
            <td>3</td>
        </tr>
        <tr>
            <td>2008-08-17 00:00:00</td>
            <td>KAA Gent</td>
            <td>RAEC Mons</td>
            <td>5</td>
            <td>0</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>FCV Dender EH</td>
            <td>Standard de Liège</td>
            <td>1</td>
            <td>3</td>
        </tr>
        <tr>
            <td>2008-09-24 00:00:00</td>
            <td>KV Mechelen</td>
            <td>Club Brugge KV</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>KSV Roeselare</td>
            <td>KV Kortrijk</td>
            <td>2</td>
            <td>2</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>Tubize</td>
            <td>Royal Excel Mouscron</td>
            <td>1</td>
            <td>2</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>KVC Westerlo</td>
            <td>Sporting Charleroi</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>2008-11-01 00:00:00</td>
            <td>Club Brugge KV</td>
            <td>KV Kortrijk</td>
            <td>4</td>
            <td>1</td>
        </tr>
    </tbody>
</table>



#### Common Table Expression


```sql
%%sql
WITH home AS (
  SELECT m.id, 
  		 m.date, 
  		 t.team_long_name AS hometeam, 
  		 m.home_team_goal
  FROM Match AS m
  LEFT JOIN Team AS t 
  	ON m.home_team_api_id = t.team_api_id),
away AS (
  SELECT m.id, 
  		 m.date, 
  		 t.team_long_name AS awayteam, 
  		 m.away_team_goal
  FROM match AS m
  LEFT JOIN team AS t 
  	ON m.away_team_api_id = t.team_api_id)
SELECT 
	home.date,
    home.hometeam,
    away.awayteam,
    home.home_team_goal,
    away.away_team_goal
FROM home
INNER JOIN away
ON home.id = away.id
LIMIT 10;
```

     * sqlite:////Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/Jupyter_Projects/blog/data_engineer/sql/3_intermediate_sql/database.sqlite
    Done.





<table>
    <thead>
        <tr>
            <th>date</th>
            <th>hometeam</th>
            <th>awayteam</th>
            <th>home_team_goal</th>
            <th>away_team_goal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2008-08-17 00:00:00</td>
            <td>KRC Genk</td>
            <td>Beerschot AC</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>SV Zulte-Waregem</td>
            <td>Sporting Lokeren</td>
            <td>0</td>
            <td>0</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>KSV Cercle Brugge</td>
            <td>RSC Anderlecht</td>
            <td>0</td>
            <td>3</td>
        </tr>
        <tr>
            <td>2008-08-17 00:00:00</td>
            <td>KAA Gent</td>
            <td>RAEC Mons</td>
            <td>5</td>
            <td>0</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>FCV Dender EH</td>
            <td>Standard de Liège</td>
            <td>1</td>
            <td>3</td>
        </tr>
        <tr>
            <td>2008-09-24 00:00:00</td>
            <td>KV Mechelen</td>
            <td>Club Brugge KV</td>
            <td>1</td>
            <td>1</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>KSV Roeselare</td>
            <td>KV Kortrijk</td>
            <td>2</td>
            <td>2</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>Tubize</td>
            <td>Royal Excel Mouscron</td>
            <td>1</td>
            <td>2</td>
        </tr>
        <tr>
            <td>2008-08-16 00:00:00</td>
            <td>KVC Westerlo</td>
            <td>Sporting Charleroi</td>
            <td>1</td>
            <td>0</td>
        </tr>
        <tr>
            <td>2008-11-01 00:00:00</td>
            <td>Club Brugge KV</td>
            <td>KV Kortrijk</td>
            <td>4</td>
            <td>1</td>
        </tr>
    </tbody>
</table>


