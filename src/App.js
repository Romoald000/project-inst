import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from './redux/store';
import RouterPages from './router/router';


const App = () => {
  return (
    <Provider store={store}>
      <Router >
        <RouterPages /> 
      </Router>
    </Provider>
  );
};

export default App;
