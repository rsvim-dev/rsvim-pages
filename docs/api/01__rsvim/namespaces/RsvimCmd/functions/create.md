```ts
function create(
   name, 
   callback, 
   attributes?, 
   options?
): CommandDefinition;
```

Create a ex command with a callback function.

:::warning
The builtin command `js` cannot be override.
:::

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

`name`

</td>
<td>

`string`

</td>
<td>

Command name that is going to create. Only letters (`a-z` and `A-Z`), digits (`0-9`), underscore (`_`) and exclamation (`!`) are allowed in a command name. Command name must not begin with a digit.

</td>
</tr>
<tr>
<td>

`callback`

</td>
<td>

[`CommandCallback`](../type-aliases/CommandCallback.md)

</td>
<td>

Callback function that implements the command. It accepts an `ctx` parameter that contains all the information when user is running it.

</td>
</tr>
<tr>
<td>

`attributes?`

</td>
<td>

[`CommandAttributes`](../type-aliases/CommandAttributes.md)

</td>
<td>

(Optional) Attributes that control the command behavior, by default is `{bang:false, nargs:"0"}`.

</td>
</tr>
<tr>
<td>

`options?`

</td>
<td>

[`CommandOptions`](../type-aliases/CommandOptions.md)

</td>
<td>

(Optional) Options that control how the command is created, by default is `{force:true}`.

</td>
</tr>
</tbody>
</table>

## Returns

[`CommandDefinition`](../type-aliases/CommandDefinition.md)

It returns `undefined` is the command is newly created. Or it returns a command definition that was defined previously.

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if any parameters are invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if command name or alias already exists, but `force` option is not set to override existing command forcibly.

## Example

```javascript
async function write(ctx: RsvimCmd.CommandContext): void {
  try {
    const bytes = Rsvim.buf.writeSync(ctx.currentBufferId);

    // Call other async APIs
    const file = await Rsvim.fs.open("message.txt");
    const buffer = new Uint8Array(100);
    const read = await file.read(buffer);
    const message = new TextDecoder().decode(buffer);

    Rsvim.cmd.echo(`Buffer ${bufId} has been saved, ${bytes} bytes written with message: ${message}`);
  } catch (e) {
    Rsvim.cmd.echo(`Error: failed to save buffer ${bufId}, exception: ${e}`);
  }
}
Rsvim.cmd.create("write", write);
```
