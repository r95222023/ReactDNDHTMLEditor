import {setPath, getPath, setExclusiveProp, deleteProp} from '../common/snippets'

function parsePath(path) {
  let pList = [];
  path.forEach((p) => {
    pList.push('children');
    pList.push(p);
  });
  return pList;
}


function insert(action) {
  const {content, path, item, index} = action;
  const pList = parsePath(path);
  let _content = Object.assign({}, content);
  let target = getPath(_content, pList);

  if (target.children) {
    target.children.splice(index, 0, item);
  }
  return _content
}

function interchange(action) {
  const {content, path, hoverIndex, dragIndex} = action;
  let _content = Object.assign({}, content);
  let pList = parsePath(path);
  let target = getPath(_content, pList);
  const item = target[dragIndex];
  target.splice(dragIndex, 1);
  target.splice(hoverIndex, 0, item);
}

function remove(action) {
  const {content, path, index} = action;
  let pList = parsePath(path);
  let _content = Object.assign({}, content);
  let target = getPath(_content, pList);
  target.splice(index, 1);
  return _content
}

function modify(action) {
  //
}

function toggleMoreMenu(){}

const editor = (state = {content: {tag: 'div'}}, action) => {
  switch (action.type) {
    case 'INSERT_ITEM':
      return insert(action);
    case 'REMOVE_ITEM':
      return remove(action);
    default:
      return state
  }
};

export default editor
