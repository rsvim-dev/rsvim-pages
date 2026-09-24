---
sidebar_position: 6
---

# Create Plugin

Creating Rsvim plugin is equivalent to creating a npm package, while Rsvim is not node/deno, there are still several tips and points to note.

## Project Structure

Using [TypeScript](https://www.typescriptlang.org/) as the plugin developing language is recommended if you want to build something big, and ensure the code quality to avoid unexpected runtime issues.

A recommended project structure is:

```
./your_plugin
|- dist/
   |- index.js
|- src/
   |- index.ts
|- types/
   |- index.d.ts
|- package.json
|- tsconfig.json
```

1. `dist/` directory is for generated `.js` files.
2. `src/` directory is for typescript `.ts` source code files.
3. `types/` directory is optional for generated `.d.ts` declaration files. This is only used when you want to export typescript types (as a dependency for other plugins).
4. `package.json` file is for npm package configurations.
5. `tsconfig.json` file is for typescript compiler options.

## `tsconfig.json`

### Code Generation

Rsvim uses almost the latest V8 engine, which sticks to the latest ECMA standard, thus "esnext" is recommended to generate modern js code. We don't need to assume any technical debt.

```json
{
    "lib": ["esnext"],
    "module": "esnext",
    "moduleResolution": "bundler",
    "target": "esnext",
}
```

### Input/Output

Specify the input ts code for `tsc`, output js code, and optional `.d.ts` declaration files if you want to exports some typescript types (as a dependency for other plugins).

```json
{
    "declaration": true,
    "declarationDir": "./types/",
    "outDir": "./dist/",
    "rootDir": "./src/",
}
```

1. `"declaration": true` indicates generate the `.d.ts` files when running `tsc` command.
2. `"declarationDir": "./types/"` indicates put the generated `.d.ts` files into `./types` directory.
3. `"outDir": "./dist/"` indicates put the generated `.js` files into `./dist/` directory.
4. `"rootDir": "./src/"` indicates typescript `.ts` source code files are in `./src/` directory.

## `package.json`

### ES Module

```json
{
    "type": "module",
}
```

Always set `"type"` to `"module"` to indicate this is a ES Module, because Rsvim only support ES Modules (e.g. the `import` keyword), Common JS is not supported, you cannot use the `require` keyword like node.


### Package Entry

```json
{
    "exports": "./dist/index.js",
}
```

It indicates the `./dist/index.js` file is the entry for this npm package. Thus when user imports this plugin with:

```javascript
import your_plugin from "your_plugin";
```

User actually gets `your_plugin/dist/index.js` file, and Rsvim will never know about the `your_plugin/src/index.ts`. Here ts files are just source code, while js files are the compiled output that really work with the js runtime.

### Types Declaration

```json
{
    "types": "./types/index.d.ts",
}
```

This is optional, it indicates your plugin's declaration types, this is useful if your plugin is a dependency for other plugins.

## `rsvim-types`

Once start writing code, you will soon find that typescript LSP doesn't work, e.g. it cannot provide any code-completion or lint information for you. This is because typescript doesn't know Rsvim runtime yet.

So Rsvim provides type declarations for itself, e.g. the [`rsvim-types`](https://www.npmjs.com/package/rsvim-types) npm package. It doesn't include any APIs or modules, but only types declarations.

### Latest Stable

Run `npm install rsvim-types --save-dev` to install the `rsvim-types` package as a development dependency. The `package.json` file will become:

```json
{
    "devDependencies": {
        "rsvim-types": "^0.2.0"
    }
}
```

And add below options to `tsconfig.json` to introduce it to typescript compiler:

```json
{
    "types": ["rsvim-types"],
}
```

### Nightly/Main

If you want to use build a plugin that working on nightly or main branch of Rsvim, you will have to copy the [`types`](https://github.com/rsvim-dev/rsvim/tree/main/types) directory in Rsvim to `./src/rsvim-types` directory in your local project:

```
./your_plugin
|- dist/
   |- index.js
|- src/
   |- index.ts
   |- rsvim-types/   <-- Copied here
|- types/
   |- index.d.ts
|- package.json
|- tsconfig.json
```

And add below options to `tsconfig.json`:

```json
{
    "typeRoots": ["./src/rsvim-types/"],
}
```

### Version

Rsvim publishes the `rsvim-types` with a compatible major/minor version policy, it is, the npm package will have a same major/minor version with the cargo version (while the patch version can be different).

For example now we have cargo versions:

- v0.2.0
- v0.2.1
- v0.3.0
- v0.3.1
- v0.3.2

And `rsvim-types` npm versions are:

- v0.2.0
- v0.2.1
- v0.2.2
- ......
- v0.2.59
- v0.3.0
- v0.3.1
- v0.3.2
- ......
- v0.3.10

All the `rsvim-types@v0.2.x` npm packages will be compatible with `rsvim@v0.2.x` cargo crates. All the `rsvim-types@v0.3.x` npm packages will be compatible with `rsvim@v0.3.x` cargo crates. Usually npm package can have a higher release frequency than cargo crate.

So, you can just install a latest compatible version of `rsvim-types` for your Rsvim binary:

```bash
npm install rsvim-types@v0.2 --save-dev
```

In above example, we install the last `v0.2.x` npm package for Rsvim v0.2.
