---
sidebar_position: 1
---

# Get Started

Rsvim is the Vim editor reinvented in Rust+TypeScript. It follows main features, concepts and philosophy of ([Neo](https://neovim.io/))[Vim](https://www.vim.org/), developed with [Rust](https://www.rust-lang.org/), [Tokio](https://tokio.rs/) and [V8](https://v8.dev/) JavaScript engine, all components are redesigned/reinvented/reimplemented from scratch in a modern development approach. The most prominent one among many highlights of Rsvim is its first-class citizen support for [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) ([ECMAScript](https://developer.mozilla.org/en-US/docs/Glossary/ECMAScript)) and [TypeScript](https://www.typescriptlang.org/) as configuration script.

What distinguishes Rsvim from other two:

- With Tokio's async multi-threaded runtime, user input is handled seamlessly alongside various file I/O, network and CPU-intensive tasks. Furthermore, JavaScript `Promise` (including `async`/`await`) is natively handled as well.
- Multi-file modules and plugins utilize standard [ES module](https://tc39.es/ecma262/multipage/ecmascript-language-scripts-and-modules.html) `import` declarations. [NPM package](https://www.npmjs.com/) format is also supported, thereby all plugins can be distributed and versioned directly via the [npmjs](https://www.npmjs.com/) registry.
- TypeScript is parsed and transformed into JavaScript on the fly.
- Script first. From one perspective, you can think of js/ts as configurations for Rsvim. In another, it can be treat as a highly specialised javascript-based runtime akin to [Node.js](https://nodejs.org/) and [Deno](https://deno.com/), but purpose-built for text editor: `stdin` for receiving terminal inputs, `stdout` for rendering the interface.

Rsvim is developed by the [rsvim](https://github.com/rsvim-dev/) community. The project is hosted on [GitHub](https://github.com/rsvim-dev/rsvim), licensed under "Vim License". Perfect compatibility with existing [Vimscript](https://en.wikipedia.org/wiki/Vimscript) community (for Vim) and [Lua](https://neovim.io/doc/user/lua.html) community (for Neovim) is unrealistic, breaking changes are expected and unavoidable.
