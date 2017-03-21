import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Block from './Block';
import DraggableBlock from './DraggableBlock';

import SourceList from './SourceList';

import { setPath, getPath} from './services'

let testContent = {
  tag:'div',
  class:'layout-row',
  style: {width:'500px', height:'200px', backgroundColor:'yellow'},
  children:[{
    tag:'div',
    class:'layout-column',
    style:{width:'200px', height:'100px', backgroundColor:'blue',margin:'10px'},
    children:[{
      tag:'div',
      style:{width:'100px', height:'50px', backgroundColor:'green',margin:'10px'}
    },{
      tag:'div',
      style:{width:'100px', height:'50px', backgroundColor:'green',margin:'10px'}
    }]
  },{
    tag:'div',
    style:{width:'200px', height:'100px', backgroundColor:'blue', margin:'10px'}
  }],
};

function parsePath(path) {
  let pList =[];
  path.forEach((p)=>{
    pList.push('children');
    pList.push(p);
  });
  return pList;
}

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content || testContent,
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
    console.log(pList)
    // setPath(this.state.content, pList, value);
    // this.setState({content: this.state.content});
  }

  render() {
    // let test = [];
    // for(let i=0;i<10;i++) {
    //   test.push(<div key={i} style={{width:'100px',height:'100px', backgroundColor:'grey'}}></div>);
    // }
    return (
    <div className={'layout-row'}>
      <div className={'flex-20'}>
        <SourceList />
      </div>
      <div className={'flex'}>
        <DraggableBlock content={this.state.content} dnd={this.dnd} path={[]} />
      </div>
    </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(Container)
