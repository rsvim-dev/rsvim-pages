```ts
function linkSync(oldpath, newpath): void;
```

Sync version of [link](link.md).

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
</tbody>
</table>

## Returns

`void`

## Example

```javascript
try {
  Rsvim.fs.linkSync("README.md", "linked-README.md");
  Rsvim.cmd.echo(`Created hard link "linked-README.md" pointing to "README.md"`);
} catch (e) {
  Rsvim.cmd.echo(`Failed to create hard link pointing to "README.md": ${e}`);
}
```
