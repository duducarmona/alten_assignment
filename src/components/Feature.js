import React, { Component } from 'react';
import ControlsColumn from './ControlsColumn';
import './Feature.css';

class Feature extends Component {
  getRandomBackgroundColor = () => {
    const colorValue = Math.floor(Math.random() * 3);

    switch (colorValue) {
      case 0:
        return 'green-bg';
      case 1:
        return 'yellow-bg';
      case 2:
        return 'red-bg';
      default:
        break;
    }
  };

  render() {
    const { controlsNumber } = this.props;
    const MAX_CONTROLS = 6;
    const twoColumns = controlsNumber >= MAX_CONTROLS;
    let evenNumberOfControls = false;

    if (twoColumns) {
      if (controlsNumber % 2 === 0) {
        evenNumberOfControls = true;
      }
    }

    console.log('this.props: ', this.props);

    return (
      <div>
        <h2 className={this.getRandomBackgroundColor()}>FEATURE {this.props.index}</h2>
        {
          twoColumns ? 
          (
            <div className='columns'>
              {/* If there are two columns we have to split the controls between the two columns */}
              <ControlsColumn controlsNumber={evenNumberOfControls ? (controlsNumber / 2) : (controlsNumber / 2 + 1)} />
              <ControlsColumn controlsNumber={controlsNumber / 2} />
            </div>
          ) 
          :
          (
            <ControlsColumn controlsNumber={controlsNumber} />
          )
        }
      </div>
    );
  }
}

export default Feature;