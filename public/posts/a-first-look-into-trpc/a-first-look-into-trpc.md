---
title: A First Look Into tRPC
timestamp: 1660422931604
description: After hearing about tRPC through both Twitter and some videos and livestreams by Theo (@t3dotgg), and hearing about how it's a great way to make end-to-end APIs with full type support, I knew I had to check it out.
---



## What Is tRPC, And Why Use It?
tRPC can be considered to be an alternative to traditional REST or GraphQL solutions and allows you to very easily build and consume completely typesafe APIs without the need for code generation or schemas.

As Typescript and statically typed variables, methods, etc. become more prevalent, we as developers need better ways to statically type API endpoints and share these typings between the code that we write, which leads to better code and less errors.

Using tRPC lets you share your static typing directly between your client and your server if your project is built with full-stack TypeScript.



## My Brief Experience &mdash; A Summary
Starting out, I knew you could use tRPC with React, and on top of Prisma and an ORM, so I opted to give it a shot with React, Vite, Express, Prisma, and MongoDB, all of which would use TypeScript where applicable, of course.

All of these choices make for a pretty solid tech stack, as they're pretty easy to get set-up with each other, and they work &mdash; usually, in my experience &mdash; pretty seemlessly.

tRPC comes with both an ExpressJS and a ReactJS adapter out of the box, so you don't need to manually come up with a solution that allows you to use tRPC with your existing Express and React code, which is pretty great.

Over all, integrating tRPC with an existing full-stack TypeScript project was quite easy. There's a bit to set-up, but once it's done, you don't need to touch most of it except for adding routers to handle any queries that you'll need; just add a new file to handle the router for the API that you want, create a router for it, and then set up your query to optionally take in an input, and then have it output something such as a Prisma fetch.



## My Brief Experience &mdash; With Details
With my base tech stack in hand, I was ready to get to work on developing a community website for an online game that I play: Pok&eacute;One, a 3D Pok&eacute;mon game built with MMO concepts in mind.

My goal in mind was to serve the community with a website that provided up-to-date information on recent events and content releases, a place to provide countless guides to help walk you through content of the game, as well as a place that provided information on the locations of all Pok&eacute;mon, items, maps, and more, laid out in an easy to understand format. Not to mention a number of invaluable tools for other miscellaneous in-game things.

> ***NOTE:** You can find the source code for this project [here](https://github.com/Toxocious/fleiya-dashboard/), if you're interested in checking out how tRPC can be used on the server alongside using it in the client-side of a React application.*

With my goal in mind, I generated a TS React template from [Vite](https://github.com/vitejs/vite) (shoutout to Vite; they're amazing!), and installed the following packages (install **@types/*** packages as needed):

- **react-router-dom** - For navigating between routes/pages on the client side
- **express** - For managing the server-side instance
- **mongodb & mongoose** - To integrate and allow the server to make calls to the MongoDB cluster
- **prisma** - Served as a layer between the MongoDB cluster and the server
- **trpc** - Handled data fetching between the server and the client
- **zod** - For TypeScript schema validation
- **sass** - Offers additional features over vanilla CSS
- **concurrently** - For running both the client and server simultaneously

From there, I took the time to set-up a few basic client-side page routes and set-up the server-side with Express and tRPC so that I'd have a way to interact with a MongoDB cluster through Prisma.

On-top of all of that, setting up tRPC was pretty painless as the [quickstart](https://trpc.io/docs/quickstart) documantation basically walks you through a simple set-up, although you could also check out [create-t3-app's](https://github.com/t3-oss/create-t3-app) (an amazing template for a React, Tailwind, NextJS, tRPC focused app) implementation of tRPC on the client and server sides for an even better example.

This included setting up a very simple React hook so that React could query a tRPC router.
```ts
import { createReactQueryHooks } from '@trpc/react';
import type { appRouter } from '../../trpc/routers/index';

export const trpc = createReactQueryHooks<typeof appRouter>();
```

With the server-side mostly set-up, and a client-side React hook implemented to handle tRPC querying, I could query data with minimal code, in a quick and efficient fashion; check this out:

```tsx
import { trpc } from '@hooks/trpc';

export const ShowPokemon = () => {
  const SPECIES_ID = Math.floor(Math.random() * 150) + 1;

  const { data, isLoading } = trpc.useQuery([
    'pokemon.getPokemon',
    { POKEDEX_ID: SPECIES_ID },
  ]);

  if ( isLoading ) {
    return <h1> Loading Data </h1>;
  }

  return (
    <h1>{data.name}</h1>
  );
};
```

Voila! Not only did we get intellisence on the returned query data, we also get some helper functions such as ``isLoading`` and ``isFetching``, for whenever the query re-runs.

> ***NOTE:** In certain cases, you may want to opt for checking if ``data`` is undefined instead of if the query is loading, as focusing a different window and then re-focusing the window that your app is run in will cause the query to be re-run.*

And with that, you have your front-end connected to your back-end with amazing typesafety between them.

## Final Thoughts
In my opinion, tRPC is something that the TypeScript space should have had for a long time now. It takes typesafety between the client and server, and implements it in a fantastic way, and I'm surprised that it took this long for something such as it to be developed.

From the moment that I picked up tRPC and got it set-up in my project, using it has been such a phenomenal experience that I want every TypeScript developer to experience. It's made interacting between client-side and server-side TypeScript an absolute joy, since I now know exactly what types I'm interacting with between the two, and being able to not have to directly the schema of my MongoDB cluster and whatnot has been such a time saver.

If you've been looking for a typesafe option to use that provides intellisense and typing between your client-side code and your server-side code, look no further and try out tRPC.

### External Resources Mentioned
- [tRPC](https://trpc.io/)
- [Create T3 App](https://github.com/t3-oss/create-t3-app)
- [Vite](https://github.com/vitejs/vite)
- [Fleiya Dashboard](https://github.com/Toxocious/fleiya-dashboard/)
