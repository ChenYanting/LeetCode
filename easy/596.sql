# Write your MySQL query statement below
SELECT class
FROM courses
GROUP BY class
HAVING COUNT(DISTINCT student) >= 5;

courses
+---------+------------+
| student | class      |
+---------+------------+
| A       | Math       |
| B       | English    |
| C       | Math       |
| D       | Biology    |
| E       | Math       |
| F       | Computer   |
| G       | Math       |
| H       | Math       |
| I       | Math       |
+---------+------------+

+---------+
| class   |
+---------+
| Math    |
+---------+