```ts
function mkdirSync(path, options?): void;
```

Sync version of [mkdir](mkdir.md).

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

`path`

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

[`MkdirOptions`](../type-aliases/MkdirOptions.md)

</td>
</tr>
</tbody>
</table>

## Returns

`void`

## Example

```javascript
try {
  Rsvim.fs.mkdirSync(".rsvim");
  Rsvim.cmd.echo(`Created directory ".rsvim"`);
} catch (e) {
  Rsvim.cmd.echo(`Failed to create directory ".rsvim": ${e}`);
}
```
