import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const showtimesRouter = router({
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
  getSeats: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.showtimes.findMany(
        {
            include: {
                seats: true,
            }
        }
    );
  }),
});
