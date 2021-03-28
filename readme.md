# React counter example

## Project structure

User files are placed in `src` directory:

-   `index.html`: main HTML page.
-   `main.jsx`: main script file, included in `index.html` with the custom extension. Parcel takes care of transpiling and bundling behind the scenes.
-   `style.css`: main stylesheet, included in `index.html`

## Install dependencies

Install dependencies defined in `package.json` with `npm`:

```sh
npm install
```

## Run project

Run locally installed Parcel with `npx`, and tell it to bundle everything starting from the main HTML file:

```
npx parcel src/index.html
```

Parcel will create production files in `dist` directory, and also start a simple web server to display the app, running at http://localhost:1234
