import {setPath, getPath, setExclusiveProp, deleteProp} from '../common/snippets'


const defaultContent = {
  tag: 'div',
  class: 'layout-row',
  style: {width: '500px', height: '200px', backgroundColor: 'yellow'},
  children: [{
    tag: 'div',
    class: 'layout-column',
    style: {width: '200px', height: '100px', backgroundColor: 'blue', margin: '10px'},
    children: [{
      tag: 'div',
      style: {width: '100px', height: '50px', backgroundColor: 'green', margin: '10px'}
    }, {
      tag: 'div',
      style: {width: '100px', height: '50px', backgroundColor: 'green', margin: '10px'}
    }]
  }, {
    tag: 'div',
    style: {width: '200px', height: '100px', backgroundColor: 'blue', margin: '10px'}
  }],
};

function parsePath(path) {
  let pList = [];
  path.forEach((p) => {
    pList.push('children');
    pList.push(p);
  });
  return pList;
}


function insert(content, action) {
  const {path, item, index} = action;
  const pList = parsePath(path);
  let _content = Object.assign({}, content);
  let target = getPath(_content, pList);

  if (target.children) {
    if(!isNaN(index)){
      target.children.splice( index, 0, item);
    } else {
      target.children.push(item)
    }
  } else {
    target.children = [item];
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

function remove(content, action) {
  const {path} = action;
  let pList = parsePath(path);
  let _content = Object.assign({}, content);
  let target = getPath(_content, pList,-2);
  target.children.splice(path[path.length-1], 1);
  return _content
}

function goThroughPath(content, path, level){

}

function modify(action) {
  //
}

function toggleMoreMenu(){}

const content = (state = defaultContent, action) => {
  switch (action.type) {
    case 'INSERT_ITEM':
      return insert(state, action);
    case 'REMOVE_ITEM':
      return remove(state, action);
    default:
      return state
  }
};

export default content
