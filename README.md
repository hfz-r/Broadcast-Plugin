# Hartalega Broadcast : Widget

[![Build Status](http://bj-tfs:8080/tfs/DefaultCollection/Broadcast%202.0/_apis/build/status/brdcst-ci%20npm-publish?branchName=master)](http://bj-tfs:8080/tfs/DefaultCollection/Broadcast%202.0/_build/latest?definitionId=3&branchName=master)

A lightweight and offline-first embeddable widget for internal Hartalega Application.


## Development

```Shell
npm run start
```

Starts the development server running on `http://localhost:3000`

## Server

### Development

```Shell
npm start
```

Starts the development server and makes your application accessible at
`localhost:3000` with hot-reloaded.

### Production

```Shell
npm run start:production
```

- Runs tests (see `npm test`)
- Builds your app (see `npm run build`)
- Starts the production server (see `npm run start:prod`)

The app is built for optimal performance: assets are
minified and served gzipped.

### Host and Port

To change the host and/or port the app is accessible at, pass the `--host` and/or `--port` option to the command
with `--`. E.g. to make the app visible at `my-local-hostname:5000`, run the following:
`npm start -- --host my-local-hostname --port 5000`

## Building

```Shell
npm run build
```

Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to the `build` folder.

## Linting

```Shell
npm run lint
```

Lints your JavaScript and your CSS.

```Shell
npm run lint:eslint:fix -- .
```

Lints your code and tries to fix any errors it finds.
