import { useState } from 'react'

// Define a generic type for the value that can be stored in local storage
type StorageValue<T> = T | null

const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [StorageValue<T>, (value: T) => void] => {
  // Retrieve data from local storage on initial render
  const storedValue = localStorage.getItem(key)
  const initial = storedValue ? (JSON.parse(storedValue) as T) : initialValue

  // State to keep track of the current value
  const [value, setValue] = useState<StorageValue<T>>(initial)

  // Update local storage whenever the value changes
  const setStoredValue = (newValue: T) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
  }

  return [value, setStoredValue]
}

export default useLocalStorage
