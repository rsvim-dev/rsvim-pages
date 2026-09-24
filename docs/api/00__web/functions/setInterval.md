```ts
function setInterval(
   callback, 
   delay?, 
   ...args
): number;
```

Set a repeated timer that calls a function, with a fixed time delay between each call.

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

`callback`

</td>
<td>

(...`args`) => `void`

</td>
<td>

A function to be executed every `delay` milliseconds.

</td>
</tr>
<tr>
<td>

`delay?`

</td>
<td>

`number`

</td>
<td>

(Optional) The milliseconds that the timer should delay in between execution of the function, by default is `1`.

</td>
</tr>
<tr>
<td>

...`args?`

</td>
<td>

`any`[]

</td>
<td>

(Optional) Additional arguments which are passed through to the function.

</td>
</tr>
</tbody>
</table>

## Returns

`number`

The ID (integer) which identifies the timer created.

## Throws

Throws [TypeError](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/TypeError) if callback is not a function, or delay is neither a number or undefined.
