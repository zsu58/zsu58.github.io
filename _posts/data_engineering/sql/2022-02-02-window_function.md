---
title: "[SQL] Intermediate SQL(4)"
layout: single
date: '2/2/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
---

---
### SQL Intermediate(4)
* `OVER()`
    * `RANK()`
    * `PARTITION BY()`
    * `ROWS BETWEEN [start] AND [finish]`
        * `PRECEDING`
        * `FOLLOWING`
        * `UNBOUNDED PRECEDING`
        * `UNBOUNDED FOLLOWING`
        * `CURRENT ROW`
* Practice

---


```python
%reload_ext sql
%sql postgresql://postgres:1234@0.0.0.0:5432/football
```




    'Connected: postgres@football'



---

### Over()
* perform calculations on an already generated result set, meaning that is uses information in result set rather than database
* processed after every part of query except ORDER BY
* quick
* unable in sqlite
* mysql >= 8.0

* get id, country, season, home_team_goal, away_team_goal and avg_goal


```sql
%%sql
SELECT 
	m.id,
    c.name AS country,
    m.season,
	m.home_team_goal,
	m.away_team_goal,
 	AVG(m.home_team_goal + m.away_team_goal) OVER() AS avg_goal
FROM matches AS m
LEFT JOIN country AS c 
	ON m.country_id = c.id
LIMIT 10
```

       mysql://root:***@0.0.0.0:3306/football
     * postgresql://postgres:***@0.0.0.0:5432/football
    10 rows affected.





<table>
    <thead>
        <tr>
            <th>id</th>
            <th>country</th>
            <th>season</th>
            <th>home_team_goal</th>
            <th>away_team_goal</th>
            <th>avg_goal</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Belgium</td>
            <td>2008/2009</td>
            <td>1</td>
            <td>1</td>
            <td>2.7585261875761267</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Belgium</td>
            <td>2008/2009</td>
            <td>0</td>
            <td>0</td>
            <td>2.7585261875761267</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Belgium</td>
            <td>2008/2009</td>
            <td>0</td>
            <td>3</td>
            <td>2.7585261875761267</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Belgium</td>
            <td>2008/2009</td>
            <td>5</td>
            <td>0</td>
            <td>2.7585261875761267</td>
        </tr>
        <tr>
            <td>5</td>
            <td>Belgium</td>
            <td>2008/2009</td>
            <td>1</td>
            <td>3</td>
            <td>2.7585261875761267</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Belgium</td>
            <td>2008/2009</td>
            <td>1</td>
            <td>1</td>
            <td>2.7585261875761267</td>
        </tr>
        <tr>
            <td>7</td>
            <td>Belgium</td>
            <td>2008/2009</td>
            <td>2</td>
            <td>2</td>
            <td>2.7585261875761267</td>
        </tr>
        <tr>
            <td>8</td>
            <td>Belgium</td>
            <td>2008/2009</td>
            <td>1</td>
            <td>2</td>
            <td>2.7585261875761267</td>
        </tr>
        <tr>
            <td>9</td>
            <td>Belgium</td>
            <td>2008/2009</td>
            <td>1</td>
            <td>0</td>
            <td>2.7585261875761267</td>
        </tr>
        <tr>
            <td>10</td>
            <td>Belgium</td>
            <td>2008/2009</td>
            <td>4</td>
            <td>1</td>
            <td>2.7585261875761267</td>
        </tr>
    </tbody>
</table>



---

#### RANK()

* get ranked list according to which leagues, on average, score the most goals in a match


```sql
%%sql
SELECT 
	l.name AS league,
    AVG(m.home_team_goal + m.away_team_goal) AS avg_goals,
    RANK() OVER(ORDER BY AVG(m.home_team_goal + m.away_team_goal) DESC) AS league_rank
FROM league AS l
LEFT JOIN matches AS m 
ON l.id = m.country_id
WHERE m.season = '2011/2012'
GROUP BY l.name
ORDER BY league_rank;
```

       mysql://root:***@0.0.0.0:3306/football
     * postgresql://postgres:***@0.0.0.0:5432/football
    10 rows affected.





<table>
    <thead>
        <tr>
            <th>league</th>
            <th>avg_goals</th>
            <th>league_rank</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Netherlands Eredivisie</td>
            <td>3.2581699346405229</td>
            <td>1</td>
        </tr>
        <tr>
            <td>Belgium Jupiler League</td>
            <td>2.8791666666666667</td>
            <td>2</td>
        </tr>
        <tr>
            <td>Germany 1. Bundesliga</td>
            <td>2.8594771241830065</td>
            <td>3</td>
        </tr>
        <tr>
            <td>England Premier League</td>
            <td>2.8052631578947368</td>
            <td>4</td>
        </tr>
        <tr>
            <td>Spain LIGA BBVA</td>
            <td>2.7631578947368421</td>
            <td>5</td>
        </tr>
        <tr>
            <td>Portugal Liga ZON Sagres</td>
            <td>2.6416666666666667</td>
            <td>6</td>
        </tr>
        <tr>
            <td>Scotland Premier League</td>
            <td>2.6359649122807018</td>
            <td>7</td>
        </tr>
        <tr>
            <td>Italy Serie A</td>
            <td>2.5837988826815642</td>
            <td>8</td>
        </tr>
        <tr>
            <td>France Ligue 1</td>
            <td>2.5157894736842105</td>
            <td>9</td>
        </tr>
        <tr>
            <td>Poland Ekstraklasa</td>
            <td>2.1958333333333333</td>
            <td>10</td>
        </tr>
    </tbody>
</table>



---

#### PARTITION BY()

* get data set of games played by FC Barcelona in their home comparing their individual game performance to the overall average for that season


```sql
%%sql
SELECT
    date,
	season,
	home_team_goal,
    AVG(home_team_goal) OVER(PARTITION BY season) AS season_homeavg
FROM matches
WHERE 
	home_team_api_id = 8634;
```

       mysql://root:***@0.0.0.0:3306/football
     * postgresql://postgres:***@0.0.0.0:5432/football
    137 rows affected.





