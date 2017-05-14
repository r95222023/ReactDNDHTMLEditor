export const toggleConfigDialog = (path) => {
  return {
    type: 'TOGGLE_CONFIG_DIALOG',
    path
  }
}
export const openConfigDialog = (path) => {
  return {
    type: 'OPEN_CONFIG_DIALOG',
    path
  }
}
export const closeConfigDialog = () => {
  return {
    type: 'CLOSE_CONFIG_DIALOG'
  }
}
