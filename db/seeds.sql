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
("Steve", "Jobs", 1, 8),
("Bill", "Gates", 1, 8),
("James", "Gagne", 2, 8),
("Isabelle", "Labelle", 3, 8),
("Ian", "Southern", 3, 8),
("Adam", "McFadden", 4, 8),
("Jean", "Marier", 5, 8),
("Ian", "Loney", 5, 8),
("Stephanie", "Gagne", 6, 8),
("Alexandre", "Dorval", 7, 8),
("Nathan", "Bourgeault", 8, 28),
("Jessica", "Puchalski", 9, 13),
("Amber", "Pattinson", 9, 13),
("Sophie", "Raza", 10, 13),
("Raphael", "Frenchie", 10, 13),
("Marshall", "Mall", 11, 13),
("Rachel", "Dumas", 11, 13),
("Justin", "Roy", 12, 13),
("Raynald", "Vincent", 13, 28),
("Justin", "Powers", 14, 22),
("Sarah", "Connor", 14, 22),
("Joseph", "Stalline", 15, 22),
("Manuel", "Macron", 16, 22),
("Justin", "Trudeau", 17, 22),
("Vlademir", "Putin", 18, 22),
("Elizabeth", "Windsor", 19, 22),
("Boris", "Johnson", 20, 22),
("Stephane", "Labonte", 21, 22),
("Jacques", "Pelletier", 22, 28),
("Denis", "Lefebvre", 23, 24),
("Steve", "McQueen", 24, 28),
("Robert", "Plant", 25, 28),
("James", "Page", 26, 27),
("John", "Bottom", 26, 27),
("Jean-Claude", "Van Dam", 27, 28),
("Elon", "Musk", 28, NULL);





