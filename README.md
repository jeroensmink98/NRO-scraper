# NRO-Scraper

This little program can be used to download images of the [NRO](https://www.nro.gov/) website. I saw a huge collection of pictures about the [Manned Orbiting Laboratory](https://en.wikipedia.org/wiki/Manned_Orbiting_Laboratory)
program on this site and wanted to download all of them. Therefore I created this little scraper to do that.

In the `config.ts` you can set a `BASE_URL` to specify a page where to download the images from. It might only work for pages that have the images as part of a table containing `tr` and `td` elements with `a` tags inside of them.

## How to run

1. Run `yarn install`
2. Run `yarn run start` to start the application, or `yarn dev` to start Nodemon process wit hot-reloading
3. Run `yarn dev:debug` to start debugging process

## Running inside Docker Container

You can also run your application inside a docker container

1. Run `yarn run docker:build`
2. Run `yarn run docker:start` This will start the Node application inside a Docker container
