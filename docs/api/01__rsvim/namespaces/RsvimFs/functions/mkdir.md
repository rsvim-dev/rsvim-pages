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

&hyphen;

</td>
</tr>
</tbody>
</table>

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

It resolves to nothing.

## Throws

Throws !TypeError if any parameter is invalid. Or throws Error if failed to create hard mkdir from the file.

## Example

```javascript
try {
  await Rsvim.fs.mkdir(".rsvim");
  Rsvim.cmd.echo(`Created directory ".rsvim"`);
} catch (e) {
  Rsvim.cmd.echo(`Failed to create directory ".rsvim": ${e}`);
}
```
