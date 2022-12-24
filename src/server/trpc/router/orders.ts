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
  // showSeatsv0: publicProcedure.query(({ ctx }) => {
  //   return ctx.prisma.orders.findMany(
  //     {
  //       include: {
  //         showtimes: true,
  //         seats: true,
  //       },
  //       where: {
  //         showtime_id: 1,
  //       },
  //     }
  //   );
  // }),
  showSeats: publicProcedure.input(Number).query(async ({ input, ctx }) => {
    if (isNaN(input)) {
      return null;
    }
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
  createOrder: publicProcedure.input(String).query(async({ input, ctx }: any) => {
    const { selectedSeat, selectedShowtime, userId } = input;
    console.log('seat, showtime, user', selectedSeat, selectedShowtime, userId)
    return await ctx.prisma.orders.create({
      data: {
        showtime_id: 1,
        seat_id: 25,
        user_id: 'clc0381nb0000lc08u8fr5std',
      },
    });
  }),
});
