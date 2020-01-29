# Umbraco Headless Node.js Koa sample

Node.js Koa sample site for Umbraco Headless.

## Features

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Koa](https://koajs.com/)
  - [koa-logger](https://github.com/koajs/logger)
  - [koa-static](https://github.com/koajs/static)
  - [koa-views](https://github.com/queckezz/koa-views)
- [Nunjucks](https://mozilla.github.io/nunjucks/)

## Prerequisites

To run this sample you will need the following tools installed

- [Node.js](https://nodejs.org/en/) 10 or newer

## Getting Started

Before running the application,  `package.json` needs to be updated with your Umbraco Headless
 project alias (the project alias can be found in the [Umbraco Cloud Portal](https://www.s1.umbraco.io)). If the Content Delivery API is protected the `apiKey` also needs to be updated.

```json
{
  "umbraco": {
    "projectAlias": "",
    "apiKey": ""
  }
}
```

In order to use the sample you will need an Umbraco Headless project with content, media and document types that correspond to those setup in the views and templates of the sample website. You can use `demo-headless` as the project alias to get started with the sample. The Project behind this alias has been used as the source of the sample, so its a good place to start.

The `ApiKey` is not used in this sample and can thus be left blank. If you chose to protect the content exposed via the Content Delivery API then you will need an API-Key, but its an option that has to be actively turned on (or off - its off by default) via the Umbraco Backoffice in the Headless tree in the Settings section.

### Installation

To install dependencies, run the following command

```bash
> npm install
```

### Usage

Run the following command to start the site

```bash
> npm start
```

This will start the Koa webserver listening on `http://localhost:3000`
