import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Block from './Block';

function parsePath(path) {
  let pList =[];
  path.forEach((p)=>{
    pList.push('children');
    pList.push(p);
  });
  return pList;
}

function setPath(obj, pList, value) {
  let schema = obj;  // a moving reference to internal objects within obj
  let len = pList.length;
  for (let i = 0; i < len - 1; i++) {
    let elem = pList[i];
    if (!schema[elem]) schema[elem] = {};
    schema = schema[elem];
  }

  schema[pList[len - 1]] = value;
}

function getPath(obj, pList) {
  let schema = obj;  // a moving reference to internal objects within obj
  let len = pList.length;
  for (let i = 0; i < len - 1; i++) {
    let elem = pList[i];
    if (!schema[elem]) return null;
    schema = schema[elem];
  }

  return schema[pList[len - 1]];
}

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content || [],
    };
    let dnd = {};
    dnd.insert = this.insert.bind(this);
    dnd.remove = this.remove.bind(this);
    dnd.modify = this.modify.bind(this);
    dnd.interchange = this.interchange.bind(this);
    this.dnd = dnd;
  }

  insert(path, index, item, isTemp) {
    let pList = parsePath(path);
    let target = getPath(this.state.content, pList);
    target.forEach((_item, _index) => {
      if (_item.isTemp) {
        target.splice(_index, 1);
      }
    });
    if (isTemp) {
      item.isTemp = true;
    } else {
      delete item.isTemp;
    }
    target.splice(index, 0, item);
    this.setState({content: this.state.content});
  }

  interchange(path, dragIndex, hoverIndex) {
    let pList = parsePath(path);
    let target = getPath(this.state.content, pList);
    const item = target[dragIndex];
    target.splice(dragIndex, 1);
    target.splice(hoverIndex, 0, item);
  }

  remove(path, index) {
    let pList = parsePath(path);
    let target = getPath(this.state.content, pList);
    target.splice(index, 1);
    this.setState({content: this.state.content});
  }

  modify(path, value) {
    let pList = parsePath(path);
    setPath(this.state.content, pList, value);
    this.setState({content: this.state.content});
  }

  render() {
    // let test = [];
    // for(let i=0;i<10;i++) {
    //   test.push(<div key={i} style={{width:'100px',height:'100px', backgroundColor:'grey'}}></div>);
    // }
    return (
      <Block content={this.state.content} dnd={this.dnd} path={[]} />
    );
  }
}
export default DragDropContext(HTML5Backend)(Container)
