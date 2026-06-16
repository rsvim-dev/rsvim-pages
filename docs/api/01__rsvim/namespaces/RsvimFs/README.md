The `Rsvim.fs` global object for file system and file IO.

## Example

```javascript
// Create a alias to 'Rsvim.fs'.
const fs = Rsvim.fs;
```

## Classes

<table>
<thead>
<tr>
<th>Class</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[File](classes/File.md)

</td>
<td>

The File object that access to an open file on filesystem.

**See**

[RsvimFs.open](functions/open.md)

</td>
</tr>
</tbody>
</table>

## Type Aliases

<table>
<thead>
<tr>
<th>Type Alias</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[FileInfo](type-aliases/FileInfo.md)

</td>
<td>

File information, it contains 3 groups of properties:
- Common properties that are available for all platforms.
- Windows platforms only properties
- Unix platforms only properties

</td>
</tr>
<tr>
<td>

[MkdirOptions](type-aliases/MkdirOptions.md)

</td>
<td>

Mkdir options.

</td>
</tr>
<tr>
<td>

[OpenOptions](type-aliases/OpenOptions.md)

</td>
<td>

Open options.

:::tip
It is same with [std::fs::OpenOptions](https://doc.rust-lang.org/std/fs/struct.OpenOptions.html) in rust std library.
:::

**See**

[RsvimFs.open](functions/open.md)

</td>
</tr>
<tr>
<td>

[SymlinkOptions](type-aliases/SymlinkOptions.md)

</td>
<td>

**See**

[RsvimFs.symlink](functions/symlink.md)

</td>
</tr>
</tbody>
</table>

## Functions

<table>
<thead>
<tr>
<th>Function</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[link](functions/link.md)

</td>
<td>

Create hard link from a file path.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if any parameter is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to create hard link from the file.

**Example**

```javascript
try {
  await Rsvim.fs.link("README.md", "linked-README.md");
  Rsvim.cmd.echo(`Created hard link "linked-README.md" pointing to "README.md"`);
} catch (e) {
  Rsvim.cmd.echo(`Failed to create hard link pointing to "README.md": ${e}`);
}
```

</td>
</tr>
<tr>
<td>

[linkSync](functions/linkSync.md)

</td>
<td>

Sync version of [link](functions/link.md).

**Example**

```javascript
try {
  Rsvim.fs.linkSync("README.md", "linked-README.md");
  Rsvim.cmd.echo(`Created hard link "linked-README.md" pointing to "README.md"`);
} catch (e) {
  Rsvim.cmd.echo(`Failed to create hard link pointing to "README.md": ${e}`);
}
```

</td>
</tr>
<tr>
<td>

[lstat](functions/lstat.md)

</td>
<td>

Get the status of a file by path.

:::note
This api doesn't follow symbolic link.
:::

**See**

[RsvimFs.stat](functions/stat.md)

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the file name is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to get file status.

**Example**

```javascript
const fstat = await Rsvim.fs.lstat("README.md");
```

</td>
</tr>
<tr>
<td>

[lstatSync](functions/lstatSync.md)

</td>
<td>

Sync version of [lstat](functions/lstat.md).

**Example**

```javascript
const fstat = Rsvim.fs.lstatSync("README.md");
```

</td>
</tr>
<tr>
<td>

[mkdir](functions/mkdir.md)

</td>
<td>

Make a directory.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if any parameter is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to create hard mkdir from the file.

**Example**

```javascript
try {
  await Rsvim.fs.mkdir(".rsvim");
  Rsvim.cmd.echo(`Created directory ".rsvim"`);
} catch (e) {
  Rsvim.cmd.echo(`Failed to create directory ".rsvim": ${e}`);
}
```

</td>
</tr>
<tr>
<td>

[mkdirSync](functions/mkdirSync.md)

</td>
<td>

Sync version of [mkdir](functions/mkdir.md).

**Example**

```javascript
try {
  Rsvim.fs.mkdirSync(".rsvim");
  Rsvim.cmd.echo(`Created directory ".rsvim"`);
} catch (e) {
  Rsvim.cmd.echo(`Failed to create directory ".rsvim": ${e}`);
}
```

</td>
</tr>
<tr>
<td>

[open](functions/open.md)

</td>
<td>

Open a file and resolve to an instance of [RsvimFs.File](classes/File.md). The file does not need to previously exist if using the `create` or `createNew` open options.
The caller have to close the file to prevent resource leaking, see [RsvimFs.File.close](classes/File.md#close).

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if any parameters are invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to open/create the file.

**Example**

```javascript
const file = await Rsvim.fs.open("README.md");
```

</td>
</tr>
<tr>
<td>

[openSync](functions/openSync.md)

</td>
<td>

Sync version of [open](functions/open.md).

**Example**

```javascript
const file = Rsvim.fs.openSync("README.md");
```

</td>
</tr>
<tr>
<td>

[readFile](functions/readFile.md)

</td>
<td>

Read a file in binary mode, i.e. into an array of bytes buffer, without open/close a file descriptor/handle.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the file name is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to read the file.

**Example**

```javascript
const buffer = await Rsvim.fs.readFile("README.md");
```

</td>
</tr>
<tr>
<td>

[readFileSync](functions/readFileSync.md)

</td>
<td>

Sync version of [readFile](functions/readFile.md).

**Example**

```javascript
const buffer = Rsvim.fs.readFileSync("README.md");
```

</td>
</tr>
<tr>
<td>

[readTextFile](functions/readTextFile.md)

</td>
<td>

Read a file in text mode, i.e. into a string, without open/close a file descriptor/handle.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the file name is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to read the file.

**Example**

```javascript
const payload = await Rsvim.fs.readTextFile("README.md");
```

</td>
</tr>
<tr>
<td>

[readTextFileSync](functions/readTextFileSync.md)

</td>
<td>

Sync version of [readTextFile](functions/readTextFile.md).

**Example**

```javascript
const payload = Rsvim.fs.readTextFileSync("README.md");
```

</td>
</tr>
<tr>
<td>

[stat](functions/stat.md)

</td>
<td>

Get the status of a file by path.

:::note
This api follows symbolic link.
:::

**See**

[RsvimFs.lstat](functions/lstat.md)

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the file name is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to get file status.

**Example**

```javascript
const fstat = await Rsvim.fs.stat("README.md");
```

</td>
</tr>
<tr>
<td>

[statSync](functions/statSync.md)

</td>
<td>

Sync version of [stat](functions/stat.md).

**Example**

```javascript
const fstat = Rsvim.fs.statSync("README.md");
```

</td>
</tr>
<tr>
<td>

[symlink](functions/symlink.md)

</td>
<td>

Create symbolic link from a file path.

On Windows platforms, you should specify the 3rd parameter "options" with below 3 options:

- `"file"` or `"dir"`: Pointing to [CreateSymbolicLinkW](https://learn.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-createsymboliclinkw) function.
- `"junction"`: NTFS v5+ features roughly equivalent to Unix directory symbolic links.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if any parameter is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to create symbolic link from the file.

**Example**

```javascript
try {
  // Linux
  await Rsvim.fs.symlink("README.md", "linked-README.md");
  // Windows
  await Rsvim.fs.symlink("README.md", "linked-README.md", "junction");
  Rsvim.cmd.echo(`Created symbolic link "linked-README.md" pointing to "README.md"`);
} catch (e) {
  Rsvim.cmd.echo(`Failed to create symbolic link pointing to "README.md": ${e}`);
}
```

</td>
</tr>
<tr>
<td>

[symlinkSync](functions/symlinkSync.md)

</td>
<td>

Sync version of [symlink](functions/symlink.md).

**Example**

```javascript
try {
  // Linux
  Rsvim.fs.symlinkSync("README.md", "linked-README.md");
  // Windows
  Rsvim.fs.symlinkSync("README.md", "linked-README.md", "junction");
  Rsvim.cmd.echo(`Created symbolic link "linked-README.md" pointing to "README.md"`);
} catch (e) {
  Rsvim.cmd.echo(`Failed to create symbolic link pointing to "README.md": ${e}`);
}
```

</td>
</tr>
</tbody>
</table>
