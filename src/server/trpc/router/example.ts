import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    ctx.prisma.example.create({
      data: {
        id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    }).finally(() => {
      console.log('done');
    });
    return ctx.prisma.example.findMany();
  }),
  joinTable: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.create({
      data: {
        id: '2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    }).finally(() => {
      console.log('done');
    });
  })
    
});
