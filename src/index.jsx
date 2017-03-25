
import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  StarterKit,
} from './components/atoms/index';

class App extends Component {
  render() {
    return <StarterKit />;
  }
}

export default App;

render(<App />, window.document.getElementById('app'));
