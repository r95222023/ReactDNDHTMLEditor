const configDialog = (state = {open:false}, action) => {
  console.log(action)

  switch (action.type) {
    case 'OPEN_CONFIG_DIALOG':
      return {open:true, path:action.path};
    case 'CLOSE_CONFIG_DIALOG':
      return {open:false};
    case 'TOGGLE_CONFIG_DIALOG':
      return {open:!state.open};
    default:
      return state
  }
};

export default configDialog
