import { Cards, PrismaClient, type Lists } from '@prisma/client';


const prisma = new PrismaClient();

export const createList = async (Title: string, BoardId: number) => {
    const insertList = `
        INSERT INTO "Lists" ("Title") 
        VALUES ('${Title}')
        RETURNING "ListId";
    `;

    const lists = await prisma.$queryRawUnsafe<Lists[]>(insertList);

    const newListId = lists[0].ListId;
    const insertBoardList = `
        INSERT INTO "BoardLists" ("BoardId", "ListId") 
        VALUES (${BoardId}, ${newListId});
    `;

    const newBoardList = await prisma.$executeRawUnsafe(insertBoardList);
    return newBoardList;
};

export const getListsByBoardId = async (boardId: number) => {
    const query = `
        SELECT * FROM "Lists" 
        WHERE "ListId" IN (
        SELECT "ListId" FROM "BoardLists" 
        WHERE "BoardId" IN (
            SELECT "BoardId" FROM "Boards" 
            WHERE "BoardId" = ${boardId}
        )
    );
    `;
    const lists = await prisma.$queryRawUnsafe<Lists[]>(query);
    return lists;
};

export const getListById = async (listId: number) => {
    const query = `
        SELECT * FROM "Lists" 
        WHERE "ListId" = ${listId};
    `;

    const list = await prisma.$queryRawUnsafe<Lists[]>(query);

    return list[0];
};

export const updateList = async (listId: number, Title: string) => {
    const query = `
        UPDATE "Lists"
        SET "Title" = '${Title}'
        WHERE "ListId" = ${listId};
    `;

    const updatedList = await prisma.$executeRawUnsafe(query);
    return updatedList;
};