<table>
    <thead>
        <tr>
            <th>date</th>
            <th>season</th>
            <th>home_team_goal</th>
            <th>season_homeavg</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2008-11-08T00:00:00Z</td>
            <td>2008/2009</td>
            <td>6</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2008-11-23T00:00:00Z</td>
            <td>2008/2009</td>
            <td>1</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2008-12-06T00:00:00Z</td>
            <td>2008/2009</td>
            <td>4</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2008-12-13T00:00:00Z</td>
            <td>2008/2009</td>
            <td>2</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2009-01-03T00:00:00Z</td>
            <td>2008/2009</td>
            <td>3</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2009-01-17T00:00:00Z</td>
            <td>2008/2009</td>
            <td>5</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2008-09-13T00:00:00Z</td>
            <td>2008/2009</td>
            <td>1</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2009-01-24T00:00:00Z</td>
            <td>2008/2009</td>
            <td>4</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2009-02-08T00:00:00Z</td>
            <td>2008/2009</td>
            <td>3</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2009-02-21T00:00:00Z</td>
            <td>2008/2009</td>
            <td>1</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2009-03-07T00:00:00Z</td>
            <td>2008/2009</td>
            <td>2</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2009-03-22T00:00:00Z</td>
            <td>2008/2009</td>
            <td>6</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2009-04-11T00:00:00Z</td>
            <td>2008/2009</td>
            <td>2</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2009-04-22T00:00:00Z</td>
            <td>2008/2009</td>
            <td>4</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2009-05-10T00:00:00Z</td>
            <td>2008/2009</td>
            <td>3</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2009-05-23T00:00:00Z</td>
            <td>2008/2009</td>
            <td>0</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2008-09-24T00:00:00Z</td>
            <td>2008/2009</td>
            <td>3</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2008-10-04T00:00:00Z</td>
            <td>2008/2009</td>
            <td>6</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2008-10-25T00:00:00Z</td>
            <td>2008/2009</td>
            <td>5</td>
            <td>3.2105263157894737</td>
        </tr>
        <tr>
            <td>2009-08-31T00:00:00Z</td>
            <td>2009/2010</td>
            <td>3</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-11-07T00:00:00Z</td>
            <td>2009/2010</td>
            <td>4</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-11-29T00:00:00Z</td>
            <td>2009/2010</td>
            <td>1</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-12-12T00:00:00Z</td>
            <td>2009/2010</td>
            <td>1</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-01-02T00:00:00Z</td>
            <td>2009/2010</td>
            <td>1</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-01-16T00:00:00Z</td>
            <td>2009/2010</td>
            <td>4</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-02-06T00:00:00Z</td>
            <td>2009/2010</td>
            <td>2</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-02-20T00:00:00Z</td>
            <td>2009/2010</td>
            <td>4</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-02-27T00:00:00Z</td>
            <td>2009/2010</td>
            <td>2</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-03-14T00:00:00Z</td>
            <td>2009/2010</td>
            <td>3</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-03-24T00:00:00Z</td>
            <td>2009/2010</td>
            <td>2</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-09-19T00:00:00Z</td>
            <td>2009/2010</td>
            <td>5</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-04-03T00:00:00Z</td>
            <td>2009/2010</td>
            <td>4</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-04-14T00:00:00Z</td>
            <td>2009/2010</td>
            <td>3</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-04-24T00:00:00Z</td>
            <td>2009/2010</td>
            <td>3</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-05-04T00:00:00Z</td>
            <td>2009/2010</td>
            <td>4</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-05-16T00:00:00Z</td>
            <td>2009/2010</td>
            <td>4</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-10-03T00:00:00Z</td>
            <td>2009/2010</td>
            <td>1</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-10-25T00:00:00Z</td>
            <td>2009/2010</td>
            <td>6</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-11-13T00:00:00Z</td>
            <td>2010/2011</td>
            <td>3</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2010-11-29T00:00:00Z</td>
            <td>2010/2011</td>
            <td>5</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2010-12-12T00:00:00Z</td>
            <td>2010/2011</td>
            <td>5</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2011-01-02T00:00:00Z</td>
            <td>2010/2011</td>
            <td>2</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2011-01-16T00:00:00Z</td>
            <td>2010/2011</td>
            <td>4</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2010-09-11T00:00:00Z</td>
            <td>2010/2011</td>
            <td>0</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2011-01-22T00:00:00Z</td>
            <td>2010/2011</td>
            <td>3</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2011-02-05T00:00:00Z</td>
            <td>2010/2011</td>
            <td>3</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2011-02-20T00:00:00Z</td>
            <td>2010/2011</td>
            <td>2</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2011-03-05T00:00:00Z</td>
            <td>2010/2011</td>
            <td>1</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2011-03-19T00:00:00Z</td>
            <td>2010/2011</td>
            <td>2</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2011-04-09T00:00:00Z</td>
            <td>2010/2011</td>
            <td>3</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2011-04-23T00:00:00Z</td>
            <td>2010/2011</td>
            <td>2</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2011-05-08T00:00:00Z</td>
            <td>2010/2011</td>
            <td>2</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2011-05-15T00:00:00Z</td>
            <td>2010/2011</td>
            <td>0</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2010-09-22T00:00:00Z</td>
            <td>2010/2011</td>
            <td>1</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2010-10-03T00:00:00Z</td>
            <td>2010/2011</td>
            <td>1</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2010-10-16T00:00:00Z</td>
            <td>2010/2011</td>
            <td>2</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2010-10-30T00:00:00Z</td>
            <td>2010/2011</td>
            <td>5</td>
            <td>2.4210526315789474</td>
        </tr>
        <tr>
            <td>2011-10-29T00:00:00Z</td>
            <td>2011/2012</td>
            <td>5</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2011-11-19T00:00:00Z</td>
            <td>2011/2012</td>
            <td>4</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2011-12-03T00:00:00Z</td>
            <td>2011/2012</td>
            <td>5</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2011-11-29T00:00:00Z</td>
            <td>2011/2012</td>
            <td>4</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2012-01-15T00:00:00Z</td>
            <td>2011/2012</td>
            <td>4</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2011-08-29T00:00:00Z</td>
            <td>2011/2012</td>
            <td>5</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2012-05-02T00:00:00Z</td>
            <td>2011/2012</td>
            <td>4</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2012-02-04T00:00:00Z</td>
            <td>2011/2012</td>
            <td>2</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2012-02-19T00:00:00Z</td>
            <td>2011/2012</td>
            <td>5</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2012-03-03T00:00:00Z</td>
            <td>2011/2012</td>
            <td>3</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2012-03-20T00:00:00Z</td>
            <td>2011/2012</td>
            <td>5</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2012-03-31T00:00:00Z</td>
            <td>2011/2012</td>
            <td>2</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2012-04-10T00:00:00Z</td>
            <td>2011/2012</td>
            <td>4</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2012-04-21T00:00:00Z</td>
            <td>2011/2012</td>
            <td>1</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2012-05-05T00:00:00Z</td>
            <td>2011/2012</td>
            <td>4</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2011-09-17T00:00:00Z</td>
            <td>2011/2012</td>
            <td>8</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2011-09-24T00:00:00Z</td>
            <td>2011/2012</td>
            <td>5</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2011-10-15T00:00:00Z</td>
            <td>2011/2012</td>
            <td>3</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2011-10-22T00:00:00Z</td>
            <td>2011/2012</td>
            <td>0</td>
            <td>3.8421052631578947</td>
        </tr>
        <tr>
            <td>2012-08-19T00:00:00Z</td>
            <td>2012/2013</td>
            <td>5</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2012-11-03T00:00:00Z</td>
            <td>2012/2013</td>
            <td>3</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2012-11-17T00:00:00Z</td>
            <td>2012/2013</td>
            <td>3</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2012-12-01T00:00:00Z</td>
            <td>2012/2013</td>
            <td>5</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2012-12-16T00:00:00Z</td>
            <td>2012/2013</td>
            <td>4</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2013-01-06T00:00:00Z</td>
            <td>2012/2013</td>
            <td>4</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2013-01-27T00:00:00Z</td>
            <td>2012/2013</td>
            <td>5</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2013-02-10T00:00:00Z</td>
            <td>2012/2013</td>
            <td>6</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2013-02-23T00:00:00Z</td>
            <td>2012/2013</td>
            <td>2</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2013-03-09T00:00:00Z</td>
            <td>2012/2013</td>
            <td>2</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2013-03-17T00:00:00Z</td>
            <td>2012/2013</td>
            <td>3</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2012-09-02T00:00:00Z</td>
            <td>2012/2013</td>
            <td>1</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2013-04-06T00:00:00Z</td>
            <td>2012/2013</td>
            <td>5</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2013-04-20T00:00:00Z</td>
            <td>2012/2013</td>
            <td>1</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2013-05-05T00:00:00Z</td>
            <td>2012/2013</td>
            <td>4</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2013-05-19T00:00:00Z</td>
            <td>2012/2013</td>
            <td>2</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2013-06-01T00:00:00Z</td>
            <td>2012/2013</td>
            <td>4</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2012-09-22T00:00:00Z</td>
            <td>2012/2013</td>
            <td>2</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2012-10-07T00:00:00Z</td>
            <td>2012/2013</td>
            <td>2</td>
            <td>3.3157894736842105</td>
        </tr>
        <tr>
            <td>2013-08-18T00:00:00Z</td>
            <td>2013/2014</td>
            <td>7</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2013-10-26T00:00:00Z</td>
            <td>2013/2014</td>
            <td>2</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2013-11-01T00:00:00Z</td>
            <td>2013/2014</td>
            <td>1</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2013-11-23T00:00:00Z</td>
            <td>2013/2014</td>
            <td>4</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2013-12-14T00:00:00Z</td>
            <td>2013/2014</td>
            <td>2</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-01-05T00:00:00Z</td>
            <td>2013/2014</td>
            <td>4</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-01-26T00:00:00Z</td>
            <td>2013/2014</td>
            <td>3</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-02-01T00:00:00Z</td>
            <td>2013/2014</td>
            <td>2</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-02-15T00:00:00Z</td>
            <td>2013/2014</td>
            <td>6</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-03-02T00:00:00Z</td>
            <td>2013/2014</td>
            <td>4</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-03-16T00:00:00Z</td>
            <td>2013/2014</td>
            <td>7</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-03-26T00:00:00Z</td>
            <td>2013/2014</td>
            <td>3</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-04-05T00:00:00Z</td>
            <td>2013/2014</td>
            <td>3</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-04-20T00:00:00Z</td>
            <td>2013/2014</td>
            <td>2</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-05-03T00:00:00Z</td>
            <td>2013/2014</td>
            <td>2</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-05-17T00:00:00Z</td>
            <td>2013/2014</td>
            <td>1</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2013-09-14T00:00:00Z</td>
            <td>2013/2014</td>
            <td>3</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2013-09-24T00:00:00Z</td>
            <td>2013/2014</td>
            <td>4</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2013-10-05T00:00:00Z</td>
            <td>2013/2014</td>
            <td>4</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-08-24T00:00:00Z</td>
            <td>2014/2015</td>
            <td>3</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-11-01T00:00:00Z</td>
            <td>2014/2015</td>
            <td>0</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-11-22T00:00:00Z</td>
            <td>2014/2015</td>
            <td>5</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-12-07T00:00:00Z</td>
            <td>2014/2015</td>
            <td>5</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-12-20T00:00:00Z</td>
            <td>2014/2015</td>
            <td>5</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2015-01-11T00:00:00Z</td>
            <td>2014/2015</td>
            <td>3</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2015-02-01T00:00:00Z</td>
            <td>2014/2015</td>
            <td>3</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2015-02-15T00:00:00Z</td>
            <td>2014/2015</td>
            <td>5</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2015-02-21T00:00:00Z</td>
            <td>2014/2015</td>
            <td>0</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2015-03-08T00:00:00Z</td>
            <td>2014/2015</td>
            <td>6</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2015-03-22T00:00:00Z</td>
            <td>2014/2015</td>
            <td>2</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-09-13T00:00:00Z</td>
            <td>2014/2015</td>
            <td>2</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2015-04-08T00:00:00Z</td>
            <td>2014/2015</td>
            <td>4</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2015-04-18T00:00:00Z</td>
            <td>2014/2015</td>
            <td>2</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2015-04-28T00:00:00Z</td>
            <td>2014/2015</td>
            <td>6</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2015-05-09T00:00:00Z</td>
            <td>2014/2015</td>
            <td>2</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2015-05-23T00:00:00Z</td>
            <td>2014/2015</td>
            <td>2</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-09-27T00:00:00Z</td>
            <td>2014/2015</td>
            <td>6</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2014-10-18T00:00:00Z</td>
            <td>2014/2015</td>
            <td>3</td>
            <td>3.3684210526315789</td>
        </tr>
        <tr>
            <td>2015-11-08T00:00:00Z</td>
            <td>2015/2016</td>
            <td>3</td>
            <td>3.2500000000000000</td>
        </tr>
        <tr>
            <td>2015-11-28T00:00:00Z</td>
            <td>2015/2016</td>
            <td>4</td>
            <td>3.2500000000000000</td>
        </tr>
        <tr>
            <td>2015-12-12T00:00:00Z</td>
            <td>2015/2016</td>
            <td>2</td>
            <td>3.2500000000000000</td>
        </tr>
        <tr>
            <td>2015-12-30T00:00:00Z</td>
            <td>2015/2016</td>
            <td>4</td>
            <td>3.2500000000000000</td>
        </tr>
    </tbody>
