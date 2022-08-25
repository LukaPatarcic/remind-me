import { string, z } from 'zod';

import { createRouter } from './context';

export const exampleRouter = createRouter()
    .mutation('mutate', {
        input: z.object({
            reminder: z.string(),
        }),
        resolve({ input }) {
            prisma.reminder.
            return { ok: 1 };
        },
    })
    .query('hello', {
        input: z
            .object({
                text: z.string().nullish(),
            })
            .nullish(),
        resolve({ input }) {
            return {
                greeting: `Hello ${input?.text ?? 'world'}`,
            };
        },
    })
    .query('getAll', {
        async resolve({ ctx }) {
            return await ctx.prisma.example.findMany();
        },
    });
