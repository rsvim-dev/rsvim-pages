```ts
function symlink(
   oldpath, 
   newpath, 
   options?
): Promise<void>;
```

Create symbolic link from a file path.

On Windows platforms, you should specify the 3rd parameter "options" with below 3 options:

- `"file"` or `"dir"`: Pointing to [CreateSymbolicLinkW](https://learn.microsoft.com/en-us/windows/win32/api/winbase/nf-winbase-createsymboliclinkw) function.
- `"junction"`: NTFS v5+ features roughly equivalent to Unix directory symbolic links.

## Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`oldpath`

</td>
<td>

`string`

</td>
<td>

Original file path.

</td>
</tr>
<tr>
<td>

`newpath`

</td>
<td>

`string`

</td>
<td>

New symbolic link that pointing to the original file.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`"dir"` \| `"junction"` \| `"file"`

</td>
<td>

(Optional) Only used on Windows platforms, will be ignored on Unix platforms. By default is `"junction"`.

</td>
</tr>
</tbody>
</table>

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

It resolves to nothing.

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if any parameter is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to create symbolic link from the file.

## Example

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
