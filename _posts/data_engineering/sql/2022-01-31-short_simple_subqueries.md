---
title: "[SQL] Intermediate SQL(2)"
layout: single
date: '31/01/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
---

---
### SQL Intermediate(2)
* Simple Subquery
    * Subquery in `WHERE`
    * Subquery in `FROM`
    * Subquery in `SELECT`
    * Subquery Everywhere
* 정확한 데이터를 얻었는지 항상 확인, 특히 filtering 주의

---


```python
import sqlite3
%load_ext sql
%sql sqlite:////Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/Jupyter_Projects/blog/data_engineer/sql/3_intermediate_sql/database.sqlite
```




    'Connected: @/Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/Jupyter_Projects/blog/data_engineer/sql/3_intermediate_sql/database.sqlite'



---

### Subquery in WHERE

* list of teams that scored 8 or more goals in a home match


```sql
%%sql
SELECT
	team_long_name,
	team_short_name
FROM Team
WHERE team_api_id IN
	  (SELECT home_team_api_id 
       FROM Match
       WHERE home_team_goal >= 8);
```

     * sqlite:////Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/Jupyter_Projects/blog/data_engineer/sql/3_intermediate_sql/database.sqlite
    Done.





<table>
    <thead>
        <tr>
            <th>team_long_name</th>
            <th>team_short_name</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Chelsea</td>
            <td>CHE</td>
        </tr>
        <tr>
            <td>Southampton</td>
            <td>SOU</td>
        </tr>
        <tr>
            <td>Tottenham Hotspur</td>
            <td>TOT</td>
        </tr>
        <tr>
            <td>Real Madrid CF</td>
            <td>REA</td>
        </tr>
        <tr>
            <td>FC Barcelona</td>
            <td>BAR</td>
        </tr>
        <tr>
            <td>PSV</td>
            <td>PSV</td>
        </tr>
        <tr>
            <td>SL Benfica</td>
            <td>BEN</td>
        </tr>
        <tr>
            <td>FC Bayern Munich</td>
            <td>BMU</td>
        </tr>
        <tr>
            <td>Celtic</td>
            <td>CEL</td>
        </tr>
        <tr>
            <td>Manchester United</td>
            <td>MUN</td>
        </tr>
    </tbody>
</table>



---

### Subquery in FROM
* alias 해줘야 함

* matches with 10 or more total goals by country


```sql
%%sql
SELECT
    c.name AS country_name,
    COUNT(sub.id) AS matches
FROM Country AS c
INNER JOIN (
		SELECT country_id, id
	    FROM Match
	    WHERE (home_team_goal + away_team_goal) >= 10) AS sub
	ON c.id = sub.country_id
GROUP BY country_name;
```

     * sqlite:////Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/Jupyter_Projects/blog/data_engineer/sql/3_intermediate_sql/database.sqlite
    Done.





<table>
    <thead>
        <tr>
            <th>country_name</th>
            <th>matches</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>England</td>
            <td>4</td>
        </tr>
        <tr>
            <td>France</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Germany</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Netherlands</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Scotland</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Spain</td>
            <td>5</td>
        </tr>
    </tbody>
</table>



* number of matches that scored 10 or more goals in a home match by countries


```sql
%%sql
SELECT
    c.name AS country_name,
    COUNT(sub.id) AS matches
FROM Country AS c
INNER JOIN (
		SELECT country_id, id
	    FROM Match
	    WHERE (home_team_goal + away_team_goal) >= 10) AS sub
	ON c.id = sub.country_id
GROUP BY country_name;
```

     * sqlite:////Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/Jupyter_Projects/blog/data_engineer/sql/3_intermediate_sql/database.sqlite
    Done.





<table>
    <thead>
        <tr>
            <th>country_name</th>
            <th>matches</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>England</td>
            <td>4</td>
        </tr>
        <tr>
            <td>France</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Germany</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Netherlands</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Scotland</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Spain</td>
            <td>5</td>
        </tr>
    </tbody>
</table>



---

### Subquery in SELECT

