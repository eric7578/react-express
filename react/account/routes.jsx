import React, { Component } from 'react';
import { Route } from 'react-router';
import SideBarLayout from '../layout/SideBarLayout.jsx';
import SideBar from '../component/SideBar.jsx';

class Profile extends Component {
    render () {
        return (
            <div>I use SideBar Layout - My Profile</div>
        );
    }
}

class Auth extends Component {
    render() {
        return (
            <div>I use SideBar Layout - Authorization</div>
        );
    }
}

const routes = (
    <Route path="/account" component={SideBarLayout}>
        <Route path="profile" components={{ sidebar: SideBar, content: Profile }} />
        <Route path="auth" components={{ sidebar: SideBar, content: Auth }} />
    </Route>
);

export default routes;
