---
sidebar_position: 1
---

# First Steps in Rsvim

## Start

To start Rsvim, open terminal and enter this command:

```bash
rsvim file.txt
```

Rsvim starts editing a file called "file.txt", because this is a new file, you get a blank window. The terminal will look like:

```text
+---------------------------------------+
|#                                      |
|                                       |
|                                       |
|                                       |
|                                       |
|                                       |
+---------------------------------------+
```

:::note
'#' is the cursor position
:::

When Rsvim starts, it by default opens a file buffer and a window. A file buffer loads the file content from file system into memory, a window is a text view for the binded buffer. If no file name(s) are provided, Rsvim opens an empty file buffer without file name. If the specific file doesn't exist in file system, Rsvim opens an empty file buffer with the specific file name.

## Inserting Text

Rsvim is a modal editor, which means the editor behaves differently, depending on which mode you are in. At any given time, the editor would be in exactly one mode. The 2 basic modes are called "normal" mode and "insert" mode. In normal mode, the characters you type are commands. In insert mode, the characters are inserted as text.

After Rsvim just started, it will be in normal mode. To start insert mode, you type the "i" command ("i" is for "insert"). Then you can insert text, it will be inserted into the file buffer on current window where the cursor is in. The file on file system won't be written unless you saved the file buffer. Let's enter the programmer's [limerick](https://vimhelp.org/usr_02.txt.html#02.2):

```text
iA very intelligent turtle
Found programming UNIX a hurdle
```

:::note
The first `i` indicates starting insert mode
:::

After typing "turtle" (last word in first line), you press `<Enter>` key to start a new line. Finally you press `<Esc>` key to exit insert mode and go back to normal mode. Now you have 2 lines of text in your window:

```text
+---------------------------------------+
|A very intelligent turtle              |
|Found programming UNIX a hurdle        |
|                                       |
|                                       |
|                                       |
|                                       |
|                                       |
+---------------------------------------+
```

## Moving Around

After you return to normal mode, you can move around by using these keys:

- `h` and `left`
- `j` and `down`
- `k` and `up`
- `l` and `right`

At first, it may appear that these commands were chosen at random. After all, who ever heard of using "l" for right? But actually, there is a very good reason for these choices: Moving the cursor is the most common thing you do in an editor, and these keys are on the [home row](https://simple.wikipedia.org/wiki/Home_row) of your right hand, assuming you are on the [QWERTY](https://en.wikipedia.org/wiki/QWERTY) keyboard layout. In other words, these commands are placed where you can type them the fastest (especially when you type with 10 fingers).

## Deleting Characters

To delete a character, move the cursor over it and type "i" to start insert, then type "backspace" to delete a character on the left, or type "delete" to delete a character on the right. For example, move cursor to the beginning of the first line, type "i" to start insert mode, then type "delete" for 7 times to delete "A very ". The result should look like:

```text
+---------------------------------------+
|intelligent turtle                     |
|Found programming UNIX a hurdle        |
|                                       |
|                                       |
|                                       |
|                                       |
|                                       |
+---------------------------------------+
```

Now you can insert new text, for example by typing:

```text
iA young <Esc>
```

:::note
The first `i` indicates starting insert mode, the last `<Esc>` key indicates returning back to normal mode
:::

It starts insert mode (by `i`), and inserts words "A young ", then exits insert mode (by `<Esc>`). The result is:

```text
+---------------------------------------+
|A young intelligent turtle             |
|Found programming UNIX a hurdle        |
|                                       |
|                                       |
|                                       |
|                                       |
|                                       |
+---------------------------------------+
```

## Appending

The `i` command starts inserting under the cursor, while the `a` command starts inserting after the cursor. For example append "!!!" at the end of this line:

```text
and that's not saying much for the turtle
```

Move the cursor to the end of the line, at the last `e` character, type:

```text
a!!!<Esc>
```

:::note
The first `a` indicates appending, the last `<Esc>` indicates returning back to normal mode
:::

The result is:

```text
and that's not saying much for the turtle!!!
```

## Opening Up a New Line

The `o` command creates a new, empty line below the cursor and starts insert mode. Then you can insert text for the new line. For example, the cursor is at the beginning of the first line:

```text
A very intelligent turtle
Found programming UNIX a hurdle
```

If you now use the `o` command and type new text:

```text
oThat liked using Vim<Esc>
```

:::note
The first `o` indicates opening up a new line, the last `<Esc>` indicates returning back to normal mode
:::

The result is:

```text {2}
A very intelligent turtle
That liked using Vim
Found programming UNIX a hurdle
```

## Save Your Work

All the editings only change the in-memory buffer content, they will not be saved to file system until you execute so. For example, once you are in normal mode, to save the current buffer to file system, type:

```text
:js Rsvim.buf.writeSync(Rsvim.buf.current());<Enter>
```

:::note
The first `:` indicates starting the "command-line" mode, the last `<Enter>` indicates confirming the input ex command and returning back to normal mode

- `Rsvim.buf.current()` returns current buffer ID
- `Rsvim.buf.writeSync()` writes the buffer (specified by ID) to file system synchronously
  :::

Now you can verify the file changes in file system.

## Quit

After saving the file, you exit Rsvim by typing:

```text
:js Rsvim.rt.exit();<Enter>
```

:::note
The first `:` indicates starting the "command-line" mode, the last `<Enter>` indicates confirming the input ex command and returning back to normal mode
:::

Now you can go on with other works.

:::tip[Question]
Where are the `:w` and `:q` ex commands?

The only builtin command in Rsvim is `js`, but we _officially_ provide the [ex.rsvim](https://www.npmjs.com/package/ex.rsvim) plugin to implement Vim's builtin ex commands, try to provide a compatible user experience in command-line.

Please checkout [Install Plugin](docs/manual/configuration/install_plugin.md) for more details.
:::
