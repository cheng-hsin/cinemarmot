import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { moviesRouter } from "./movies";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  movies: moviesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
