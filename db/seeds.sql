INSERT INTO department (dept_name)
VALUES
("Engineering"),
("Geology"),
("Mine Operations"),
("Safety"),
("Information Technology (IT)"),
("Purchasing"),
("Executive");

INSERT INTO role (title, salary, department_id)
VALUES
("Surveyor", 60000, 1),
("Surveying Lead", 85000, 1),
("Ventilation Tech", 65000, 1),
("Senior Ventilation Tech", 90000, 1),
("Ground Control Tech", 65000, 1),
("Senior Ground Control Engineer", 100000, 1),
("Blasting Engineer", 80000, 1),
("Chief Engineer", 120000, 1),
("Geology Tech", 55000, 2),
("Production Geologist", 80000, 2),
("Exploration Geologist", 75000, 2),
("Senior Geologist", 100000, 2),
("Chief Geologist", 120000, 2),
("Mine Labourer", 70000, 3),
("Miner 5", 85000, 3),
("Miner 4", 100000, 3),
("Miner 3", 110000, 3),
("Miner 2", 130000, 3),
("Miner 1", 160000, 3),
("Mine Supervisor", 110000, 3),
("Mine Foreman", 130000, 3),
("Mine SuperIntendent", 150000, 3),
("Safety Coordinator", 85000, 4),
("Safety Manager", 110000, 4),
("IT tech", 65000, 5),
("Purchaser", 90000, 6),
("Purchasing Manager", 120000, 6),
("General Manager", 180000, 7);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Steve", "Jobs", 1, 11),
("Bill", "Gates", 1, 11),
("James", "Gagne", 2, 11),
("Isabelle", "Labelle", 3, 11),
("Ian", "Southern", 3, 11),
("Adam", "McFadden", 4, 11),
("Jean", "Marier", 5, 11),
("Ian", "Loney", 5, 11),
("Stephanie", "Gagne", 6, 11),
("Alexandre", "Dorval", 7, 11),
("Nathan", "Bourgeault", 8, 36),
("Jessica", "Puchalski", 9, 19),
("Amber", "Pattinson", 9, 19),
("Sophie", "Raza", 10, 19),
("Raphael", "Frenchie", 10, 19),
("Marshall", "Mall", 11, 19),
("Rachel", "Dumas", 11, 19),
("Justin", "Roy", 12, 19),
("Raynald", "Vincent", 13, 36),
("Justin", "Powers", 14, 29),
("Sarah", "Connor", 14, 29),
("Joseph", "Stalline", 15, 29),
("Manuel", "Macron", 16, 29),
("Justin", "Trudeau", 17, 29),
("Vlademir", "Putin", 18, 29),
("Elizabeth", "Windsor", 19, 29),
("Boris", "Johnson", 20, 29),
("Stephane", "Labonte", 21, 29),
("Jacques", "Pelletier", 22, 36),
("Denis", "Lefebvre", 23, 31),
("Steve", "McQueen", 24, 36),
("Robert", "Plant", 25, 36),
("James", "Page", 26, 35),
("John", "Bottom", 26, 35),
("Jean-Claude", "Van Dam", 27, 36),
("Elon", "Musk", 28, NULL);





