import {setPath, getPath, setExclusiveProp, deleteProp} from '../common/snippets'
import {defaults} from '../common/blockTypes'

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
function insert(content, action) {
  const {path, index, itemType} = action;
  const itemStr = JSON.stringify(defaults[itemType]); //make a clone
  const item = JSON.parse(itemStr);

  let _content = Object.assign({}, content);
  let target = getPath(_content, path);
  if (target.children) {
    if(!isNaN(index)){
      target.children.splice( index, 0, item);
    } else {
      target.children.push(item)

    }
  } else {
    target.children = [item];
  }
  console.log(_content)
  return _content
}

function interchange(action) {
  const {content, path, hoverIndex, dragIndex} = action;
  let _content = Object.assign({}, content);
  let target = getPath(_content, path);
  const item = target[dragIndex];
  target.splice(dragIndex, 1);
  target.splice(hoverIndex, 0, item);
}

function remove(content, action) {
  const {path} = action;
  let _content = Object.assign({}, content);
  let target = getPath(_content, path,-2);
  target.children.splice(path[path.length-1], 1);
  return _content
}

function goThroughPath(content, path, level){

}

function modify(action) {
  //
}


function importContent(content){
  const contentStr = JSON.stringify(content);
  return JSON.parse(contentStr);
}

const content = (content = defaultContent, action) => {
  switch (action.type) {
    case 'INSERT_ITEM':
      return insert(content, action);
    case 'REMOVE_ITEM':
      return remove(content, action);
    case 'IMPORT':
      console.log( importContent(action.content))
      return importContent(action.content);
    default:
      return content
  }
};

export default content
