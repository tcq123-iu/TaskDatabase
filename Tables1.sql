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

INSERT INTO `Cards` (CardID, ListID, Title, Description, DueDate, ReminderDate)
VALUES 
  ('301', '210', 'Card 1', 'Card in Proposal 1', '2024-06-01', '2024-05-30'),
  ('302', '210', 'Card 2', 'Card in Proposal 1', '2024-06-05', '2024-06-03'),
  ('303', '210', 'Card 3', 'Card in Proposal 1', '2024-06-10', '2024-06-08'),
  ('304', '210', 'Card 4', 'Card in Proposal 1', '2024-06-15', '2024-06-13'),
  ('305', '211', 'Card 1', 'Card in Proposal 2', '2024-06-20', '2024-06-18'),
  ('306', '211', 'Card 2', 'Card in Proposal 2', '2024-06-25', '2024-06-23'),
  ('307', '211', 'Card 3', 'Card in Proposal 2', '2024-06-30', '2024-06-28'),
  ('308', '211', 'Card 4', 'Card in Proposal 2', '2024-07-05', '2024-07-03'),
  ('309', '212', 'Card 1', 'Card in PI1', '2024-07-10', '2024-07-08'),
  ('310', '212', 'Card 2', 'Card in PI1', '2024-07-15', '2024-07-13'),
  ('311', '212', 'Card 3', 'Card in PI1', '2024-07-20', '2024-07-18'),
  ('312', '213', 'Card 1', 'Card in PI2', '2024-07-25', '2024-07-23'),
  ('313', '213', 'Card 2', 'Card in PI2', '2024-07-30', '2024-07-28'),
  ('314', '213', 'Card 3', 'Card in PI2', '2024-08-04', '2024-08-02'),
  ('315', '214', 'Card 1', 'Card in PI3', '2024-08-09', '2024-08-07'),
  ('316', '214', 'Card 2', 'Card in PI3', '2024-08-14', '2024-08-12'),
  ('317', '214', 'Card 3', 'Card in PI3', '2024-08-19', '2024-08-17'),
  ('318', '215', 'Card 1', 'Card in ERD', '2024-08-24', '2024-08-22'),
  ('319', '216', 'Card 1', 'Card in UIHP1', '2024-09-01', '2024-08-30'),
  ('320', '217', 'Card 1', 'Card in UIHP2', '2024-09-05', '2024-09-03'),
  ('321', '218', 'Card 1', 'Card in UIA1', '2024-09-10', '2024-09-08'),
  ('322', '219', 'Card 1', 'Card in UIA2', '2024-09-15', '2024-09-13'),
  ('323', '220', 'Card 1', 'Card in Database1', '2024-09-20', '2024-09-18'),
  ('324', '221', 'Card 1', 'Card in Database2', '2024-09-25', '2024-09-23'),
  ('325', '222', 'Card 1', 'Card in MR1', '2024-09-30', '2024-09-28'),
  ('326', '223', 'Card 1', 'Card in MR2', '2024-10-05', '2024-10-03'),
  ('327', '224', 'Card 1', 'Card in MR3', '2024-10-10', '2024-10-08'),
;

INSERT INTO `Comments` (CommentID, CardID, Comment, CreatedAt, UpdatedAt)
VALUES 
  ('401', '301', 'First comment on Card 1', '2024-06-01 10:00', '2024-06-01 12:00'),
  ('402', '301', 'Second comment on Card 1', '2024-06-01 13:00', '2024-06-01 15:00'),
  ('403', '302', 'First comment on Card 2', '2024-06-05 10:00', '2024-06-05 12:00'),
  ('404', '303', 'First comment on Card 3', '2024-06-10 11:00', '2024-06-10 12:30'),
  ('405', '303', 'Second comment on Card 3', '2024-06-11 14:00', '2024-06-11 15:30'),
  ('406', '304', 'First comment on Card 4', '2024-06-15 09:00', '2024-06-15 10:00'),
  ('407', '304', 'Second comment on Card 4', '2024-06-16 10:00', '2024-06-16 12:00'),
  ('408', '304', 'Third comment on Card 4', '2024-06-17 11:00', '2024-06-17 13:00'),
  ('409', '305', 'Single comment on Card 1', '2024-06-20 10:00', '2024-06-20 11:00'),
  ('410', '306', 'Single comment on Card 2', '2024-06-25 12:00', '2024-06-25 13:00'),
  ('411', '307', 'Single comment on Card 3', '2024-06-30 14:00', '2024-06-30 15:00'),
  ('412', '308', 'Single comment on Card 4', '2024-07-05 11:00', '2024-07-05 12:00'),
  ('413', '309', 'Single comment on Card 1', '2024-07-10 10:00', '2024-07-10 11:00'),
;

INSERT INTO `Checklists` (ChecklistID, CardID, Title, IsChecked)
VALUES 
  ('501', '301', 'Checklist 1 for Card 1', FALSE),
  ('502', '301', 'Checklist 2 for Card 1', TRUE),
  ('503', '301', 'Checklist 3 for Card 1', FALSE),
  ('504', '302', 'Checklist 1 for Card 2', FALSE),
  ('505', '303', 'Checklist 1 for Card 3', TRUE),
  ('506', '303', 'Checklist 2 for Card 3', TRUE),
  ('507', '304', 'Checklist 1 for Card 4', FALSE),
  ('508', '304', 'Checklist 2 for Card 4', TRUE),
  ('509', '304', 'Checklist 3 for Card 4', FALSE),
  ('510', '305', 'Checklist for Card 1', TRUE),
  ('511', '306', 'Checklist for Card 2', FALSE),
  ('512', '307', 'Checklist for Card 3', TRUE),
  ('513', '308', 'Checklist for Card 4', FALSE),
  ('514', '309', 'Checklist for Card 1', TRUE),
;
