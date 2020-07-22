import React, { Component } from 'react';
import Feature from './Feature';
import './Part.css';
import Grid from '@material-ui/core/Grid';

class Part extends Component {
  componentDidMount() {
    setInterval(() => {
      this.forceUpdate();
    }, 10000);
  }

  render() {
    return (
      <div>
        <h1>Part A</h1>
        <div className='features'>
          <Grid container spacing={1}>
            <Grid item>
              <Feature controlsNumber={6} index={1} />
            </Grid>
            <Grid
              className='wrapper'
              container
              item
              direction="column"
              spacing={1}
            >
              <Grid item>
                <Feature controlsNumber={1} index={2} />
              </Grid>
              <Grid item>
                <Feature controlsNumber={1} index={3} />
              </Grid>
            </Grid>
            <Grid
              className='wrapper'
              container
              item
              direction="column"
              spacing={1}
            >
              <Grid item>
                <Feature controlsNumber={1} index={4} />
              </Grid>
              <Grid item>
                <Feature controlsNumber={1} index={5} />
              </Grid>
            </Grid>
            <Grid item>
              <Feature controlsNumber={3} index={6} />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Part;