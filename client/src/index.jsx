import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Auth0ProviderWithHistory from './components/auth/auth0-provider-with-history.jsx';

ReactDOM.render(
  <Router>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('app')
);
