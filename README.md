# MTUxKU: Employee API

## First, Run the project
```bash
$ npm run start-dev
```

## Seeding mock date
```bash
$ node generateMockData.js
```
* Can change number to seeding data into database in "const employeeCount = 1;"

## SQL Example
```
SELECT COUNT(id) FROM employees WHERE join_date = '2019-03-23';
SELECT COUNT(id) FROM employees_indexed WHERE join_date = '2019-03-23';

SELECT COUNT(id) FROM employees WHERE department LIKE '%pov%';
SELECT COUNT(id) FROM employees_indexed WHERE department LIKE '%pov%';

SELECT id, name, phone_number, join_date FROM employees WHERE name = 'Aaron Myers' AND phone_number = '(711) 968-3455' AND join_date = '2019-06-24' LIMIT 100 OFFSET 0;
```
