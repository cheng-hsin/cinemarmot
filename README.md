# Connect to Postgresql which is running in a docker container
If you want to run Postgresql in a docker container and connect to it from your host machine, you need to set the host name to `host.docker.internal` in postgresql connection settings.

# Source code of seatmap
This source code is for seatmap from [codepen](https://codepen.io/priteshchandra/pen/voZdgq). It is a simple seatmap which is using pure HTML, CSS.
Just add HTML to your page and add CSS to `styles/global.css` file.

# Use trpc to call API and map data in components
> This project is using [trpc](https://trpc.io/) to call API. The type of your variable will be an object.

Call API in components:
```ts
  const { data: movies } = trpc.movies.getShowTimes.useQuery()
```
Map data in components:
```ts
 {movies?.map((movie) => (
                  <ListItem key={movie.id} movie={movie} />
                ))}
```
