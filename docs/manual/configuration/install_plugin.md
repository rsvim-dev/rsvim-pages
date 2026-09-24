---
sidebar_position: 5
---

# Install Plugin

A plugin is still the same thing we mentioned in previous sections, e.g. a single javascript/typescript file is a plugin, a package is a plugin as well.

Difference is the concept: "module" or "package" is how you structure your configurations, while "plugin" is how these configurations are shared and distributed among the community and users.

You need to go to Rsvim config home directory before installing any plugins:

```bash
# use $XDG_CONFIG_HOME
cd $XDG_CONFIG_HOME/rsvim

# or use $HOME
cd $HOME/.rsvim
```

In this section, assume you use `$HOME/.rsvim` as Rsvim config home, now let's use [ex.rsvim](https://www.npmjs.com/package/ex.rsvim) as an example to show how to install and use a plugin.

:::note
The "ex.rsvim" plugin implements Vim's builtin [ex commands](https://vimhelp.org/index.txt.html#index.txt) (such as `write`, `quit`) to provide a compatible user experience in command-line. And you don't need to use [the annoying `js` command](/docs/manual/basic_usage/first_steps_in_rsvim#quit) any more.
:::

## Git

First `git clone` the GitHub repository to your config home:

```bash
git clone https://github.com/rsvim-dev/ex.rsvim
```

Your config home directory structure will become:

```
$HOME/.rsvim
|- rsvim.js
|- ex.rsvim/   <-- `ex.rsvim` here
   |- lib/
      |- index.js
      |- ...
   |- src/
      |- index.ts
      |- ...
   |- types/
      |- index.d.ts
      |- ...
   |- README.md
   |- LICENSE.txt
   |- package.json
   |- package-lock.json
   |- ...
```

ex.rsvim exports a initialization method `setup`. Let's setup the "ex.rsvim" plugin in your config entry script:

```javascript
import ex from "ex.rsvim";

ex.setup();
```

Since Rsvim can recognize the npm package in its config home directory, it will load the plugin entry `$HOME/.rsvim/ex.rsvim/lib/index.js`, which is specified in its `package.json` file:

```json
{
  "exports": "./lib/index.js",
  ...
}
```

## Npm

ex.rsvim is also published as a npm package [`ex.rsvim`](https://www.npmjs.com/package/ex.rsvim), thus we can also install it with `npm`:

```bash
npm install ex.rsvim
```

Your config home directory will become:

```
$HOME/.rsvim
|- rsvim.js
|- package.json      <-- create a `package.json` file
|- package-lock.json <-- and a `package-lock.json` file
|- node_modules/
   |- ex.rsvim/   <-- `ex.rsvim` here
      |- lib/
      |- src/
      |- types/
      |- ...
```

The newly created `package.json` file will look like:

```json
{
  "dependencies": {
    "ex.rsvim": "^0.2.0"
  }
}
```

The setup part is a little different from git clones, your config entry script becomes:

```javascript {1}
import ex from "ex.rsvim";

ex.setup();
```

You will have to use npm package name instead of a directory name.

## Manage Your Plugins with `package.json`

With the `node_modules` looking up, now you can directly use `npm` to manage all your plugins, even your own Rsvim configurations (your `$HOME/.rsvim` can also be treated as a package), with a single `package.json` file.

For example your config home is:

```
$HOME/.rsvim
|- rsvim.js
|- package.json
```

### `package.json`

```json
{
  "type": "module",
  "dependencies": {
    "syntax.rsvim": "^0.1.0",
    "ex.rsvim": "^0.2.0"
    ...
  }
}
```

### `rsvim.js`

```javascript
import syntax from "syntax.rsvim";
import ex from "ex.rsvim";

syntax.setup();
ex.setup();
```

The `package.json` specifies all the plugins with semantic version support. Run `npm install` command inside the config home, all plugins will be installed in the `node_modules` directory.

The config entry `rsvim.js` can just import these npm packages like node/deno!

:::warning
Not all plugins in the `package.json` really exist 😁 (at least for now).
:::
