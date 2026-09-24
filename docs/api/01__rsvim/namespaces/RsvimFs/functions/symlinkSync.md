```ts
function symlinkSync(
   oldpath, 
   newpath, 
   options?
): void;
```

Sync version of [symlink](symlink.md).

## Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
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
</tr>
<tr>
<td>

`newpath`

</td>
<td>

`string`

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

`"dir"` \| `"junction"` \| `"file"`

</td>
</tr>
</tbody>
</table>

## Returns

`void`

## Example

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
