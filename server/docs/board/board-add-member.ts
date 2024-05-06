import {
  BadRequestJson,
  ServerErrorJson,
  UnauthorizedJson,
} from '../generic-responses';

export const BoardAddMemberJson = {
  tags: ['Board'],
  summary: 'Add member to board',
  security: [
    {
      bearerAuth: [],
    },
  ],
  parameters: [
    {
      name: 'boardId',
      in: 'path',
      description: 'Board ID',
      required: true,
      schema: {
        type: 'number',
      },
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            MemberId: {
              type: 'number',
              example: 1,
            },
          },
        },
      },
    },
  },
  responses: {
    '200': {
      description: 'Member added successfully',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Member added successfully',
              },
            },
          },
        },
      },
    },
    '404': {
      description: 'Board not found',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Board not found',
              },
            },
          },
        },
      },
    },
    '400': BadRequestJson,
    '401': UnauthorizedJson,
    '500': ServerErrorJson,
  },
};
