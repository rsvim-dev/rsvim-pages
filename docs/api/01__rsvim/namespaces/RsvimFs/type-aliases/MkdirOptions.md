```ts
type MkdirOptions = object;
```

Mkdir options.

## Properties

### mode?

```ts
optional mode?: number;
```

Unix permission when creating the directory, by default is `0o777`.

:::note
This option only works on Unix platforms and is ignored on Windows platforms.
:::

#### Default Value

`0o777`

***

### recursive?

```ts
optional recursive?: boolean;
```

Whether make directory recursively, by default is `false`.

#### Default Value

`false`
