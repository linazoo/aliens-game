import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCanvasPosition } from './utils/formulas';
import Canvas from './components/Canvas';

class App extends Component {
  componentDidMount() {
    setInterval(() => {
      this.props.moveObjects(this.canvasMousePosition);
    }, 10);

    window.onresize = () => {
      const cnv = document.getElementById('aliens-game-canvas');
      cnv.style.width = `${window.innerWidth}px`;
      cnv.style.height = `${window.innerHeight}px`;
    };
    window.onresize();
  }

  trackMouse(event) {
    this.canvasMousePosition = getCanvasPosition(event);
  }

  render() {
    return (
      <Canvas 
        angle={ this.props.angle }
        trackMouse={event => (this.trackMouse(event))}
      />
    );
  }
}

App.PropTypes = {
  angle: PropTypes.number.isRequired,
  message: PropTypes.func.isRequired,
};
export default App;
