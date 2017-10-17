# memory-web-storage

[![npm version](https://img.shields.io/npm/v/memory-web-storage.svg)](https://www.npmjs.com/package/memory-web-storage)
[![npm](https://img.shields.io/npm/dm/memory-web-storage.svg)](https://www.npmjs.com/package/memory-web-storage)

This is a library providing a singleton object with [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API):
- `getItem`
- `setItem`
- `removeItem`
- `clear`
- `key`
- `length` - read-only property

At the moment it does not emit `storage` event though.

## default export

Mentioned singleton object.

## createStorage(): MemoryStorage

Factory function creating memory storages.

## testStorageSupport(type = 'local'): boolean

Meant to be used in browsers for testing storages support. It simply tries to perform most common operations on the storage object and wraps that with `try/catch` blocks.
