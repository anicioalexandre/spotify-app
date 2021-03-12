export const getLocalStorage = (key = 'last_results') =>
  JSON.parse(localStorage.getItem(key)) || []

export const setLocalStorage = (value, key = 'last_results') =>
  localStorage.setItem(key, JSON.stringify(value))

export const clearLocalStorage = (key = 'last_results') =>
  localStorage.removeItem(key)

export const setSearchedResults = (objectClicked) => {
  const currentStorage = [...getLocalStorage()]
  const isIdPresent = currentStorage.some((obj) => {
    if (obj.trackId) return obj.trackId === objectClicked.trackId
    else if (obj.albumId) return obj.albumId === objectClicked.albumId
  })
  if (!isIdPresent) currentStorage.unshift(objectClicked)
  if (currentStorage.length === 7) currentStorage.pop()

  setLocalStorage(currentStorage)
}
