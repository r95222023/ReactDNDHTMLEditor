import React, { Component, PropTypes } from 'react';
import Source from '../draggables/Source'

const defaultDiv ={
  minWidth:'300px',
  minHeight:'100px',
  padding:'10px'
};

const sources = [{
  text: 'row',
  tag: 'div',
  class: 'defaultDiv layout-row',
  style: {minWidth:'400px', minHeight:'200px', margin:'10px'}
}, {
  text: 'column',
  tag: 'div',
  class: 'defaultDiv layout-column',
  style: {minWidth:'200px', minHeight:'400px'}
}, {
  text: 'h1',
  tag:'h1',
}, {
  text:'image',
  tag: 'img'
}];


export default class SourceList extends Component {

  render() {

    return (
      <div>
        {sources.map((card, i) => (
          <Source
            key={i}
            index={i}
            tag={card.tag}
            text={card.text}
            class={card.class||''}
            style={card.style}
          />
        ))}
      </div>
    );
  }
}
