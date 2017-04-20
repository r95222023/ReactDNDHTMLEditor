const menus = (state = {}, action) => {
  let _state = Object.assign({},state);
  switch (action.type) {
    case 'OPEN_MENU':
      if(_state[action.name]) {
        _state[action.name].open=true;
      } else {
        _state[action.name]={open:true};
      }
      return _state;
    case 'CLOSE_MENU':
      if(_state[action.name]) {
        _state[action.name].open=false;
      } else {
        _state[action.name]={open:false};
      }
      return _state;
    case 'TOGGLE_MENU':
      if(_state[action.name]) {
        _state[action.name].open=!_state[action.name].open;
      } else {
        _state[action.name]={open:true};
      }
      return _state;
    default:
      return state
  }
};

export default menus
