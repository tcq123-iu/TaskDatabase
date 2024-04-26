CREATE TABLE User (
  UserID INT NOT NULL,
  UserName VARCHAR(100) NOT NULL UNIQUE,
  Email VARCHAR(100) NOT NULL UNIQUE,
  Password VARCHAR(100) NOT NULL,
  LastName VARCHAR(100) NOT NULL,
  FirstName VARCHAR(100) NOT NULL,
  PRIMARY KEY (UserID, UserName) -- Composite key
);

CREATE TABLE Boards (
  BoardID INT NOT NULL,
  UserID INT NOT NULL,
  Title VARCHAR(100) NOT NULL,
  CreatedAt DATETIME NOT NULL,
  UpdatedAt DATETIME NOT NULL,
  FOREIGN KEY (UserID) REFERENCES User(UserID),
  PRIMARY KEY (BoardID)
);

-- function table 
CREATE TABLE BoardMember (
  MemberID INT NOT NULL,
  BoardID INT NOT NULL,
  MemberName VARCHAR(100) NOT NULL,
  FOREIGN KEY (MemberName) REFERENCES User(UserName),
  FOREIGN KEY (BoardID) REFERENCES Boards(BoardID),
  PRIMARY KEY (MemberID)
);

CREATE TABLE Lists (
  ListID INT NOT NULL,
  BoardID INT NOT NULL,
  Title VARCHAR(100) NOT NULL,
  CreatedAt DATETIME NOT NULL,
  UpdatedAt DATETIME NOT NULL,
  FOREIGN KEY (BoardID) REFERENCES Boards(BoardID),
  PRIMARY KEY (ListID)
);


CREATE TABLE Cards (
  CardID INT NOT NULL,
  ListID INT NOT NULL,
  Title VARCHAR(100) NOT NULL UNIQUE,
  Description VARCHAR(255) NOT NULL,
  DueDate DATE NOT NULL,
  ReminderDate DATE NOT NULL,
  FOREIGN KEY (ListID) REFERENCES Lists(ListID),
  PRIMARY KEY (CardID)
);


CREATE TABLE Comments (
  CommentID INT NOT NULL,
  CardID INT NOT NULL,
  Comment VARCHAR(300) NOT NULL,
  CreatedAt DATETIME NOT NULL,
  UpdatedAt DATETIME NOT NULL,
  FOREIGN KEY (CardID) REFERENCES Cards(CardID),
  PRIMARY KEY (CommentID)
);


CREATE TABLE Checklists (
  ChecklistID INT NOT NULL,
  CardID INT NOT NULL,
  Title VARCHAR(100) NOT NULL UNIQUE, 
  IsChecked BOOLEAN NOT NULL,
  FOREIGN KEY (CardID) REFERENCES Cards(CardID),
  PRIMARY KEY (ChecklistID)
);

INSERT INTO .`User` (UserID, UserName, Email, Password, LastName, FirstName)
VALUES ('1', 'Greekatz', 'nguyenthanhhung1912@gmail.com', 'a1234567', 'Nguyen', 'Hung'),
	('2', 'DucTri2401', 'phanductrithnt@gmail.com', 'ab123456', 'Phan', 'Tri'),
	('3', 'vogiaan1904', 'vogiaan1904@gmail.com', 'abc12345', 'Vo', 'An'),
	('4', 'VietDoHung', 'ITCSIU22197@student.hcmiu.edu.vn', 'abcd1234', 'Do', 'Viet'),
	('5', 'tuilatri', 'trihaminh2004@gmail.com', 'abcde123', 'Ha', 'Tri'),
	('6', 'theanh0410', 'theanhtrinh@gmail.com', 'abcdef12', 'Trinh', 'Anh'),
	('7', 'tcq123-iu', 'quangthangcao@gmail.com', 'abcdefg1', 'Cao', 'Thang');

INSERT INTO .`Boards` (BoardID, Title, CreatedAt, UpdatedAt, UserID)
VALUES ('110', 'Proposal', '2024-03-04 19:40:22', '2024-03-25 22:55:28', '1'),
	('111', 'Project Initiation', '2024-03-05 20:10:13', '2024-03-12 21:10:38', '2'),
	('112', 'ERD Sketch Design', '2024-03-09 11:35:53', '2024-03-15 16:26:42', '3'),
	('113', 'User Interface - Home page', '2024-03-15 17:05:25', '2024-04-02 20:44:09', '3'),
	('114', 'User Interface - Authenticate', '2024-03-15 17:10:08', '2024-04-03 02:10:40', '3'),
	('115', 'Database', '2024-04-12 20:10:13', '2024-04-26 21:10:38', '1'),
	('116', 'Midterm Report', '2024-04-04 20:10:13', '2024-04-14 21:10:38', '4'),
	('117', 'Create Card', '2024-04-05 11:26:52', '2024-04-25 23:18:00', '6'),
	('118', 'Create List', '2024-04-05 20:17:53', '2024-04-19 21:10:38', '2'),
	('119', 'Data Analyst', '2024-04-23 21:00:34', '2024-04-26 23:10:12', '7'),
	('120', 'Backend', '2024-04-12 20:13:55', '2024-04-12 20:16:05', '1'),
	('121', 'Final Report', '2024-04-12 20:18:02', '2024-04-12 20:19:42', '1');

