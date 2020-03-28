# Write your MySQL query statement below
SELECT a.Name AS Employee
FROM Employee a
JOIN Employee b
ON a.ManagerId = b.Id AND a.Salary > b.Salary;

+----+-------+--------+-----------+
| Id | Name  | Salary | ManagerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | NULL      |
| 4  | Max   | 90000  | NULL      |
+----+-------+--------+-----------+

+----------+
| Employee |
+----------+
| Joe      |
+----------+