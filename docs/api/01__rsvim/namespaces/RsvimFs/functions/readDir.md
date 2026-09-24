```ts
function readDir(path): AsyncIterable<DirEntry>;
```

Read a directory with async iterator.

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

`path`

</td>
<td>

`string`

</td>
<td>

Directory path to read.

</td>
</tr>
</tbody>
</table>

## Returns

`AsyncIterable`\<[`DirEntry`](../type-aliases/DirEntry.md)\>

Async iterator.

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the path is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to read the directory.

## Example

```javascript
for await (const entry of Rsvim.fs.readDir(".")) {
  Rsvim.cmd.echo(entry.name);
}
```
