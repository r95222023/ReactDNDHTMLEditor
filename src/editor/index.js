import React, { Component } from 'react';
import Container from './containers/_Container';

export default class Editor extends Component {
  render() {
    return (
      <div className={'layout-row'}>
        {/*<Source />*/}
        <Container />
      </div>
    );
  }
}
