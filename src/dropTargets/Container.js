import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import Source from './Source';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content||[],
    };

    this.handleContentChange = this.handleContentChange.bind(this);
  }
  handleContentChange(event){
    console.log(this.state.content)
    let key =this.state.content.length;
    this.state.content.push(<div key={key} style={{width:'100px',height:'100px', backgroundColor:'grey'}}></div>);
    this.setState({content:this.state.content});
  }

  render() {
    // let test = [];
    // for(let i=0;i<10;i++) {
    //   test.push(<div key={i} style={{width:'100px',height:'100px', backgroundColor:'grey'}}></div>);
    // }
    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both', margin: '-1rem' }}>
          <Dustbin greedy>
            <Dustbin greedy>
              <Dustbin handleDrop={this.handleContentChange} greedy />
            </Dustbin>
          </Dustbin>

          <Dustbin>
            <Dustbin>
              <Dustbin />
            </Dustbin>
          </Dustbin>
          {this.state.content}
        </div>

        <div style={{ overflow: 'hidden', clear: 'both', marginTop: '1.5rem' }}>
          <Box />
          <Source />
        </div>
      </div>
    );
  }
}
export default DragDropContext(HTML5Backend)(Container)
