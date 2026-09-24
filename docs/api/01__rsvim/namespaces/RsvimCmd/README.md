The `Rsvim.cmd` global object for Ex commands.

## Example

```javascript
// Create a alias to 'Rsvim.cmd'.
const cmd = Rsvim.cmd;
```

## Type Aliases

<table>
<thead>
<tr>
<th>Type Alias</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[CommandAttributes](type-aliases/CommandAttributes.md)

</td>
<td>

Command attributes.

**See**

[RsvimCmd.create](functions/create.md)

</td>
</tr>
<tr>
<td>

[CommandCallback](type-aliases/CommandCallback.md)

</td>
<td>

Command callback function, the backend logic that implements a user ex command.

Note: The callback function can be either sync or async.

It accepts a `ctx` parameter that indicates runtime information when the command is executed.

**See**

 - [RsvimCmd.create](functions/create.md)
 - [RsvimCmd.CommandContext](type-aliases/CommandContext.md)
,

</td>
</tr>
<tr>
<td>

[CommandContext](type-aliases/CommandContext.md)

</td>
<td>

Command runtime context.

When a command is been execute, runtime information will be passed to the command callback function.

</td>
</tr>
<tr>
<td>

[CommandDefinition](type-aliases/CommandDefinition.md)

</td>
<td>

Command definition.

</td>
</tr>
<tr>
<td>

[CommandOptions](type-aliases/CommandOptions.md)

</td>
<td>

Command options when creating a command.

**See**

[RsvimCmd.create](functions/create.md)

</td>
</tr>
</tbody>
</table>

## Functions

<table>
<thead>
<tr>
<th>Function</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

[create](functions/create.md)

</td>
<td>

Create a ex command with a callback function.

:::warning
The builtin command `js` cannot be override.
:::

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if any parameters are invalid. Or throws [Error](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error) if command name or alias already exists, but `force` option is not set to override existing command forcibly.

**Example**

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

</td>
</tr>
<tr>
<td>

[echo](functions/echo.md)

</td>
<td>

Echo message to the command-line.

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if the parameter is `null` or `undefined` or no parameter provided.

**Example**

```javascript
Rsvim.cmd.echo("Hello Rsvim!");
```

</td>
</tr>
<tr>
<td>

[get](functions/get.md)

</td>
<td>

Get ex command definition by name.

:::warning
The builtin `js` command cannot be get.
:::

**Example**

```javascript
const def = Rsvim.cmd.get("write");
Rsvim.cmd.echo(`Command: ${def.name}`);
```

</td>
</tr>
<tr>
<td>

[list](functions/list.md)

</td>
<td>

List all registered ex command names.

:::warning
The builtin `js` command will not be listed here.
:::

**Example**

```javascript
Rsvim.cmd.list().forEach((name) => {
  Rsvim.cmd.echo(`Command: ${name}`);
});
```

</td>
</tr>
<tr>
<td>

[remove](functions/remove.md)

</td>
<td>

Remove an ex command by name.

:::warning
The builtin command `js` cannot be removed.
:::

**Throws**

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if name is not a string.

**Example**

```javascript
Rsvim.cmd.list().forEach((cmd) => {
  // Remove all registered commands.
  Rsvim.cmd.remove(cmd.name);
});
```

</td>
</tr>
</tbody>
</table>
