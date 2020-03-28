# Write your MySQL query statement below
SELECT Result.Name AS Customers
FROM (SELECT Customers.Name AS Name, Orders.Id AS OrderId
FROM Customers
LEFT JOIN Orders
On Customers.Id = Orders.CustomerId) AS Result
WHERE Result.OrderId IS NULL;

Customers
+----+-------+
| Id | Name  |
+----+-------+
| 1  | Joe   |
| 2  | Henry |
| 3  | Sam   |
| 4  | Max   |
+----+-------+

Orders
+----+------------+
| Id | CustomerId |
+----+------------+
| 1  | 3          |
| 2  | 1          |
+----+------------+

+-----------+
| Customers |
+-----------+
| Henry     |
| Max       |
+-----------+