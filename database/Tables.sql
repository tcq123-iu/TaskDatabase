CREATE TABLE IF NOT EXISTS "public"."Users" (
  "UserId" SERIAL PRIMARY KEY,
  "FirstName" VARCHAR(100) NOT NULL,
  "LastName" VARCHAR(100) NOT NULL,
  "Username" VARCHAR(100) UNIQUE NOT NULL,
  "Email" VARCHAR(100) UNIQUE NOT NULL,
  "Password" VARCHAR(100) NOT NULL
);

CREATE TABLE IF NOT EXISTS "public"."Boards" (
  "BoardId" SERIAL PRIMARY KEY,
  "Title" VARCHAR(50) NOT NULL,
  "CreatedAt" TIMESTAMP DEFAULT now() NOT NULL,
  "UpdatedAt" TIMESTAMP NOT NULL
);

-- Junction Table, reducing data complexity & data integrity
CREATE TABLE IF NOT EXISTS "public"."BoardMembers" (
  "BoardId" INTEGER NOT NULL,
  "MemberId" INTEGER NOT NULL,
  CONSTRAINT "fk_BoardMembers_BoardId" FOREIGN KEY ("BoardId") REFERENCES "public"."Boards"("BoardId") ON DELETE CASCADE,
  CONSTRAINT "fk_BoardMembers_MemberId" FOREIGN KEY ("MemberId") REFERENCES "public"."Users"("UserId") ON DELETE CASCADE,
  CONSTRAINT "pk_BoardMembers" PRIMARY KEY ("BoardId", "MemberId")
);

CREATE TABLE IF NOT EXISTS "public"."Lists" (
  "ListId" SERIAL PRIMARY KEY NOT NULL,
  "Title" VARCHAR(50) NOT NULL,
  "CreatedAt" TIMESTAMP DEFAULT now() NOT NULL,
  "UpdatedAt" TIMESTAMP NOT NULL
);

-- Junction Table, reducing data complexity & data integrity
CREATE TABLE IF NOT EXISTS "public"."ListCards" (
  "ListId" INTEGER NOT NULL,
  "CardId" INTEGER NOT NULL,
  CONSTRAINT "fk_ListCards_ListId" FOREIGN KEY ("ListId") REFERENCES "public"."Lists"("ListId") ON DELETE CASCADE,
  CONSTRAINT "fk_ListCards_CardId" FOREIGN KEY ("CardId") REFERENCES "public"."Cards"("CardId") ON DELETE CASCADE,
  CONSTRAINT "pk_ListCards" PRIMARY KEY ("ListId", "CardId")
);

CREATE TABLE IF NOT EXISTS "public"."Cards" (
  "CardId" SERIAL PRIMARY KEY NOT NULL,
  "Title" TEXT NOT NULL,
  "Description" VARCHAR(100),
  "DueDate" DATE,
  "ReminderDate" DATE
);

CREATE TABLE IF NOT EXISTS "public"."Comments" (
  "CommentId" SERIAL PRIMARY KEY,
  "CardId" INTEGER NOT NULL,
  "CreatedAt" TIMESTAMP DEFAULT now() NOT NULL,
  "UpdatedAt" TIMESTAMP,
  "Comment" VARCHAR(255),
  CONSTRAINT "Comments_CardId_fkey" FOREIGN KEY ("CardId") REFERENCES "public"."Cards"("CardId") ON UPDATE CASCADE ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS "public"."CheckLists" (
  "CheckListId" SERIAL PRIMARY KEY,
  "CardId" INTEGER NOT NULL,
  "Title" VARCHAR(255),
  "IsChecked" BOOLEAN DEFAULT false,
  CONSTRAINT "fk_CheckLists_CardId" FOREIGN KEY ("CardId") REFERENCES "public"."Cards"("CardId") ON UPDATE CASCADE ON DELETE CASCADE
);
