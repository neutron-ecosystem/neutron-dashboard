import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import Neutron from './components/neutron';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import './index.css';

ReactDOM.render(
  <MuiThemeProvider>
    <Neutron host="http://localhost:9001">
      <App />
    </Neutron>
  </MuiThemeProvider>,
  document.getElementById('root')
);
