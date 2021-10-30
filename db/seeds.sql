INSERT INTO department (name)
VALUES 
('sales'),
('front-end'),
('UI/UX'),
('back-end'),
('recruiter')
;
INSERT INTO roles (title, salary, department_id)
VALUES 
('head of sales', 80000, 1),
('senior advisor', 140000, 2),
('head of front end', 80000, 2),
('sales temp', 65000, 1),
('junior frontend dev', 70000, 2),
('mid-level dev', 120000, 4),
('Executive recruiter', 80000, 5),
('Head of UX/UI design', 90000, 3),
('senior backend dev', 17000, 4),
('mid level front end dev', 90000, 2)
;
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('stacy','giono',1,1),
('flounder','fish',2,2),
('pop','odop',3,3),
('indian','jones',4,NULL),
('magiq','boos',5,NULL),
('franny','panny',6,NULL),
('jeorge','gionor',7,4),
('frop','stop',4,NULL),
('tamer','dadur',6,NULL),
('hanma','jack',8,5),
('maurice','spanerd',9,6),
('terrance','ter',10,NULL),
('mike','tieson',10,NULL),
('lemon','paid',5,NULL),
('rest','test',5,NULL)

-- ('stacy','giono',1,NULL),
-- ('flounder','fish',2,NULL),
-- ('pop','odop',3,NULL),
-- ('indian','jones',4,1),
-- ('magiq','boos',5,3),
-- ('franny','panny',6,6),
-- ('jeorge','gionor',7,NULL),
-- ('frop','stop',4,1),
-- ('tamer','dadur',6,6),
-- ('hanma','jack',8,NULL),
-- ('maurice','spanerd',9,NULL),
-- ('terrance','ter',10,2),
-- ('mike','tieson',10,2),
-- ('lemon','paid',5,3),
-- ('rest','test',5,3)
;
INSERT INTO manager (id, manager_full_name)
VALUES
(1, "stacy giono"),
(2,'flounder fish'),
(3,'pop odop'),
(NULL,'indian jones'),
(NULL,'magiq boos'),
(NULL,'franny panny'),
(4,'jeorge gionor'),
(NULL,'frop stop'),
(NULL,'tamer dadur'),
(5,'hanma jack'),
(6,'maurice spanerd'),
(NULL,'terrance ter'),
(NULL,'mik tieson'),
(NULL,'lemon paid'),
(NULL,'rest test')
;
