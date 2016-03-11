import React from 'react';
import { render } from 'react-dom';
import { match, browserHistory, Router } from 'react-router';
import routes from './routes.jsx';

match({ history: browserHistory, routes }, (error, redirectLocation, renderProps) => {
    render(<Router {...renderProps} />, document.getElementById('react-container'));
});