</table>



* get data set of games played by FC Barcelona in their home comparing their individual game performance to the overall average for that season by month


```sql
%%sql
-- convert date 
with matches_converted as (
	select 
		TO_DATE(date, 'yyyy-mm-dd') AS date, season, home_team_goal, away_team_goal, home_team_api_id, away_team_api_id
	from matches
)

SELECT 
	date,
	season,
    EXTRACT(month FROM date) AS month,
	home_team_goal,
	away_team_goal,
    AVG(home_team_goal) OVER(PARTITION BY season, EXTRACT(month FROM date)) AS season_mo_home
FROM matches_converted
WHERE 
	home_team_api_id = 8634;
```

       mysql://root:***@0.0.0.0:3306/football
     * postgresql://postgres:***@0.0.0.0:5432/football
    137 rows affected.





<table>
    <thead>
        <tr>
            <th>date</th>
            <th>season</th>
            <th>month</th>
            <th>home_team_goal</th>
            <th>away_team_goal</th>
            <th>season_mo_home</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2009-01-03</td>
            <td>2008/2009</td>
            <td>1</td>
            <td>3</td>
            <td>1</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-01-24</td>
            <td>2008/2009</td>
            <td>1</td>
            <td>4</td>
            <td>1</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-01-17</td>
            <td>2008/2009</td>
            <td>1</td>
            <td>5</td>
            <td>0</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-02-08</td>
            <td>2008/2009</td>
            <td>2</td>
            <td>3</td>
            <td>1</td>
            <td>2.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-02-21</td>
            <td>2008/2009</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>2.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-03-07</td>
            <td>2008/2009</td>
            <td>3</td>
            <td>2</td>
            <td>0</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-03-22</td>
            <td>2008/2009</td>
            <td>3</td>
            <td>6</td>
            <td>0</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-04-11</td>
            <td>2008/2009</td>
            <td>4</td>
            <td>2</td>
            <td>0</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-04-22</td>
            <td>2008/2009</td>
            <td>4</td>
            <td>4</td>
            <td>0</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-05-10</td>
            <td>2008/2009</td>
            <td>5</td>
            <td>3</td>
            <td>3</td>
            <td>1.5000000000000000</td>
        </tr>
        <tr>
            <td>2009-05-23</td>
            <td>2008/2009</td>
            <td>5</td>
            <td>0</td>
            <td>1</td>
            <td>1.5000000000000000</td>
        </tr>
        <tr>
            <td>2008-09-24</td>
            <td>2008/2009</td>
            <td>9</td>
            <td>3</td>
            <td>2</td>
            <td>2.0000000000000000</td>
        </tr>
        <tr>
            <td>2008-09-13</td>
            <td>2008/2009</td>
            <td>9</td>
            <td>1</td>
            <td>1</td>
            <td>2.0000000000000000</td>
        </tr>
        <tr>
            <td>2008-10-04</td>
            <td>2008/2009</td>
            <td>10</td>
            <td>6</td>
            <td>1</td>
            <td>5.5000000000000000</td>
        </tr>
        <tr>
            <td>2008-10-25</td>
            <td>2008/2009</td>
            <td>10</td>
            <td>5</td>
            <td>0</td>
            <td>5.5000000000000000</td>
        </tr>
        <tr>
            <td>2008-11-08</td>
            <td>2008/2009</td>
            <td>11</td>
            <td>6</td>
            <td>0</td>
            <td>3.5000000000000000</td>
        </tr>
        <tr>
            <td>2008-11-23</td>
            <td>2008/2009</td>
            <td>11</td>
            <td>1</td>
            <td>1</td>
            <td>3.5000000000000000</td>
        </tr>
        <tr>
            <td>2008-12-13</td>
            <td>2008/2009</td>
            <td>12</td>
            <td>2</td>
            <td>0</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2008-12-06</td>
            <td>2008/2009</td>
            <td>12</td>
            <td>4</td>
            <td>0</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-01-16</td>
            <td>2009/2010</td>
            <td>1</td>
            <td>4</td>
            <td>0</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2010-01-02</td>
            <td>2009/2010</td>
            <td>1</td>
            <td>1</td>
            <td>1</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2010-02-06</td>
            <td>2009/2010</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>2.6666666666666667</td>
        </tr>
        <tr>
            <td>2010-02-27</td>
            <td>2009/2010</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>2.6666666666666667</td>
        </tr>
        <tr>
            <td>2010-02-20</td>
            <td>2009/2010</td>
            <td>2</td>
            <td>4</td>
            <td>0</td>
            <td>2.6666666666666667</td>
        </tr>
        <tr>
            <td>2010-03-24</td>
            <td>2009/2010</td>
            <td>3</td>
            <td>2</td>
            <td>0</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2010-03-14</td>
            <td>2009/2010</td>
            <td>3</td>
            <td>3</td>
            <td>0</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2010-04-03</td>
            <td>2009/2010</td>
            <td>4</td>
            <td>4</td>
            <td>1</td>
            <td>3.3333333333333333</td>
        </tr>
        <tr>
            <td>2010-04-24</td>
            <td>2009/2010</td>
            <td>4</td>
            <td>3</td>
            <td>1</td>
            <td>3.3333333333333333</td>
        </tr>
        <tr>
            <td>2010-04-14</td>
            <td>2009/2010</td>
            <td>4</td>
            <td>3</td>
            <td>0</td>
            <td>3.3333333333333333</td>
        </tr>
        <tr>
            <td>2010-05-04</td>
            <td>2009/2010</td>
            <td>5</td>
            <td>4</td>
            <td>1</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-05-16</td>
            <td>2009/2010</td>
            <td>5</td>
            <td>4</td>
            <td>0</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-08-31</td>
            <td>2009/2010</td>
            <td>8</td>
            <td>3</td>
            <td>0</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-09-19</td>
            <td>2009/2010</td>
            <td>9</td>
            <td>5</td>
            <td>2</td>
            <td>5.0000000000000000</td>
        </tr>
        <tr>
            <td>2009-10-03</td>
            <td>2009/2010</td>
            <td>10</td>
            <td>1</td>
            <td>0</td>
            <td>3.5000000000000000</td>
        </tr>
        <tr>
            <td>2009-10-25</td>
            <td>2009/2010</td>
            <td>10</td>
            <td>6</td>
            <td>1</td>
            <td>3.5000000000000000</td>
        </tr>
        <tr>
            <td>2009-11-07</td>
            <td>2009/2010</td>
            <td>11</td>
            <td>4</td>
            <td>2</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2009-11-29</td>
            <td>2009/2010</td>
            <td>11</td>
            <td>1</td>
            <td>0</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2009-12-12</td>
            <td>2009/2010</td>
            <td>12</td>
            <td>1</td>
            <td>0</td>
            <td>1.00000000000000000000</td>
        </tr>
        <tr>
            <td>2011-01-16</td>
            <td>2010/2011</td>
            <td>1</td>
            <td>4</td>
            <td>1</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2011-01-22</td>
            <td>2010/2011</td>
            <td>1</td>
            <td>3</td>
            <td>0</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2011-01-02</td>
            <td>2010/2011</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2011-02-05</td>
            <td>2010/2011</td>
            <td>2</td>
            <td>3</td>
            <td>0</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2011-02-20</td>
            <td>2010/2011</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2011-03-05</td>
            <td>2010/2011</td>
            <td>3</td>
            <td>1</td>
            <td>0</td>
            <td>1.5000000000000000</td>
        </tr>
        <tr>
            <td>2011-03-19</td>
            <td>2010/2011</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>1.5000000000000000</td>
        </tr>
        <tr>
            <td>2011-04-09</td>
            <td>2010/2011</td>
            <td>4</td>
            <td>3</td>
            <td>1</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2011-04-23</td>
            <td>2010/2011</td>
            <td>4</td>
            <td>2</td>
            <td>0</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2011-05-15</td>
            <td>2010/2011</td>
            <td>5</td>
            <td>0</td>
            <td>0</td>
            <td>1.00000000000000000000</td>
        </tr>
        <tr>
            <td>2011-05-08</td>
            <td>2010/2011</td>
            <td>5</td>
            <td>2</td>
            <td>0</td>
            <td>1.00000000000000000000</td>
        </tr>
        <tr>
            <td>2010-09-11</td>
            <td>2010/2011</td>
            <td>9</td>
            <td>0</td>
            <td>2</td>
            <td>0.50000000000000000000</td>
        </tr>
        <tr>
            <td>2010-09-22</td>
            <td>2010/2011</td>
            <td>9</td>
            <td>1</td>
            <td>0</td>
            <td>0.50000000000000000000</td>
        </tr>
        <tr>
            <td>2010-10-03</td>
            <td>2010/2011</td>
            <td>10</td>
            <td>1</td>
            <td>1</td>
            <td>2.6666666666666667</td>
        </tr>
        <tr>
            <td>2010-10-16</td>
            <td>2010/2011</td>
            <td>10</td>
            <td>2</td>
            <td>1</td>
            <td>2.6666666666666667</td>
        </tr>
        <tr>
            <td>2010-10-30</td>
            <td>2010/2011</td>
            <td>10</td>
            <td>5</td>
            <td>0</td>
            <td>2.6666666666666667</td>
        </tr>
        <tr>
            <td>2010-11-13</td>
            <td>2010/2011</td>
            <td>11</td>
            <td>3</td>
            <td>1</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-11-29</td>
            <td>2010/2011</td>
            <td>11</td>
            <td>5</td>
            <td>0</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2010-12-12</td>
            <td>2010/2011</td>
            <td>12</td>
            <td>5</td>
            <td>0</td>
            <td>5.0000000000000000</td>
        </tr>
        <tr>
            <td>2012-01-15</td>
            <td>2011/2012</td>
            <td>1</td>
            <td>4</td>
            <td>2</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2012-02-19</td>
            <td>2011/2012</td>
            <td>2</td>
            <td>5</td>
            <td>1</td>
            <td>3.5000000000000000</td>
        </tr>
        <tr>
            <td>2012-02-04</td>
            <td>2011/2012</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>3.5000000000000000</td>
        </tr>
        <tr>
            <td>2012-03-31</td>
            <td>2011/2012</td>
            <td>3</td>
            <td>2</td>
            <td>0</td>
            <td>3.3333333333333333</td>
        </tr>
        <tr>
            <td>2012-03-03</td>
            <td>2011/2012</td>
            <td>3</td>
            <td>3</td>
            <td>1</td>
            <td>3.3333333333333333</td>
        </tr>
        <tr>
            <td>2012-03-20</td>
            <td>2011/2012</td>
            <td>3</td>
            <td>5</td>
            <td>3</td>
            <td>3.3333333333333333</td>
        </tr>
        <tr>
            <td>2012-04-10</td>
            <td>2011/2012</td>
            <td>4</td>
            <td>4</td>
            <td>0</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2012-04-21</td>
            <td>2011/2012</td>
            <td>4</td>
            <td>1</td>
            <td>2</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2012-05-02</td>
            <td>2011/2012</td>
            <td>5</td>
            <td>4</td>
            <td>1</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2012-05-05</td>
            <td>2011/2012</td>
            <td>5</td>
            <td>4</td>
            <td>0</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2011-08-29</td>
            <td>2011/2012</td>
            <td>8</td>
            <td>5</td>
            <td>0</td>
            <td>5.0000000000000000</td>
        </tr>
        <tr>
            <td>2011-09-17</td>
            <td>2011/2012</td>
            <td>9</td>
            <td>8</td>
            <td>0</td>
            <td>6.5000000000000000</td>
        </tr>
        <tr>
            <td>2011-09-24</td>
            <td>2011/2012</td>
            <td>9</td>
            <td>5</td>
            <td>0</td>
            <td>6.5000000000000000</td>
        </tr>
        <tr>
            <td>2011-10-29</td>
            <td>2011/2012</td>
            <td>10</td>
            <td>5</td>
            <td>0</td>
            <td>2.6666666666666667</td>
        </tr>
        <tr>
            <td>2011-10-15</td>
            <td>2011/2012</td>
            <td>10</td>
            <td>3</td>
            <td>0</td>
            <td>2.6666666666666667</td>
        </tr>
        <tr>
            <td>2011-10-22</td>
            <td>2011/2012</td>
            <td>10</td>
            <td>0</td>
            <td>0</td>
            <td>2.6666666666666667</td>
        </tr>
        <tr>
            <td>2011-11-19</td>
            <td>2011/2012</td>
            <td>11</td>
            <td>4</td>
            <td>0</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2011-11-29</td>
            <td>2011/2012</td>
            <td>11</td>
            <td>4</td>
            <td>0</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2011-12-03</td>
            <td>2011/2012</td>
            <td>12</td>
            <td>5</td>
            <td>0</td>
            <td>5.0000000000000000</td>
        </tr>
        <tr>
            <td>2013-01-06</td>
            <td>2012/2013</td>
            <td>1</td>
            <td>4</td>
            <td>0</td>
            <td>4.5000000000000000</td>
        </tr>
        <tr>
            <td>2013-01-27</td>
            <td>2012/2013</td>
            <td>1</td>
            <td>5</td>
            <td>1</td>
            <td>4.5000000000000000</td>
        </tr>
        <tr>
            <td>2013-02-10</td>
            <td>2012/2013</td>
            <td>2</td>
            <td>6</td>
            <td>1</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2013-02-23</td>
            <td>2012/2013</td>
            <td>2</td>
            <td>2</td>
            <td>1</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2013-03-09</td>
            <td>2012/2013</td>
            <td>3</td>
            <td>2</td>
            <td>0</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2013-03-17</td>
            <td>2012/2013</td>
            <td>3</td>
            <td>3</td>
            <td>1</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2013-04-06</td>
            <td>2012/2013</td>
            <td>4</td>
            <td>5</td>
            <td>0</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2013-04-20</td>
            <td>2012/2013</td>
            <td>4</td>
            <td>1</td>
            <td>0</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2013-05-05</td>
            <td>2012/2013</td>
            <td>5</td>
            <td>4</td>
            <td>2</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2013-05-19</td>
            <td>2012/2013</td>
            <td>5</td>
            <td>2</td>
            <td>1</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2013-06-01</td>
            <td>2012/2013</td>
            <td>6</td>
            <td>4</td>
            <td>1</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2012-08-19</td>
            <td>2012/2013</td>
            <td>8</td>
            <td>5</td>
            <td>1</td>
            <td>5.0000000000000000</td>
        </tr>
        <tr>
            <td>2012-09-02</td>
            <td>2012/2013</td>
            <td>9</td>
            <td>1</td>
            <td>0</td>
            <td>1.5000000000000000</td>
        </tr>
        <tr>
            <td>2012-09-22</td>
            <td>2012/2013</td>
            <td>9</td>
            <td>2</td>
            <td>0</td>
            <td>1.5000000000000000</td>
        </tr>
        <tr>
            <td>2012-10-07</td>
            <td>2012/2013</td>
            <td>10</td>
            <td>2</td>
            <td>2</td>
            <td>2.0000000000000000</td>
        </tr>
        <tr>
            <td>2012-11-17</td>
            <td>2012/2013</td>
            <td>11</td>
            <td>3</td>
            <td>1</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2012-11-03</td>
            <td>2012/2013</td>
            <td>11</td>
            <td>3</td>
            <td>1</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2012-12-16</td>
            <td>2012/2013</td>
            <td>12</td>
            <td>4</td>
            <td>1</td>
            <td>4.5000000000000000</td>
        </tr>
        <tr>
            <td>2012-12-01</td>
            <td>2012/2013</td>
            <td>12</td>
            <td>5</td>
            <td>1</td>
            <td>4.5000000000000000</td>
        </tr>
        <tr>
            <td>2014-01-05</td>
            <td>2013/2014</td>
            <td>1</td>
            <td>4</td>
            <td>0</td>
            <td>3.5000000000000000</td>
        </tr>
        <tr>
            <td>2014-01-26</td>
            <td>2013/2014</td>
            <td>1</td>
            <td>3</td>
            <td>0</td>
            <td>3.5000000000000000</td>
        </tr>
        <tr>
            <td>2014-02-15</td>
            <td>2013/2014</td>
            <td>2</td>
            <td>6</td>
            <td>0</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2014-02-01</td>
            <td>2013/2014</td>
            <td>2</td>
            <td>2</td>
            <td>3</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2014-03-16</td>
            <td>2013/2014</td>
            <td>3</td>
            <td>7</td>
            <td>0</td>
            <td>4.6666666666666667</td>
        </tr>
        <tr>
            <td>2014-03-26</td>
            <td>2013/2014</td>
            <td>3</td>
            <td>3</td>
            <td>0</td>
            <td>4.6666666666666667</td>
        </tr>
        <tr>
            <td>2014-03-02</td>
            <td>2013/2014</td>
            <td>3</td>
            <td>4</td>
            <td>1</td>
            <td>4.6666666666666667</td>
        </tr>
        <tr>
            <td>2014-04-05</td>
            <td>2013/2014</td>
            <td>4</td>
            <td>3</td>
            <td>1</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2014-04-20</td>
            <td>2013/2014</td>
            <td>4</td>
            <td>2</td>
            <td>1</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2014-05-17</td>
            <td>2013/2014</td>
            <td>5</td>
            <td>1</td>
            <td>1</td>
            <td>1.5000000000000000</td>
        </tr>
        <tr>
            <td>2014-05-03</td>
            <td>2013/2014</td>
            <td>5</td>
            <td>2</td>
            <td>2</td>
            <td>1.5000000000000000</td>
        </tr>
        <tr>
            <td>2013-08-18</td>
            <td>2013/2014</td>
            <td>8</td>
            <td>7</td>
            <td>0</td>
            <td>7.0000000000000000</td>
        </tr>
        <tr>
            <td>2013-09-24</td>
            <td>2013/2014</td>
            <td>9</td>
            <td>4</td>
            <td>1</td>
            <td>3.5000000000000000</td>
        </tr>
        <tr>
            <td>2013-09-14</td>
            <td>2013/2014</td>
            <td>9</td>
            <td>3</td>
            <td>2</td>
            <td>3.5000000000000000</td>
        </tr>
        <tr>
            <td>2013-10-26</td>
            <td>2013/2014</td>
            <td>10</td>
            <td>2</td>
            <td>1</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2013-10-05</td>
            <td>2013/2014</td>
            <td>10</td>
            <td>4</td>
            <td>1</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2013-11-01</td>
            <td>2013/2014</td>
            <td>11</td>
            <td>1</td>
            <td>0</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2013-11-23</td>
            <td>2013/2014</td>
            <td>11</td>
            <td>4</td>
            <td>0</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2013-12-14</td>
            <td>2013/2014</td>
            <td>12</td>
            <td>2</td>
            <td>1</td>
            <td>2.0000000000000000</td>
        </tr>
        <tr>
            <td>2015-01-11</td>
            <td>2014/2015</td>
            <td>1</td>
            <td>3</td>
            <td>1</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2015-02-15</td>
            <td>2014/2015</td>
            <td>2</td>
            <td>5</td>
            <td>0</td>
            <td>2.6666666666666667</td>
        </tr>
        <tr>
            <td>2015-02-01</td>
            <td>2014/2015</td>
            <td>2</td>
            <td>3</td>
            <td>2</td>
            <td>2.6666666666666667</td>
        </tr>
        <tr>
            <td>2015-02-21</td>
            <td>2014/2015</td>
            <td>2</td>
            <td>0</td>
            <td>1</td>
            <td>2.6666666666666667</td>
        </tr>
        <tr>
            <td>2015-03-08</td>
            <td>2014/2015</td>
            <td>3</td>
            <td>6</td>
            <td>1</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2015-03-22</td>
            <td>2014/2015</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2015-04-18</td>
            <td>2014/2015</td>
            <td>4</td>
            <td>2</td>
            <td>0</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2015-04-28</td>
            <td>2014/2015</td>
            <td>4</td>
            <td>6</td>
            <td>0</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2015-04-08</td>
            <td>2014/2015</td>
            <td>4</td>
            <td>4</td>
            <td>0</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2015-05-23</td>
            <td>2014/2015</td>
            <td>5</td>
            <td>2</td>
            <td>2</td>
            <td>2.0000000000000000</td>
        </tr>
        <tr>
            <td>2015-05-09</td>
            <td>2014/2015</td>
            <td>5</td>
            <td>2</td>
            <td>0</td>
            <td>2.0000000000000000</td>
        </tr>
        <tr>
            <td>2014-08-24</td>
            <td>2014/2015</td>
            <td>8</td>
            <td>3</td>
            <td>0</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2014-09-13</td>
            <td>2014/2015</td>
            <td>9</td>
            <td>2</td>
            <td>0</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2014-09-27</td>
            <td>2014/2015</td>
            <td>9</td>
            <td>6</td>
            <td>0</td>
            <td>4.0000000000000000</td>
        </tr>
        <tr>
            <td>2014-10-18</td>
            <td>2014/2015</td>
            <td>10</td>
            <td>3</td>
            <td>0</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2014-11-01</td>
            <td>2014/2015</td>
            <td>11</td>
            <td>0</td>
            <td>1</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2014-11-22</td>
            <td>2014/2015</td>
            <td>11</td>
            <td>5</td>
            <td>1</td>
            <td>2.5000000000000000</td>
        </tr>
        <tr>
            <td>2014-12-20</td>
            <td>2014/2015</td>
            <td>12</td>
            <td>5</td>
            <td>0</td>
            <td>5.0000000000000000</td>
        </tr>
        <tr>
            <td>2014-12-07</td>
            <td>2014/2015</td>
            <td>12</td>
            <td>5</td>
            <td>1</td>
            <td>5.0000000000000000</td>
        </tr>
        <tr>
            <td>2015-11-08</td>
            <td>2015/2016</td>
            <td>11</td>
            <td>3</td>
            <td>0</td>
            <td>3.5000000000000000</td>
        </tr>
        <tr>
            <td>2015-11-28</td>
            <td>2015/2016</td>
            <td>11</td>
            <td>4</td>
            <td>0</td>
            <td>3.5000000000000000</td>
        </tr>
        <tr>
            <td>2015-12-30</td>
            <td>2015/2016</td>
            <td>12</td>
            <td>4</td>
            <td>0</td>
            <td>3.0000000000000000</td>
        </tr>
        <tr>
            <td>2015-12-12</td>
            <td>2015/2016</td>
            <td>12</td>
            <td>2</td>
            <td>2</td>
            <td>3.0000000000000000</td>
        </tr>
    </tbody>
