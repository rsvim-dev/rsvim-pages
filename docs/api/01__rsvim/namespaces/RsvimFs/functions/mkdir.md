```ts
function mkdir(path, options?): Promise<void>;
```

Make a directory.

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

Directory path.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

[`MkdirOptions`](../type-aliases/MkdirOptions.md)

</td>
<td>

(Optional) Options when create directory, by default is `{recursive: false, mode: 0o777}`, the `mode` option only works on Unix platform, and is ignored on Windows platform.

</td>
</tr>
</tbody>
</table>

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

It resolves to nothing.

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if any parameter is invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if failed to create hard mkdir from the file.

## Example

```javascript
try {
  await Rsvim.fs.mkdir(".rsvim");
  Rsvim.cmd.echo(`Created directory ".rsvim"`);
} catch (e) {
  Rsvim.cmd.echo(`Failed to create directory ".rsvim": ${e}`);
}
```
