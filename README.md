# Markdown Documentation Maker

![GitHub package.json version](https://img.shields.io/github/package-json/v/mzusin/markdown-documentation-maker)
[![npm](https://img.shields.io/npm/dw/markdown-documentation-maker)](https://www.npmjs.com/package/markdown-documentation-maker)
[![NPM](https://img.shields.io/badge/npm-md_documentation_maker-brightgreen)](https://www.npmjs.com/package/markdown-documentation-maker)
[![](https://data.jsdelivr.com/v1/package/npm/markdown-documentation-maker/badge)](https://www.jsdelivr.com/package/npm/markdown-documentation-maker)


This is a markdown-based documentation generator. The module is used in the [Tool Cool Range Slider](https://github.com/mzusin/markdown-documentation-maker) library.

## Initialization

Install the package from npm:

```
npm i markdown-documentation-maker --save-dev
```

Add the following scripts to **package.json**:

```shell
"type": "module",
"scripts": {
    "docs:website": "http-server ./docs",
    "docs:build": "node ./src/docs/generator/index.js",
    "docs:watch": "nodemon ./src/docs/generator/index.js",
    "docs:install": "node node_modules/markdown-documentation-maker/run/install.js"
  },
```

Run install command:

```shell
npm run docs:install
```

## Configuration

- First of all, edit the configuration file located in **/src/docs/data/config.json**.
- By default, the documentation sidebar is automatically generated from the filenames. You can set other names in the following configuration file: **/src/docs/data/pages/pages-config.json**.
- Layout files are located at **/src/docs/data/layouts**.
- Homepage is located at **/src/docs/data/special-pages/index.html**.

## Commands

The following command is used to compile the documentation website:

```shell
npm run docs:build
```

The following command is used to compile the documentation website in watch mode:

```shell
npm run docs:watch
```

Run the documentation website locally (for debugging purposes only):

```shell
npm run docs:website
```