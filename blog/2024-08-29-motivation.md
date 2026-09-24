---
title: Motivation
authors: [linrongbin16]
tags: [product]
---

[Vim](https://www.vim.org/) and [Neovim](https://neovim.io/) editors are so popular and loved by developers and text writers all over the world, including me.

{/* truncate */}

## History

During the development of Vim led by [Bram Moolenaar](https://en.wikipedia.org/wiki/Bram_Moolenaar), there has always been a trend that users want to turn Vim into an IDE by providing all various plugins: file explorer, UI components and icons, code completion, diagnostics, code formatting, etc. Vim uses [vimscript](<https://en.wikipedia.org/wiki/Vim_(text_editor)#Vim_script>) as its first-class citizen to support, but this is somewhat niche and hinders people from creating their own plugins or contributing to the Vim project itself (perhaps it is also related to the documentation and syntax design of vimscript). The conflict between Vim's extensibility and user needs has been growing.

Then Neovim came along in [2014](<https://en.wikipedia.org/wiki/Vim_(text_editor)#Neovim>). In order to provide richer and more friendly functions, as well as editing experiences closer to IDE, it introduced [lua](https://www.lua.org/) as its script language and [LuaJIT](https://luajit.org/) as its script runtime. This caused a lot of controversy at the beginning, since lua not only brought quite break changes that are no longer compatible with vimscript (as a scripting language designed for Vim, vimscript is indeed more fittable into the editor), and is not as popular among developers as [python](https://www.python.org/) or [javascript](https://en.wikipedia.org/wiki/JavaScript)/[typescript](https://www.typescriptlang.org/). Before the emergence of Neovim and lua, Vim community usually used these external languages to implement complex plugins, such as auto-completion, file explorer, etc. However, the [IPC](https://en.wikipedia.org/wiki/Inter-process_communication) overhead between the editor itself and the language interpreter/runtime cannot be elimiated, and adding an additional language is not out of box.

Neovim's choice has proven to be successful, with luajit greatly improving the performance and lua providing a much better syntax (compared to vimscript) for handling user's own logic. This has encouraged more users to create their own plugins (including myself) and contribute to the Neovim project. At the same time, Vim brought [vimscript9](https://www.vim.org/vim90.php) as a better scripting language to replace the original vimscript, but this still requires a lot of effort, including development/maintenance as well as time and user feedback. Obviously it is much easier and faster to embed a ready-made scripting language.

## Script

Script plays a most important role in the (Neo)Vim editor: it drives the appearance and behavior of the editor, schedules background tasks, is responsible for communicating with remote processes, and so on. It also turns the editor into a language interpreter/runtime/virtual machine at the same time. When regarding the (Neo)Vim editor as a language interpreter, we will start to think about more topics:

- Modern programming language features:
  - Functional programming: closures, no side effects, etc.
  - Built-in async/await.
  - Static type
  - And a lot more.
- Package management, upgrades and distribution. For example:
  - [Luarocks](https://luarocks.org/) for lua.
  - [Npm](https://www.npmjs.com/) for js/ts.
  - [Pip](https://packaging.python.org/en/latest/tutorials/installing-packages/) for python.

The disadvantages of choosing lua gradually emerged, after all it is limited by the poor syntax design and lacks a large support from the community, far behind the truly popular scripting languages mentioned above.

That's why when looking at the (Neo)Vim editor, the idea of rewriting (reinventing) it with rust+javascript suddenly popped up. Compared with c/c++, rust provides so many powerful and productive features, not to mention the toolchains and active community. As for scripts, we hope to have a scripting language with following features:

- Includes modern features of above scripting languages and package management system.
- Popular and widely used, with an active development community.
- Excellent performance that won't make the editor lag.

We don't have many options:

- Python is too slow.
- Other scripting languages like lua/vimscript/lisp are not that popular, and some new scripting languages are too young to be widely used.

JavaScript meets most of the requirements. Google has spent millions of dollars and tons of engineering hours on the [V8](https://v8.dev/) engine, the community has also emerged with [QuickJS](https://bellard.org/quickjs/), both are great solutions built into the editor. But wait, js has a bad and chaotic syntax, its success actually belongs to the browsers and web industry, not js itself. So the ultimate goal is to write scripts in typescript, and js can play the role of the middle layer under the hood. Ts makes up for some shortcomings of js:

- More elegant and beautiful syntax design.
- Static type.
- Fully compatible with js and the community.

## TUI

Another strong trend is: more and more (Neo)Vim plugins provide complex UI widgets by customizing [floating windows](https://neovim.io/doc/user/api.html#_floating-windows) and [buffers](https://vimhelp.org/windows.txt.html#buffers). There are even some TUI libraries/frameworks that treat (Neo)Vim as a screen containing UI widgets. This idea leads to look at some modern GUI frameworks and even web UI components, such as [Qt](https://www.qt.io/), [Tk](https://www.tcl.tk/)/[Tkinter](https://docs.python.org/3/library/tkinter.html), [Material UI](https://mui.com/material-ui/), [Iced](https://iced.rs/).

Most GUI frameworks support the following features:

1. Coordinate system: Manages the shape, position and size of the UI in the plain 2-dimensions coordinates, as well as the collision and superposition in the 3-dimensions (by introducing the coordinate of the 3rd dimension, namely Z-index).
2. Event handling: (Since users keyboard/mouse events can be located according to the position and shape, it is also possible to) dispatch them to the corresponding handlers (callbacks) bound to the UI components, thereby simplifying the processing of user logic.
3. Layout: The shape of the UI can be fixed or flexible, and can even be managed by mechanisms such as [css flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox), such as row, column and grid.
4. Specialized UI components: buttons, pop-up windows, dialog boxes, contents previewers, text editing windows, etc.

By introducing a TUI engine with such concepts, visual effects can be improved, widget behavior can be standardized, and the workload of plugin development can be reduced.
