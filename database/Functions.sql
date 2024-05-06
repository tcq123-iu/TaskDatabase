-- This is the functions will be used for backend 

-- User --

-- Find user by email
SELECT *
FROM "Users"
WHERE "Email" = 'email_value'; -- email_value act as placeholder

-- Find user by Id
SELECT *
FROM "Users"
WHERE "UserId" = id_value;

--Create User
CREATE OR REPLACE FUNCTION create_user(
    p_first_name TEXT,
    p_last_name TEXT,
    p_email TEXT,
    p_password TEXT,
    p_username TEXT
)
RETURNS VOID AS $$
BEGIN
    INSERT INTO "Users" ("FirstName", "LastName", "Email", "Password", "Username") 
    VALUES (p_first_name, p_last_name, p_email, p_password, p_username);
END;
$$ LANGUAGE plpgsql;

-- Board --

-- Create Board
INSERT INTO "Boards" ("Title")
VALUES ('title_value')
RETURNING "BoardId";

-- Get Board by UserID
SELECT *
FROM "Boards"
WHERE "BoardId" IN (
    SELECT "BoardId"
    FROM "BoardMembers"
    WHERE "MemberID" = userId_value
);

-- Get Board by BoardID
SELECT *
FROM "Boards"
WHERE "BoardId" = boardId_value;

-- Update Board by BoardID
UPDATE "Boards"
SET "Title" = 'title_value'
WHERE "BoardId" = boardId_value
RETURNING *;

-- delete Board by BoarDID
SELECT "ListId"
FROM "BoardLists"
WHERE "BoardId" = boardId_value;

-- Delete Board
DELETE FROM "Boards"
WHERE "BoardId" = boardId_value
RETURNING *;

-- Add new member into the Board
INSERT INTO "BoardMembers" ("BoardId", "MemberId")
VALUES (boardId_value, memberId_value)
RETURNING *;

-- Lists --

-- Create a List in a specific Board
INSERT INTO "Lists" ("Title")
VALUES ('Title_value')
RETURNING "ListId";

INSERT INTO "BoardLists" ("BoardId", "ListId")
VALUES (BoardId_value, newListId_value);

-- Get List by BoardID
SELECT *
FROM "Lists"
WHERE "ListId" IN (
    SELECT "ListId"
    FROM "BoardLists"
    WHERE "BoardId" IN (
        SELECT "BoardId"
        FROM "Boards"
        WHERE "BoardId" = boardId_value
    )
);

-- Get List by its ID
SELECT *
FROM "Lists"
WHERE "ListId" = listId_value;

-- Update Lists
UPDATE "Lists"
SET "Title" = 'Title_value'
WHERE "ListId" = listId_value;