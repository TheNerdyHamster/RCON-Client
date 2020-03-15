import React from 'react';
import Navbar from '../../components/navbar/navbar';

export default class App extends React.Component {
  render() {
    return (
      <div className="Layout">
        <Navbar />
        <h2>Welcome to React</h2>
      </div>
    );
  }
}
