const configDialog = (state = {open:false}, action) => {
  switch (action.type) {
    case 'OPEN_CONFIG_DIALOG':
      return {open:true};
    case 'CLOSE_CONFIG_DIALOG':
      return {open:false};
    case 'TOGGLE_CONFIG_DIALOG':
      return {open:!state.open};
    default:
      return state
  }
};

export default configDialog
