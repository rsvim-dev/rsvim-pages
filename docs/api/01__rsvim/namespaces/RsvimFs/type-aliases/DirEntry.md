```ts
type DirEntry = object;
```

Directory entry returned from [RsvimFs.readDir](../functions/readDir.md) and [RsvimFs.readDirSync](../functions/readDirSync.md).

## Properties

### fileName

```ts
fileName: string;
```

File name.

***

### isDir

```ts
isDir: boolean;
```

Whether it is a directory.

***

### isFile

```ts
isFile: boolean;
```

Whether it is a normal file.

***

### isSymlink

```ts
isSymlink: boolean;
```

Whether it is a symbolic link.
