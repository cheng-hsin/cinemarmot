import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const ordersRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.orders.findMany();
  }),
  showSeatsv0: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.orders.findMany(
      {
        include: {
          showtimes: true,
          seats: true,
        },
        where: {
          showtime_id: 1,
        },
      }
    );
  }),
  showSeats: publicProcedure.input(Number).query(async ({ input, ctx }) => {
    return await ctx.prisma.orders.findMany({
      include: {
        showtimes: true,
        seats: true,
      },
      where: {
        showtime_id: input,
      },
    });
  }),
});
