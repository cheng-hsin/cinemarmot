import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { moviesRouter } from "./movies";
import { seatsRouter } from "./seats";
import { showtimesRouter } from "./showtimes";
import {ordersRouter} from "./orders";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  movies: moviesRouter,
  seats: seatsRouter,
  showtimes: showtimesRouter,
  orders: ordersRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
