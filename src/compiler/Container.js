import React, {Component} from 'react';
import Block from './Block';

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

export default class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content || testContent,
    };
  }


  render() {
    // let test = [];
    // for(let i=0;i<10;i++) {
    //   test.push(<div key={i} style={{width:'100px',height:'100px', backgroundColor:'grey'}}></div>);
    // }
    return (
      <Block content={this.state.content} path={[]} />
    );
  }
}