</table>



---

#### ROWS BETWEEN [start] AND [finish]
* Sliding windows
    * perform calculations relative to the current row
    * can be used to calculate totals, sums, averages, etc.
    * can be partitioned by one or more columns
    * types
        * `PRECEDING` - specifiy number of rows before the current row to include in calculation
        * `FOLLOWING` - specifiy number of rows after the current row to include in calculation
        * `UNBOUNDED PRECEDING` - include every row since the beginning of the data set in calculation
        * `UNBOUNDED FOLLOWING` - include every row to the end of the data set in calculation
        * `CURRENT ROW` - stop calculation at the current row

* 2008/2009시즌 FC 바르셀로나의 경기에 따른 누적 득점 수와, 누적 득점 평균은?


```sql
%%sql
SELECT 
	date,
	home_team_goal,
    SUM(home_team_goal) OVER(ORDER BY date 
         ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_total,
    AVG(home_team_goal) OVER(ORDER BY date 
         ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) AS running_avg
FROM matches
WHERE 
	home_team_api_id = 8634
	AND season = '2008/2009';
```

       mysql://root:***@0.0.0.0:3306/football
     * postgresql://postgres:***@0.0.0.0:5432/football
    19 rows affected.





<table>
    <thead>
        <tr>
            <th>date</th>
            <th>home_team_goal</th>
            <th>running_total</th>
            <th>running_avg</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2008-09-13T00:00:00Z</td>
            <td>1</td>
            <td>1</td>
            <td>1.00000000000000000000</td>
        </tr>
        <tr>
            <td>2008-09-24T00:00:00Z</td>
            <td>3</td>
            <td>4</td>
            <td>2.0000000000000000</td>
        </tr>
        <tr>
            <td>2008-10-04T00:00:00Z</td>
            <td>6</td>
            <td>10</td>
            <td>3.3333333333333333</td>
        </tr>
        <tr>
            <td>2008-10-25T00:00:00Z</td>
            <td>5</td>
            <td>15</td>
            <td>3.7500000000000000</td>
        </tr>
        <tr>
            <td>2008-11-08T00:00:00Z</td>
            <td>6</td>
            <td>21</td>
            <td>4.2000000000000000</td>
        </tr>
        <tr>
            <td>2008-11-23T00:00:00Z</td>
            <td>1</td>
            <td>22</td>
            <td>3.6666666666666667</td>
        </tr>
        <tr>
            <td>2008-12-06T00:00:00Z</td>
            <td>4</td>
            <td>26</td>
            <td>3.7142857142857143</td>
        </tr>
        <tr>
            <td>2008-12-13T00:00:00Z</td>
            <td>2</td>
            <td>28</td>
            <td>3.5000000000000000</td>
        </tr>
        <tr>
            <td>2009-01-03T00:00:00Z</td>
            <td>3</td>
            <td>31</td>
            <td>3.4444444444444444</td>
        </tr>
        <tr>
            <td>2009-01-17T00:00:00Z</td>
            <td>5</td>
            <td>36</td>
            <td>3.6000000000000000</td>
        </tr>
        <tr>
            <td>2009-01-24T00:00:00Z</td>
            <td>4</td>
            <td>40</td>
            <td>3.6363636363636364</td>
        </tr>
        <tr>
            <td>2009-02-08T00:00:00Z</td>
            <td>3</td>
            <td>43</td>
            <td>3.5833333333333333</td>
        </tr>
        <tr>
            <td>2009-02-21T00:00:00Z</td>
            <td>1</td>
            <td>44</td>
            <td>3.3846153846153846</td>
        </tr>
        <tr>
            <td>2009-03-07T00:00:00Z</td>
            <td>2</td>
            <td>46</td>
            <td>3.2857142857142857</td>
        </tr>
        <tr>
            <td>2009-03-22T00:00:00Z</td>
            <td>6</td>
            <td>52</td>
            <td>3.4666666666666667</td>
        </tr>
        <tr>
            <td>2009-04-11T00:00:00Z</td>
            <td>2</td>
            <td>54</td>
            <td>3.3750000000000000</td>
        </tr>
        <tr>
            <td>2009-04-22T00:00:00Z</td>
            <td>4</td>
            <td>58</td>
            <td>3.4117647058823529</td>
        </tr>
        <tr>
            <td>2009-05-10T00:00:00Z</td>
            <td>3</td>
            <td>61</td>
            <td>3.3888888888888889</td>
        </tr>
        <tr>
            <td>2009-05-23T00:00:00Z</td>
            <td>0</td>
            <td>61</td>
            <td>3.2105263157894737</td>
        </tr>
    </tbody>
