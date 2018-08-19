# Phaser 3 TS Project Template

This is a template for projects written in [TypeScript](https://www.typescriptlang.org/), built with [Webpack 4](https://webpack.js.org/) and using the game development framework [Phaser 3](http://phaser.io/).

> This template is working fine, but currently the type definitions of Phaser 3 are not very ... helpful. The main problem is, that at many locations they are simply wrong or something is missing. Typescript won't compile your code, even if it is correct. You will start casting anything to any and at this point it starts to get boring. There is [an issue about this and the type definitions in general](https://github.com/photonstorm/phaser/issues/3224), but the fact, that the .d.ts files are being generated from the documentation makes things incredibly complicated. I have tried to fix some problems, but the [tsgen](https://github.com/photonstorm/phaser3-docs/tree/master/tsgen) does not support all necessary features to create good type definitions and the structure of Phaser is quite complex. For now, I gave up using Phaser because it's not possible to code it with TypeScript.

# Usage

Initialize the dependencies:

```
npm install
```

Launch the development server:
 
```
npm start
```

# Adapt

* Update the project information in the `package.json` file.
* Set the title in the `index.html` file.
* Implement the code in the `src` folder and mix it the assets.

# IDE

Recommended editor: 
* [Visual Studio Code](https://code.visualstudio.com/)

Recommended plugins: 
* [Beautify](https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify)
* [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
* [Sort Typescript Imports](https://marketplace.visualstudio.com/items?itemName=miclo.sort-typescript-imports)
* [TSLint](https://marketplace.visualstudio.com/items?itemName=eg2.tslint)

# A note on the coding style

I use an adaption of the [TypeScript Coding guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines), because I prefer them for reasons based on a lot of professional coding experience in large teams. Feel free to edit the `settings.json` file and the `.editorconfig`, but it will hardly get any better ;)


