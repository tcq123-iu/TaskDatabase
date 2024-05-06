import {
  BadRequestJson,
  UnauthorizedJson,
  ServerErrorJson,
  CreatedSuccessfullyJson,
} from '../generic-responses';

export const ListCreateJson = {
  tags: ['List'],
  summary: 'Creates a new list',
  description: 'Endpoint to create a new list',
  security: [
    {
      bearerAuth: [],
    },
  ],
  requestBody: {
    content: {
      'application/json': {
        schema: {
          type: 'object',
          properties: {
            BoardId: {
              type: 'number',
              example: '1',
            },
            Title: {
              type: 'string',
              example: 'My list',
            },
          },
          required: ['BoardId', 'Title'],
        },
      },
    },
  },
  responses: {
    '201': CreatedSuccessfullyJson,
    '409': {
      description: 'Order already exists in the board',
      content: {
        'application/json': {
          schema: {
            type: 'object',
            properties: {
              message: {
                type: 'string',
                example: 'Order already exists in the board',
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
