-- This is the pSQL functions will be used for backend 

-- User --

-- Find user by email
SELECT *
FROM Users
WHERE Email = 'email'; -- email act as placeholder

-- Find user by Id
SELECT *
FROM Users
WHERE UserId = id;

--Create User
INSERT INTO Users (FirstName, LastName, UserName, Email, Password)
VALUES (FirstName, LastName, UserName, Email, Password);

-- Board --

-- Create Board
INSERT INTO Boards (Title)
VALUES ('title')
RETURNING BoardId;

-- Get Board by UserID
SELECT *
FROM Boards
WHERE BoardId IN (
    SELECT BoardId
    FROM BoardMembers
    WHERE MemberID = userId
);

-- Get Board by BoardID
SELECT *
FROM Boards
WHERE BoardId = boardId;

-- Update Board by BoardID
UPDATE Boards
SET Title = 'title'
WHERE BoardId = boardId
RETURNING *;

-- delete Board by BoarDID
SELECT ListId
FROM BoardLists
WHERE BoardId = boardId;

-- Delete Board
DELETE FROM Boards
WHERE BoardId = boardId
RETURNING *;

-- Add new member into the Board
INSERT INTO BoardMembers (BoardId, MemberId)
VALUES (boardId, memberId)
RETURNING *;

-- Lists --

-- Create a List in a specific Board
INSERT INTO Lists (Title)
VALUES ('Title')
RETURNING ListId;

INSERT INTO BoardLists (BoardId, ListId)
VALUES (BoardId, newListId);

-- Get List by BoardID
SELECT *
FROM Lists
WHERE ListId IN (
    SELECT ListId
    FROM BoardLists
    WHERE BoardId IN (
        SELECT BoardId
        FROM Boards
        WHERE BoardId = boardId
    )
);

-- Get List by its ID
SELECT *
FROM Lists
WHERE ListId = listId;

-- Update Lists
UPDATE Lists
SET Title = 'Title'
WHERE ListId = listId;

-- Select Card from a specific List
SELECT CardId FROM ListCards
WHERE ListId = listID;

-- Delete a list
DELETE FROM Lists
WHERE ListId = listId;

-- Card --

-- Delete Card by ID
DELETE FROM  Cards
WHERE CardId = CardId;

-- Delete comments associated with card
DELETE FROM Comment WHERE CardId = CardId;

-- Delete checklist associated with card
DELETE FROM CheckLists WHERE CardId = CardId;

-- Comment --

-- Create a comment on a specific card
INSERT INTO Comments (CardId, Comment)
VALUES (CardId, Comment);

-- Get Comments By CardId
SELECT * FROM Comments
WHERE CardId IN (
    SELECT CardID FROM Cards WHERE CardId = CardId;
);

-- Update Comment By CommentId
UPDATE Comments SET Comment = Comment_String; -- Placeholder
WHERE CommentId = CommentId

-- Delete Comment By its ID
DELETE FROM Comments
WHERE CommentId = CommentId;

-- Checklists--

-- Create a CheckList
INSERT INTO CheckLists (CardId, Title)
VALUES (CardId, Title);

-- Get all CheckListsByCardId
SELECT * FROM Checklists
WHERE CardId IN (
    SELECT CardId FROM Cards WHERE CardId = CardId;
);

-- Get specific checklist by cardId
SELECT * FROM Checklists
WHERE CardId = (
    SELECT CardId FROM Cards WHERE CardId = CardId;
);

-- Get CheckLists By Its Id
SELECT * FROM CheckLists WHERE CheckListId = CheckListId;

-- Update CheckList status
UPDATE CheckLists SET IsChecked = Status
WHERE CheckListId = CheckListId;

-- Delete CheckListByID
DELETE FROM CheckLists
WHERE CheckListID = CheckListID;





