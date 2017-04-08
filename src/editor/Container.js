import MuiThemeProvider from '../material-ui/styles/MuiThemeProvider';
import IconMenu from '../material-ui/IconMenu';
import MenuItem from '../material-ui/MenuItem';
import IconButton from '../material-ui/IconButton';
import MoreVertIcon from '../material-ui/svg-icons/navigation/more-vert';

import React, {Component} from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import DraggableBlock from './DraggableBlock';

import SourceList from './SourceList';

import {insert, interchange, remove, modify, onMouseOver} from './methods'

let testContent = {
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


class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content || testContent,
    };
    let dnd = {};
    dnd.insert = insert.bind(this);
    dnd.remove = remove.bind(this);
    dnd.modify = modify.bind(this);
    dnd.interchange = interchange.bind(this);
    dnd.onMouseOver = onMouseOver.bind(this);
    this.dnd = dnd;
  }

  render() {
    return (
    <MuiThemeProvider>
      <div className={'layout-row'}>
        <div className={'flex-20'}>
          <SourceList />
        </div>
        <div className={'flex'}>
          <DraggableBlock content={this.state.content} dnd={this.dnd} path={[]}/>
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}
export default DragDropContext(HTML5Backend)(Container)
