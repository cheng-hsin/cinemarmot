import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const moviesRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.movies.findMany();
  }),
  getShowTime: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.movies.findUnique({
      where: {
        movie_id: 1,
      },
    }).showtimes();
  }),
  getShowTimes: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.movies.findMany(
      {
        include: {
          showtimes: true,
        }
      }
    );
  }),
});
