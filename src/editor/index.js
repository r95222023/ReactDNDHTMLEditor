import React, { Component } from 'react';
import Container from './Container';
import Source from './Source';

export default class NestingDropTargets extends Component {
  render() {
    return (
      <div className={'layout-row'}>
        {/*<Source />*/}
        <Container />
      </div>
    );
  }
}
