import React, { Component } from 'react';
import './Control.css';

class Control extends Component {
  calculateQuality = (dev, devOut) => {
    const diff = Math.abs(dev - devOut);

    switch (diff) {
      case 0:
      case 1:
      case 2:
        return <i className="material-icons green">check_circle_outline</i>;  
      case 3:
      case 4:
      case 5:
        return <i className="material-icons yellow">error_outline</i>;
      default:
        return <i className="material-icons red">highlight_off</i>;
    }
  }

  render() {
    const xDev = Math.floor(Math.random() * 11);
    const xDevOut = Math.floor(Math.random() * 11);
    const yDev = Math.floor(Math.random() * 11);
    const yDevOut = Math.floor(Math.random() * 11);
    const zDev = Math.floor(Math.random() * 11);
    const zDevOut = Math.floor(Math.random() * 11);
    const diamDev = Math.floor(Math.random() * 11);
    const diamDevOut = Math.floor(Math.random() * 11);

    return (
      <tbody>
        <tr>
          <td>x</td>
          <td>{xDev}</td>
          <td>{xDevOut}</td>
          <td>{this.calculateQuality(xDev, xDevOut)}</td>
        </tr>
        <tr>
          <td>y</td>
          <td>{yDev}</td>
          <td>{yDevOut}</td>
          <td>{this.calculateQuality(yDev, yDevOut)}</td>
        </tr>
        <tr>
          <td>z</td>
          <td>{zDev}</td>
          <td>{zDevOut}</td>
          <td>{this.calculateQuality(zDev, zDevOut)}</td>
        </tr>
        <tr>
          <td>Diameter</td>
          <td>{diamDev}</td>
          <td>{diamDevOut}</td>
          <td>{this.calculateQuality(diamDev, diamDevOut)}</td>
        </tr>
      </tbody>
    );
  }
}

export default Control;