</table>



### Practice

* 바르세로나가 2008/2009 시즌에 치른 경기 중 득실차의 절대값이 높은 순으로 구하시오.


```sql
%%sql
WITH home AS (
  SELECT m.id, t.team_long_name,
	  CASE WHEN m.home_team_goal > m.away_team_goal THEN 'FCB Win'
		   WHEN m.home_team_goal < m.away_team_goal THEN 'FCB Loss' 
  		   ELSE 'Tie' END AS outcome
  FROM matches AS m
  LEFT JOIN team AS t ON m.home_team_api_id = t.team_api_id),
away AS (
  SELECT m.id, t.team_long_name,
	  CASE WHEN m.home_team_goal > m.away_team_goal THEN 'FCB Loss'
		   WHEN m.home_team_goal < m.away_team_goal THEN 'FCB Win' 
  		   ELSE 'Tie' END AS outcome
  FROM matches AS m
  LEFT JOIN team AS t ON m.away_team_api_id = t.team_api_id)

SELECT DISTINCT
    m.date,
    home.team_long_name AS home_team,
    away.team_long_name AS away_team,
    m.home_team_goal, m.away_team_goal,
    ABS(m.home_team_goal - m.away_team_goal) AS abs_goal,
    RANK() OVER(ORDER BY ABS(home_team_goal - away_team_goal) DESC) as rank
FROM matches AS m
LEFT JOIN home ON m.id = home.id
LEFT JOIN away ON m.id = away.id
WHERE m.season = '2008/2009'
AND ((home.team_long_name = 'FC Barcelona') OR (away.team_long_name = 'FC Barcelona'))
order by rank;
```

       mysql://root:***@0.0.0.0:3306/football
     * postgresql://postgres:***@0.0.0.0:5432/football
    38 rows affected.





