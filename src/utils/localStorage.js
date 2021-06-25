// TODO: Better error handling
const errorHandler = (err) => console.error(err)

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("state")
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return errorHandler(err)
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    return localStorage.setItem("state", serializedState)
  } catch (err) {
    return errorHandler(err)
  }
}
