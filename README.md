# How to fetch API data with Axios in NEXTJS?
In NextJS, we can fetch data from API using `getServerSideProps` or `getStaticProps` methods.

First, we need to install `axios` package.

```bash
npm install axios
```

Then, we can use `axios` to fetch data from API:

```js
import axios from 'axios'

export const getStaticProps = async () => {
  const res = await Axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=b7cd3340a794e5a2f35e3abb820b497f&language=en-US&page=1&region=TW");
  return {
    props: res.data,
  };
}
```

Using `props` in `Home` component:

```js
const Home = (props) => {
    const movies = props['results'];
  return (
    <div className="grid grid-cols-4 gap-5">
            {movies.map((movie:any) => (
              <div className="flex justify-center" key={movie.id}>
                <div className="flex flex-col  md:max-w-xl shadow-lg">
                  <img className=" w-full h-96 md:h-auto object-cover md:w-60 " src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt="" />
                  <li className="flex text-black p-4">{movie.original_title}</li>
                </div>
              </div>
            ))}
          </div>
  );
};
```

# Setup API with Prisma
## Prisma
Prisma is an open-source ORM for Node.js and TypeScript. It makes working with databases easy by abstracting away SQL queries and providing a type-safe API for querying and manipulating data in your database.

## Connect Prisma to your database
Prisma can connect to a variety of databases. In this tutorial, we will use PostgreSQL.

In `prisma\schema.prisma`, we can add the following content:

```js
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```
`DATABASE_URL` is the connection string to your database. You have to set it in `.env` file.
```bash
DATABASE_URL=postgresql://username:password@localhost:5432/dbname
```

## How to use Prisma?
If you already have a database, you can connect Prisma to it and use Prisma Client to query and manipulate data in your database.

First, we need to install `prisma` and `@prisma/client` packages.

```bash
npm install prisma @prisma/client
```
Using fallowing command to push and pull the Prisma schema to and from your database.

```bash
npx prisma db push 
npx prisma db pull 
```



Then, we can use the following command to generate Prisma Client.

```bash
npx prisma generate
```
After that, we can create a new file `src\server\trpc\router\router_name.ts` and add the following content.

`hello` and `getAll` are two example API, such as http://localhost:3000/api/trpc/hello  and http://localhost:3000/api/trpc/getAll. 

```js
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
});
```

Don't forget to add `prisma` to import Router in `pages/api/_app.tsx` and export the Router:

```js
import { moviesRouter } from "./movies";

export const appRouter = router({
  movies: moviesRouter,
});
```



