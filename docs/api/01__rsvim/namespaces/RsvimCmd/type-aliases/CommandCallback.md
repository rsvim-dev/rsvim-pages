```ts
type CommandCallback = (ctx) => 
  | void
| Promise<void>;
```

Command callback function, the backend logic that implements a user ex command.

Note: The callback function can be either sync or async.

It accepts a `ctx` parameter that indicates runtime information when the command is executed.

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

`ctx`

</td>
<td>

[`CommandContext`](CommandContext.md)

</td>
</tr>
</tbody>
</table>

## Returns

  \| `void`
  \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

## See

 - [RsvimCmd.create](../functions/create.md)
 - [RsvimCmd.CommandContext](CommandContext.md)
,
