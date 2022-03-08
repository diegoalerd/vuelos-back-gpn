INSERT INTO country
VALUES (1, 'United State');

INSERT INTO state
VALUES (1, 'New York', 1);

INSERT INTO state
VALUES (2, 'California', 1);

INSERT INTO state
VALUES (3, 'Massachusetts', 1);

INSERT INTO city
VALUES (1, 'New York', 1);

INSERT INTO city
VALUES (2, 'Los Angeles', 2);

INSERT INTO city
VALUES (3, 'San Francisco', 2);

INSERT INTO city
VALUES (4, 'Boston', 3);

INSERT INTO airport
VALUES (1, 'JFK', 1);

INSERT INTO airport
VALUES (2, 'LAX', 2);

INSERT INTO airport
VALUES (3, 'SFO', 3);

INSERT INTO airport
VALUES (4, 'BOS', 4);

INSERT INTO flyght
VALUES (1, '2001-09-28', '03:00:00', '05:00:00', 200, '2 h',  'BA2490', 'ida',, 1, 2);

INSERT INTO flyght
VALUES (2,'2001-09-28', '05:00:00', '07:00:00', 200, '2 h', 'BA2491A', 'ida', 3, 4);

INSERT INTO flyght
VALUES (3, '2001-09-28', '17:00:00', '20:00:00', 200, '3 h', 'CB5481', 'ida', 1, 2);

INSERT INTO flyght
VALUES (4, '2001-09-28', '17:00:00', '20:00:00', 200, '3 h', 'CB5476A','ida', 3, 4,);