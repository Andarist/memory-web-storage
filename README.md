# memory-web-storage

[![npm version](https://img.shields.io/npm/v/memory-web-storage.svg)](https://www.npmjs.com/package/memory-web-storage)
[![npm](https://img.shields.io/npm/dm/memory-web-storage.svg)](https://www.npmjs.com/package/memory-web-storage)

This is a library providing a singleton object with API similar to [Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API):

- `getItem`
- `setItem`
- `removeItem`
- `clear`

## default export

Mentioned singleton object.

## createStorage(): MemoryStorage

Factory function creating memory storages.

## testStorageSupport(type = 'local'): boolean

Meant to be used in browsers for testing storages support. It simply tries to perform most common operations on the storage object and wraps that with `try/catch` blocks.
