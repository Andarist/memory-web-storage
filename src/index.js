const testKey = '__test_storage_support__'

export const testStorageSupport = (type = 'local') => {
  try {
    const storage = window[`${type}Storage`]
    storage.setItem(testKey, true)
    storage.getItem(testKey)
    storage.removeItem(testKey)
    return true
  } catch (err) {
    return false
  }
}

export const createStorage = () => {
  const memoryStorage = Object.defineProperties(
    {},
    {
      getItem: {
        value: key => memoryStorage[key] || null,
      },
      setItem: {
        value: (key, value) => {
          try {
            memoryStorage[key] = String(value)
          } catch (err) {}
        },
      },
      removeItem: {
        value: key => {
          delete memoryStorage[key]
        },
      },
      clear: {
        value: () => {
          Object.keys(memoryStorage).forEach(memoryStorage.removeItem)
        },
      },
      key: {
        value: index => Object.keys(memoryStorage)[index] || null,
      },
      length: {
        get() {
          return Object.keys(memoryStorage).length
        },
      },
    },
  )
  return memoryStorage
}

export default createStorage()
