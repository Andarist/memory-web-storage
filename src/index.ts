const testKey = '__test_storage_support__'
const testValue = '@@test'

export const testStorageSupport = (
  type: 'local' | 'session' = 'local',
): boolean => {
  try {
    const storage =
      type === 'session' ? window.sessionStorage : window.localStorage
    storage.setItem(testKey, testValue)

    if (storage.getItem(testKey) !== testValue) {
      return false
    }

    storage.removeItem(testKey)
    return true
  } catch (err) {
    return false
  }
}

export const createStorage = (): Pick<
  Storage,
  'getItem' | 'setItem' | 'removeItem' | 'clear'
> => {
  let memoryStorage = Object.create(null)

  return {
    getItem(key: string) {
      const value = memoryStorage[key]
      return typeof value === 'string' ? value : null
    },
    setItem(key: string, value: string) {
      memoryStorage[key] = value
    },
    removeItem(key: string) {
      delete memoryStorage[key]
    },
    clear() {
      memoryStorage = Object.create(null)
    },
  }
}

export default createStorage()
