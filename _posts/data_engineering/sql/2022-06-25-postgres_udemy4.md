---
title: "[PostgreSQL] Data Types"
layout: single
date: '25/05/2022'
toc: true
toc_sticky: true
toc_label: Table of Contents
categories:
  - SQL
tags:
  - SQL
  - POSTGRESQL
---

### Data Types
* Data Types
* General Rule for Numeric
* Datetypes
* INTERVAL

---


### Data Types
* Numbers
  * Numbers without any decimal points
    * smallint: -32768 ~ +32767
    * integer: -2147583648 ~ +2147583647
    * bigint: -9223372036854775808 ~ +9223372036854775807
  * No decimal point, auto increment
    * smallserial: 1 ~ 32767
    * serial: 1 ~ 2147483647
    * bigserial 1 ~ 9223372036854775807
  * Number with decimal points
    * precise
      * decimal: 131072 digits before decimal point, 16383 after
      * numeric: 131072 before decimal point, 16383 after
    * Not precise
      * real: 1E-37 to 1E37 with at least 6 plcaes precision
      * double precision: 1E-307 to 1E308 with at least 15 place precision
      * float: Same as real or double precision
* Date/Time 
* Character
  * char([number]): Store some characters, length is always 5
    * if the length of the value is higher: value is trimmed
    * if the length of the value is smaller: spaces are inserted
  * varchar: Store any length of string
  * varchar([number]): Store any string up to [number] characters, automatically removing extra characters
  * text: Store any length of string
* Boolean
  * True: true, 'yes', 'on', 1, 't', 'y'
    * `SELECT 'yes'::BOOL`
  * False: flase, 'no', 'off', 0, 'f', 'n'
  * NULL: 'null'
* Currency
* Binary
* JSON
* Geometric
* Range
* Arrays
* XML
* UUID

---

### General Rule for Numeric
  * id column: Use serial
  * without a deciaml: USE Integer
  * Needs decimal and has to be precise: numeric
  * Needs decimal but doesn't need to be very precise: double precision

---

### Datetypes
* Can use various forms for date(Postgres recognizes a lot of patterns by itself)
* TIME ZONE can be added or not
* TIMESTAMP with/without TIME ZONE

```sql
-- various forms
SELECT ('NOV 20, 1980'::DATE);
SELECT ('11-20-1980'::DATE);
-- and so on

-- TIME WITHOUT TIMEZONE
SELECT('01:23'::TIME WITHOUT TIME ZONE);
SELECT('01:23 PM'::TIME WITHOUT TIME ZONE);

-- TIME WITH TIMEZONE
SELECT('01:23:23 AM EST'::TIME WITH TIME ZONE);
SELECT('01:23:23 AM UTC'::TIME WITH TIME ZONE);

-- TIMESTAMP WITH TIMEZONE
SELECT ('NOV-20-1980 1:23 AM PSY'::TIMESTAMP WITH TIME ZONE);

-- Calculation with different timezone is available
SELECT ('NOV-20-1980 1:23 AM EST'::TIMESTAMP WITH TIME ZONE) - ('NOV-20-1980 1:23 AM UTC'::TIMESTAMP WITH TIME ZONE);

```

### INTERVAL
* INTERVAL is useful for calculation

```sql
SELECT('1 day'::INTERVAL);
SELECT('1 D 20 H'::INTERVAL);
SELECT('1 D 20 H 30 M 45 S'::INTERVAL) - ('1 D'::INTERVAL);
```