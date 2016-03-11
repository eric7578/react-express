import React, { Component } from 'react';
import HyperLink from './HyperLink.jsx';

export default class SideBar extends Component {
    render () {
        return (
            <div className="side-bar">
                <a href="/auth/logout">登出</a>
                <h3>Dashboard</h3>
                <ul>
                    <li><HyperLink to="/dashboard">Dashboard</HyperLink></li>
                    <li><HyperLink to="/dashboard/info">Dashboard Info</HyperLink></li>
                </ul>
                <h3>Account</h3>
                <ul>
                    <li><HyperLink to="/account/profile">Profile</HyperLink></li>
                    <li><HyperLink to="/account/auth">Authorization</HyperLink></li>
                </ul>
            </div>
        );
    }
}
