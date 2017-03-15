import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

/* Import Notet component */
/*import Notes from './components/Notes';*/

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
