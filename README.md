# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


## Json Server
## Getting started

Install JSON Server 

```
npm install -g json-server
```


## Create a JSON database file

After installing the JSON Server package, the next step is to create a JSON file that will serve as your local database. To do this, create a new file on your text editor ending in the extension .json. Also, to keep your project neatly separated from the JSON Server files, I recommend putting every file concerning JSON Server in a single folder.

## Add data in JSON format
Copy the contents of this project's db.json file to the file you just created.


## Start JSON Server Local
Run the following command in your console from the source path of the .json file.

```bash
json-server --watch db.json
```

Start JSON Server Public

```bash
json-server --host 192.168.x.xxx db.json
```

## Important
Modify the .env file and place the json server url

Now if you go to [http://localhost:3000/posts/1](http://localhost:3000/posts/1) or you go to [http://192.168.x.xxx:3000/posts/1](http://192.168.x.xxx/posts/1), you'll get
