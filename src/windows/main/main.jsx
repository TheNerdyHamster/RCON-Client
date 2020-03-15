import React from 'react';
import Navbar from '../../components/navbar';

export default class App extends React.Component {
  render() {
    return (
      <div
        id="layout"
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Navbar></Navbar>
        <p>Hey</p>
      </div>
    );
  }
}
