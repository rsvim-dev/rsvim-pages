---
sidebar_position: 1
---

# Introduction

For most general script programming languages such as [python](https://www.python.org/), builtin types/classes/functions (e.g. [`len`](https://docs.python.org/3/library/functions.html#len)) and standard library (e.g. [`datetime`](https://docs.python.org/3/library/datetime.html#module-datetime)) are shipped with interpreters. JavaScript runtime plays a similar role, the difference is that the js language is defined by [ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/) standard and implemented by js engine such as [V8](https://v8.dev/), while js runtime provides a standard library, schedules async tasks and fills in many other gaps. The standard library mainly includes:

- [Web APIs](https://developer.mozilla.org/en-US/docs/Web/API): Most popular javascript-based runtimes share a compatible implementations today.
- Specific APIs: Different runtimes provide their own specific APIs, i.e. browsers such Chrome/Firefox provide the [`document`](https://developer.mozilla.org/en-US/docs/Web/API/Document) DOM tree APIs, server-side runtimes such as node/deno provide their own APIs to manage the operating systems.

This chapter references all the APIs provided by the Rsvim editor.

## 1. ECMAScript Standard Built-in APIs

ECMAScript's standard built-in APIs are defined by [ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/), natively implemented by the V8 engine embedded in Rsvim. These APIs are "global objects" that are available without `import` any additional modules. For example [`globalThis`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/globalThis), [`encodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI)/[`decodeURI()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/decodeURI), [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number), [`RegExp`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp), etc.

Please reach out to [MDN | Standard built-in objects - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects) for detailed built-in API references.

## 2. Web Platform APIs

Besides the ECMA standard, a large number of web APIs are also been widely implemented by most javascript-based runtimes: chrome/firefox browsers, node/deno runtimes, etc. The full list of all web APIs and interfaces can be found in [MDN | Web APIs](https://developer.mozilla.org/en-US/docs/Web/API), and the [WinterTC](https://wintertc.org/) community group come up with the [Minimum Common Web Platform API](https://min-common-api.proposal.wintertc.org/) specification, which defines a minimum set of standard web platform APIs for both browser and non-browser javascript-based runtimes. Rsvim tries to follow WinterTC standard, but (maybe) only covers a subset due to the development effort.

The web APIs are also "global objects" just like ECMA standard built-in APIs.

## 3. Rsvim APIs

Similar to node/deno, Rsvim provides a set of APIs to help users manipulating both editor and operating system. The APIs can be divided into two groups: editor related and general purposed.

### 2.1. Editor APIs

Editor APIs are for the text editor itself, including windows, buffers, cursors, commands, etc. They can be accessed via the global object [`Rsvim`](rsvim/namespaces/Rsvim), similar to the [`vim`](https://neovim.io/doc/user/lua.html#Lua) lua global namespace in Neovim.

### 2.2. General APIs

General APIs are similar to a standard library in other programming languages. But Rsvim focus on text editing, the existence of all APIs only serves this purpose, they are mostly related to file system, network/http, date time, IPC/RPC and child process management, etc. For web and browser related APIs, they will not be provided.

These APIs also share the same global object [`Rsvim`](rsvim/namespaces/Rsvim).

:::warning
Rsvim editor exposes the rust implemented APIs to the JavaScript world by binding them to the `__InternalRsvimGlobalObject` global object, which should never be directly used. The `Rsvim` is a thin wrapper on it.
:::
