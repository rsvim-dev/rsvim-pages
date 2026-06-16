```ts
function link(oldpath, newpath): Promise<void>;
```

Create hard link from a file path.

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
</tbody>
</table>

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

It resolves to nothing.

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if any parameter is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to create hard link from the file.

## Example

```javascript
try {
  await Rsvim.fs.link("README.md", "linked-README.md");
  Rsvim.cmd.echo(`Created hard link "linked-README.md" pointing to "README.md"`);
} catch (e) {
  Rsvim.cmd.echo(`Failed to create hard link pointing to "README.md": ${e}`);
}
```
