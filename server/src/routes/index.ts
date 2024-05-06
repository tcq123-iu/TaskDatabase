import { authRouter } from './auth-route';

import { Application } from 'express';

export const initRoutes = (app: Application) => {
    app.use('/auth', authRouter);
};