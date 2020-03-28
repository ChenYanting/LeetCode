# Write your MySQL query statement below
SELECT w1.Id
FROM Weather w1, Weather w2
WHERE DATEDIFF(w1.RecordDate, w2.RecordDate) = 1
AND w1.Temperature > w2.Temperature;

Weather
+---------+------------------+------------------+
| Id(INT) | RecordDate(DATE) | Temperature(INT) |
+---------+------------------+------------------+
|       1 |       2015-01-01 |               10 |
|       2 |       2015-01-02 |               25 |
|       3 |       2015-01-03 |               20 |
|       4 |       2015-01-04 |               30 |
+---------+------------------+------------------+

+----+
| Id |
+----+
|  2 |
|  4 |
+----+