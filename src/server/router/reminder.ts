import { z } from 'zod';

import { createProtectedRouter } from './protected-router';

export const reminderRouter = createProtectedRouter()
    .mutation('mutate', {
        input: z.object({
            reminder: z.string(),
            dateTime: z.string(),
        }),
        async resolve({ input: { reminder, dateTime }, ctx: { session } }) {
            try {
                const res = await prisma?.reminder.create({
                    data: {
                        reminder,
                        userId: session?.user?.id,
                        timestamp: new Date(dateTime).getTime(),
                    },
                });

                return res;
            } catch (err) {
                console.log(err);
                return { error: 1 };
            }
        },
    })
    .query('get', {
        async resolve({ ctx: { session } }) {
            try {
                const res = await prisma?.reminder.findMany({
                    where: {
                        userId: session?.user?.id,
                    },
                });

                return res;
            } catch (err) {
                console.log('Error');
            }
        },
    });
