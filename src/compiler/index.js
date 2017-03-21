import React, { Component } from 'react';
import Container from './Container';

export default class NestingDropTargets extends Component {
  render() {
    return (
      <div className={'layout-row'}>
        <Container />
      </div>
    );
  }
}
