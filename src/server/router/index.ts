// src/server/router/index.ts
import superjson from 'superjson';

import { createRouter } from './context';
import { reminderRouter } from './reminder';

export const appRouter = createRouter()
    .transformer(superjson)
    .merge('reminder.', reminderRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
