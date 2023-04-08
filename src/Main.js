import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


function Main() {
    return (
        <App />
    );
  }
  
  const root = ReactDOM.createRoot(document.querySelector("#app"));
  root.render(<Main />);
  
  // hot reloading
  if (module.hot) {
    module.hot.accept();
  }