INSERT INTO .`BoardMember` (MemberID, BoardID, MemberName)
VALUES ('1', '110'. 'Greekatz'),
	('7', '110'. 'tcq123-iu'),
	('6', '110'. 'theanh0410'),
	('2', '111'. 'DucTri2401'),
	('5', '112'. 'tuilatri'),
	('4', '113'. 'DoHungViet'),
	('3', '114'. 'vogiaan1904'),
	('1', '114'. 'Greekatz'),
	('2', '115'. 'DucTri2401'),
	('6', '115'. 'theanh0410'),
	('7', '115'. 'tcq123-iu'),
	('1', '116'. 'Greekatz'),
	('2', '116'. 'DucTri2401'),
	('3', '116'. 'vogiaan1904'),
	('4', '116'. 'DoHungViet'),
	('5', '116'. 'tuilatri'),
	('6', '116'. 'theanh0410'),
	('7', '116'. 'tcq123-iu'),
	('4', '117'. 'DoHungViet'),
	('5', '118'. 'tuilatri'),
	('1', '119'. 'Greekatz'),
	('2', '119'. 'DucTri2401'),
	('6', '119'. 'theanh0410'),
	('7', '119'. 'tcq123-iu'),
	('1', '120'. 'Greekatz'),
	('3', '120'. 'vogiaan1904');

INSERT INTO .`Lists` (ListID, BoardID, Title, CreatedAt, UpdatedAt)
VALUES ('210', '110', 'Proposal1', '2024-03-04 19:46:47', '2024-03-25 22:55:28'),
	('211', '110', 'Proposal2', '2024-03-04 19:51:12', '2024-03-22 15:23:18'),
	('212', '111', 'PI1', '2024-03-05 20:10:13', '2024-03-11 18:22:11'),
	('213', '111', 'PI2', '2024-03-05 20:14:36', '2024-03-12 21:10:38'),
	('214', '111', 'PI3', '2024-03-05 20:16:47', '2024-03-12 14:58:30'),
	('215', '112', 'ERD', '2024-03-09 11:35:53', '2024-03-15 16:26:42'),
	('216', '113', 'UIHP1', '2024-03-04 19:46:47', '2024-04-01 19:41:05'),
	('217', '113', 'UIHP2', '2024-03-04 19:46:47', '2024-04-02 20:44:09'),
	('218', '114', 'UIA1', '2024-03-15 17:10:08', '2024-04-02 23:11:20'),
	('219', '114', 'UIA2', '2024-03-15 17:12:38', '2024-04-03 02:10:40'),
	('220', '115', 'Database1', '2024-04-12 20:10:13', '2024-04-26 21:10:38'),
	('221', '115', 'Database2', '2024-04-12 20:12:19', '2024-04-23 19:10:38'),
	('222', '116', 'MR1', '2024-04-04 20:10:13', '2024-04-13 09:27:11'),
	('223', '116', 'MR2', '2024-04-04 20:16:30', '2024-04-14 16:30:58'),
	('224', '116', 'MR3', '2024-04-04 20:20:20', '2024-04-12 22:51:15'),
	('225', '116', 'MR4', '2024-04-04 20:24:40', '2024-04-14 21:10:38'),
	('226', '117', 'Card1', '2024-04-05 11:26:52', '2024-04-25 23:18:00'),
	('227', '118', 'List1', '2024-04-05 20:17:53', '2024-04-19 21:10:38'),
	('228', '119', 'DA1', '2024-04-23 21:00:34', '2024-04-26 23:10:12'),
	('229', '119', 'DA2', '2024-04-23 21:02:16', '2024-04-24 12:55:48'),
	('230', '119', 'DA3', '2024-04-23 21:05:09', '2024-04-23 21:05:09'),
	('231', '120', 'BE1', '2024-04-12 20:13:55', '2024-04-12 20:13:55'),
	('232', '120', 'BE2', '2024-04-12 20:16:05', '2024-04-12 20:16:05'),
	('233', '121', 'FR1', '2024-04-12 20:18:02', '2024-03-15 18:22:11'),
	('234', '121', 'FR2', '2024-04-12 20:19:42', '2024-04-12 20:19:42');