<table>
    <thead>
        <tr>
            <th>date</th>
            <th>home_team</th>
            <th>away_team</th>
            <th>home_team_goal</th>
            <th>away_team_goal</th>
            <th>abs_goal</th>
            <th>rank</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>2008-11-08T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>Real Valladolid</td>
            <td>6</td>
            <td>0</td>
            <td>6</td>
            <td>1</td>
        </tr>
        <tr>
            <td>2009-03-22T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>Málaga CF</td>
            <td>6</td>
            <td>0</td>
            <td>6</td>
            <td>1</td>
        </tr>
        <tr>
            <td>2008-09-21T00:00:00Z</td>
            <td>Real Sporting de Gijón</td>
            <td>FC Barcelona</td>
            <td>1</td>
            <td>6</td>
            <td>5</td>
            <td>3</td>
        </tr>
        <tr>
            <td>2008-10-04T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>Atlético Madrid</td>
            <td>6</td>
            <td>1</td>
            <td>5</td>
            <td>3</td>
        </tr>
        <tr>
            <td>2008-10-25T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>UD Almería</td>
            <td>5</td>
            <td>0</td>
            <td>5</td>
            <td>3</td>
        </tr>
        <tr>
            <td>2009-01-17T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>RC Deportivo de La Coruña</td>
            <td>5</td>
            <td>0</td>
            <td>5</td>
            <td>3</td>
        </tr>
        <tr>
            <td>2008-12-06T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>Valencia CF</td>
            <td>4</td>
            <td>0</td>
            <td>4</td>
            <td>7</td>
        </tr>
        <tr>
            <td>2009-04-22T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>Sevilla FC</td>
            <td>4</td>
            <td>0</td>
            <td>4</td>
            <td>7</td>
        </tr>
        <tr>
            <td>2009-05-02T00:00:00Z</td>
            <td>Real Madrid CF</td>
            <td>FC Barcelona</td>
            <td>2</td>
            <td>6</td>
            <td>4</td>
            <td>7</td>
        </tr>
        <tr>
            <td>2008-11-01T00:00:00Z</td>
            <td>Málaga CF</td>
            <td>FC Barcelona</td>
            <td>1</td>
            <td>4</td>
            <td>3</td>
            <td>10</td>
        </tr>
        <tr>
            <td>2008-11-29T00:00:00Z</td>
            <td>Sevilla FC</td>
            <td>FC Barcelona</td>
            <td>0</td>
            <td>3</td>
            <td>3</td>
            <td>10</td>
        </tr>
        <tr>
            <td>2009-01-24T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>CD Numancia</td>
            <td>4</td>
            <td>1</td>
            <td>3</td>
            <td>10</td>
        </tr>
        <tr>
            <td>2008-11-16T00:00:00Z</td>
            <td>RC Recreativo</td>
            <td>FC Barcelona</td>
            <td>0</td>
            <td>2</td>
            <td>2</td>
            <td>13</td>
        </tr>
        <tr>
            <td>2008-12-13T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>Real Madrid CF</td>
            <td>2</td>
            <td>0</td>
            <td>2</td>
            <td>13</td>
        </tr>
        <tr>
            <td>2009-01-03T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>RCD Mallorca</td>
            <td>3</td>
            <td>1</td>
            <td>2</td>
            <td>13</td>
        </tr>
        <tr>
            <td>2009-02-08T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>Real Sporting de Gijón</td>
            <td>3</td>
            <td>1</td>
            <td>2</td>
            <td>13</td>
        </tr>
        <tr>
            <td>2009-03-07T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>Athletic Club de Bilbao</td>
            <td>2</td>
            <td>0</td>
            <td>2</td>
            <td>13</td>
        </tr>
        <tr>
            <td>2009-03-15T00:00:00Z</td>
            <td>UD Almería</td>
            <td>FC Barcelona</td>
            <td>0</td>
            <td>2</td>
            <td>2</td>
            <td>13</td>
        </tr>
        <tr>
            <td>2009-04-11T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>RC Recreativo</td>
            <td>2</td>
            <td>0</td>
            <td>2</td>
            <td>13</td>
        </tr>
        <tr>
            <td>2008-08-31T00:00:00Z</td>
            <td>CD Numancia</td>
            <td>FC Barcelona</td>
            <td>1</td>
            <td>0</td>
            <td>1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2008-09-24T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>Real Betis Balompié</td>
            <td>3</td>
            <td>2</td>
            <td>1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2008-09-27T00:00:00Z</td>
            <td>RCD Espanyol</td>
            <td>FC Barcelona</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2008-10-19T00:00:00Z</td>
            <td>Athletic Club de Bilbao</td>
            <td>FC Barcelona</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2008-12-21T00:00:00Z</td>
            <td>Villarreal CF</td>
            <td>FC Barcelona</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2009-01-11T00:00:00Z</td>
            <td>CA Osasuna</td>
            <td>FC Barcelona</td>
            <td>2</td>
            <td>3</td>
            <td>1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2009-02-01T00:00:00Z</td>
            <td>Racing Santander</td>
            <td>FC Barcelona</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2009-02-21T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>RCD Espanyol</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2009-03-01T00:00:00Z</td>
            <td>Atlético Madrid</td>
            <td>FC Barcelona</td>
            <td>4</td>
            <td>3</td>
            <td>1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2009-04-04T00:00:00Z</td>
            <td>Real Valladolid</td>
            <td>FC Barcelona</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2009-04-18T00:00:00Z</td>
            <td>Getafe CF</td>
            <td>FC Barcelona</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2009-05-17T00:00:00Z</td>
            <td>RCD Mallorca</td>
            <td>FC Barcelona</td>
            <td>2</td>
            <td>1</td>
            <td>1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2009-05-23T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>CA Osasuna</td>
            <td>0</td>
            <td>1</td>
            <td>1</td>
            <td>20</td>
        </tr>
        <tr>
            <td>2008-09-13T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>Racing Santander</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>33</td>
        </tr>
        <tr>
            <td>2008-11-23T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>Getafe CF</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>33</td>
        </tr>
        <tr>
            <td>2009-02-14T00:00:00Z</td>
            <td>Real Betis Balompié</td>
            <td>FC Barcelona</td>
            <td>2</td>
            <td>2</td>
            <td>0</td>
            <td>33</td>
        </tr>
        <tr>
            <td>2009-04-25T00:00:00Z</td>
            <td>Valencia CF</td>
            <td>FC Barcelona</td>
            <td>2</td>
            <td>2</td>
            <td>0</td>
            <td>33</td>
        </tr>
        <tr>
            <td>2009-05-10T00:00:00Z</td>
            <td>FC Barcelona</td>
            <td>Villarreal CF</td>
            <td>3</td>
            <td>3</td>
            <td>0</td>
            <td>33</td>
        </tr>
        <tr>
            <td>2009-05-30T00:00:00Z</td>
            <td>RC Deportivo de La Coruña</td>
            <td>FC Barcelona</td>
            <td>1</td>
            <td>1</td>
            <td>0</td>
            <td>33</td>
        </tr>
    </tbody>
</table>