* avg_goals by league and overall avg_goals in 2013/2014 seasons


```sql
%%sql
SELECT 
	l.name AS league,
    ROUND(AVG(m.home_team_goal + m.away_team_goal), 2) AS avg_goals,
    (SELECT ROUND(AVG(home_team_goal + away_team_goal), 2) 
     FROM match
     WHERE season = "2013/2014") AS overall_avg
FROM league AS l
LEFT JOIN match AS m
ON l.country_id = m.country_id
WHERE season = '2013/2014'
GROUP BY league;
```

     * sqlite:////Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/Jupyter_Projects/blog/data_engineer/sql/3_intermediate_sql/database.sqlite
    Done.





<table>
    <thead>
        <tr>
            <th>league</th>
            <th>avg_goals</th>
            <th>overall_avg</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Belgium Jupiler League</td>
            <td>2.5</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>England Premier League</td>
            <td>2.77</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>France Ligue 1</td>
            <td>2.46</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>Germany 1. Bundesliga</td>
            <td>3.16</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>Italy Serie A</td>
            <td>2.72</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>Netherlands Eredivisie</td>
            <td>3.2</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>Poland Ekstraklasa</td>
            <td>2.64</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>Portugal Liga ZON Sagres</td>
            <td>2.37</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>Scotland Premier League</td>
            <td>2.75</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>Spain LIGA BBVA</td>
            <td>2.75</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>Switzerland Super League</td>
            <td>2.89</td>
            <td>2.77</td>
        </tr>
    </tbody>
</table>



* avg_goals by league and difference of overall avg_goals - avg_goals in 2013/2014 season


```sql
%%sql
SELECT
	l.name AS league,
	ROUND(AVG(m.home_team_goal + m.away_team_goal),2) AS avg_goals,
	ROUND(AVG(m.home_team_goal + m.away_team_goal) - 
		(SELECT AVG(home_team_goal + away_team_goal)
		 FROM match 
         WHERE season = '2013/2014'),2) AS diff
FROM league AS l
LEFT JOIN match AS m
ON l.country_id = m.country_id
WHERE season = '2013/2014'
GROUP BY l.name;
```


### Subquery Everywhere

* avg_goal and overall_goal by stage in 2012/2013 season 
* only display the results where avg_goal of the stage is higher than the overall average


```sql
%%sql
SELECT 
	s.stage,
	ROUND(s.avg_goals,2) AS avg_goals,
    ROUND((SELECT AVG(home_team_goal + away_team_goal)
     FROM Match
     WHERE season = '2012/2013'),2) AS overall_avg
FROM 
	(SELECT
		 stage,
         AVG(home_team_goal + away_team_goal) AS avg_goals
	 FROM Match 
	 WHERE season = '2012/2013'
	 GROUP BY stage) AS s
WHERE 
	s.avg_goals > (SELECT AVG(home_team_goal + away_team_goal) 
                    FROM match WHERE season = '2012/2013');
```

     * sqlite:////Users/jisu/Dropbox_Carl/Dropbox/JISU/Data/Jupyter_Projects/blog/data_engineer/sql/3_intermediate_sql/database.sqlite
    Done.





<table>
    <thead>
        <tr>
            <th>stage</th>
            <th>avg_goals</th>
            <th>overall_avg</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>3</td>
            <td>2.83</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>4</td>
            <td>2.8</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>6</td>
            <td>2.78</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>8</td>
            <td>3.09</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>10</td>
            <td>2.96</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>11</td>
            <td>2.92</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>12</td>
            <td>3.23</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>17</td>
            <td>2.85</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>20</td>
            <td>2.96</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>21</td>
            <td>2.9</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>23</td>
            <td>3.01</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>27</td>
            <td>2.8</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>30</td>
            <td>2.87</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>31</td>
            <td>3.06</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>33</td>
            <td>3.1</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>36</td>
            <td>2.9</td>
            <td>2.77</td>
        </tr>
        <tr>
            <td>38</td>
            <td>3.17</td>
            <td>2.77</td>
        </tr>
    </tbody>
</table>


