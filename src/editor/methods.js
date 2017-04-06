import { setPath, getPath, setExclusiveProp, deleteProp} from './basics'

export function parsePath(path) {
  let pList =[];
  path.forEach((p)=>{
    pList.push('children');
    pList.push(p);
  });
  return pList;
}


export function insert(path, index, item, isTemp) {
  let pList = parsePath(path);
  let target = getPath(this.state.content, pList);

  if(target.children){
    target.children.splice(index,0,item);
  }
  console.log(this.state);
  // target.forEach((_item, _index) => {
  //   if (_item.isTemp) {
  //     target.splice(_index, 1);
  //   }
  // });
  // if (isTemp) {
  //   item.isTemp = true;
  // } else {
  //   delete item.isTemp;
  // }
  // target.splice(index, 0, item);
  this.setState({content: this.state.content});
}

export function interchange(path, dragIndex, hoverIndex) {
  let pList = parsePath(path);
  let target = getPath(this.state.content, pList);
  const item = target[dragIndex];
  target.splice(dragIndex, 1);
  target.splice(hoverIndex, 0, item);
}

export function remove(path, index) {
  let pList = parsePath(path);
  let target = getPath(this.state.content, pList);
  target.splice(index, 1);
  this.setState({content: this.state.content});
}

export function modify(path, value) {
  let pList = parsePath(path);
  console.log(pList)
  // setPath(this.state.content, pList, value);
  // this.setState({content: this.state.content});
}

export function onMouseOver(path){
  if(path==='root'){
    delete this.state.content.hover;
  } else {
    setExclusiveProp('hover', this.state.content, parsePath(path), true);
  }
  this.setState({content: this.state.content});
}
