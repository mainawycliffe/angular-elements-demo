# Angular Elements Demo for GDG DEVFEST 2019

## Prerequisites

- Node - [Link](https://nodejs.org/en/).
- NPM - [Link](https://www.npmjs.com/).

## Running this demo

- Install dependencies using either yarn `yarn install` or npm `npm install`
- Install `live-server` npm package `yarn global add live-server`. You can also use `http-server` or any quick launch server package you are comfortable with
- Build the angular application in prod (`--prod` flag) environment and with `output-hashing` set to none. `ng b --prod --output-hashing none`
- And finally combine the build artifacts, using the `ng-elements-build.js` at the root of the repo. You can run it using Node `node ng-elements-build.js`
- The new build artifacts will be added to the `web` directory at the root of the project workspace
- You can now serve the `web` directory using `live-server` - `live-server web`
