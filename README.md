# Parse Json string with typescript
If you want to parse a json string with typescript, you can use the `JSON.parse` function. But this function returns a `any` type. So you have to cast the return value to the type you want. This is a little bit annoying. So I wrote a function that parses a json string and returns the type you want.

## Usage
```typescript
import { parse } from 'parse-json-string-with-typescript';

const json = '{"foo": "bar"}';
const parsed = parse<{ foo: string }>(json);
```

## What I Did

See the fallowing code:
```typescript
  interface MyObj {
    movie_id: bigint
    movie_title: string | null
    movie_release: Date | null
    movie_length: string | null
    movie_overview: string | null
    movie_language: string | null
    movie_poster_path: string | null
    movie_leading: string | null
    movie_director: string | null
  };

  let obj: { string: MyObj[] } = JSON.parse(JSON.stringify(props));
  const movies = obj['result']['data']['json'];
  console.log(typeof movies);
```