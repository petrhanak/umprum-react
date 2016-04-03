import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main';
import normalize from 'normalize.css';

//Needed for onTouchTap
//Can go away when react 1.0 release
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import {muiTheme} from './config';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);

    this.state = {
      open: false
    };
  }

  handleRequestClose() {
    this.setState({
      open: false
    });
  }

  handleTouchTap() {
    this.setState({
      open: true
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Main/>
      </MuiThemeProvider>
    );
  }
}

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(<App />, document.getElementById('app'));
