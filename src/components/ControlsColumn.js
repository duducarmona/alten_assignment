import React, { Component } from 'react';
import Control from './Control';
import './ControlsColumn.css';

class ControlsColumn extends Component {
  renderControls = () => {
    const { controlsNumber } = this.props;
    const arrayControls = Array(controlsNumber).fill(controlsNumber);

    return (
      <table>
        <thead>
          <tr>
            <th>
              Control
            </th>
            <th>
              Dev
            </th>
            <th>
              Dev Out Tot
            </th>
          </tr>
        </thead>
        {arrayControls.map((control, index) => {
          return (
            <Control key={index} />
          );
        })}
      </table>
    );
  }
  
  render() {
    return this.renderControls();
  }
}

export default ControlsColumn;