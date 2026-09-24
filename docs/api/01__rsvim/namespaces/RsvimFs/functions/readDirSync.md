```ts
function readDirSync(path): Iterable<DirEntry>;
```

Sync version of [readDir](readDir.md).

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

[`Iterable`](https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#iterable-interface)\<[`DirEntry`](../type-aliases/DirEntry.md)\>

Iterator.

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the path is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to read the directory.

## Example

```javascript
for (const entry of Rsvim.fs.readDirSync(".")) {
  Rsvim.cmd.echo(entry.name);
}
```
