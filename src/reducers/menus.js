const menus = (state = {}, action) => {
  let _state = Object.assign({},state);
  switch (action.type) {
    case 'OPEN_MENU':
      _state[action.menuId]= Object.assign(_state[action.menuId]||{}, {open:true, anchorEl:action.anchorEl});
      return _state;
    case 'CLOSE_MENU':
      _state[action.menuId]= Object.assign(_state[action.menuId]||{}, {open:false, anchorEl:null});
      return _state;
    default:
      return state
  }
};

export default menus
