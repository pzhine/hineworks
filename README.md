PHOLIO
======

Portfolio site built on the React/Redux stack using [kyt](https://github.com/NYTimes/kyt) as a starter.

Architecture
------------
The site renders a set of projects, specified in /content/works.json. Each project can have a variable number of assets associated with it, such as thumbnails, animated GIF thumbnails, videos and photos.

Rendering and routing is isomorphic/universal, with server routing handled by the StaticRouter component of react-router. 


Development
-----------
```
yarn install
npm run dev
```
The development server, with hot module swapping, will run on http://localhost:3000  

Assets in the /public directory are served from http://localhost:3001

Note that in development mode, there is a [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) that does not occur in production.

Deployment
----------
The following will build a production-ready release to `/dist`
```
npm run build
```
