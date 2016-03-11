import React, { Component } from 'react';
import { IndexRoute, Route } from 'react-router';
import NavLayout from '../layout/NavLayout.jsx';
import NavBar from '../component/NavBar.jsx';

class DashboardIndex extends Component {
    render () {
        return (
            <div>I use Navbar Layout - Dashboard</div>
        );
    }
}

class DashboardInfo extends Component {
    render () {
        return (
            <div>I use Navbar Layout - Dashboard Info</div>
        );
    }
}

const routes = (
    <Route path="/dashboard" component={NavLayout}>
        <IndexRoute components={{ navbar: NavBar, content: DashboardIndex }} />
        <Route path="info" components={{ navbar: NavBar, content: DashboardInfo }} />
    </Route>
);

export default routes;
