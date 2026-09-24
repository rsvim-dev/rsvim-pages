```ts
function setTimeout(
   callback, 
   delay, 
   ...args
): number;
```

Set a timer which executes a function or specified piece of code once the timer expires.

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

A function to be executed after the timer expires.

</td>
</tr>
<tr>
<td>

`delay`

</td>
<td>

`number`

</td>
<td>

(Optional) The milliseconds that the timer should wait before the function is executed, by default is `1`.

</td>
</tr>
<tr>
<td>

...`args`

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
