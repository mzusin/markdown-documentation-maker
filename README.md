# Markdown Documentation Maker

![GitHub package.json version](https://img.shields.io/github/package-json/v/mzusin/markdown-documentation-maker)
[![npm](https://img.shields.io/npm/dw/markdown-documentation-maker)](https://www.npmjs.com/package/markdown-documentation-maker)
[![NPM](https://img.shields.io/badge/npm-md_documentation_maker-brightgreen)](https://www.npmjs.com/package/markdown-documentation-maker)
[![](https://data.jsdelivr.com/v1/package/npm/markdown-documentation-maker/badge)](https://www.jsdelivr.com/package/npm/markdown-documentation-maker)

This package is a markdown-based documentation generator that is especially suitable for monorepos. It uses [Tailwind CSS framework](https://tailwindcss.com/) for styling. The documentation is responsive and mobile-friendly. An example of documentation created with this package can be found [here](https://toolcool-range-slider.mzsoft.org/).

![An example of documentation](https://github.com/mzusin/markdown-documentation-maker/blob/main/img/preview-1.png?raw=true)

## Table of contents
- [Initialization](#initialization)
- [Configuration](#configuration)
- [Commands](#commands)
- [How to edit website pages](#how-to-edit-website-pages)

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

This command will create a **docs** folder in the **/src** folder.

## Configuration

- First of all, edit the configuration file located in **/src/docs/data/config.json**. There you can define the website name, email address, etc.

- By default, the documentation sidebar is automatically generated from the filenames. You can set other names in the following configuration file: **/src/docs/data/pages/pages-config.json**.

- Layout files are located at **/src/docs/data/layouts**.

- Homepage is located at **/src/docs/data/special-pages/index.html**.

## Commands

The command below is used to compile the documentation website. It creates the  documentation website located at **/doc** folder in the root.

```shell
npm run docs:build
```

---------------------------------------------

The following command is used to compile the documentation website in watch mode. It will be recreated whenever the documentation source files are modified.

```shell
npm run docs:watch
```

To avoid an infinite loop, add the following [nodemon](https://github.com/remy/nodemon) configuration to your package.json file.

```json
{
  "nodemonConfig": {
    "restartable": "rs",
    "ignore": [
      ".git",
      "node_modules/**/node_modules"
    ],
    "verbose": false,
    "watch": [
      "src/"
    ],
    "ext": "js,json,html,css,md,ts,tsx,glsl"
  }
}
```

---------------------------------------------

Run the documentation website locally (for debugging purposes only). By default, it will be opened on localhost with port 8080 [http://127.0.0.1:8080](http://127.0.0.1:8080)

```shell
npm run docs:website
```

---------------------------------------------

## How to edit website pages

To edit site pages, update the markdown files located in the **/src/docs/data/pages** folder. The website layout files are located in **/src/docs/data/layouts** folder.

It's also possible to create and use additional non-documentation pages. One such predefined page is a **homepage**. It's located at **/special-pages/index.html**.

All pages can use macros to print data from config file. For example, {% github %} or {% website-name %} will take values from the file **/src/docs/data/config.json**.