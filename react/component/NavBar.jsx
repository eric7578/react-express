import React, { Component } from 'react';
import HyperLink from './HyperLink.jsx';

export default class NavBar extends Component {
    render () {
        const style = { display: 'inline-block', marginLeft: '10px' };

        return (
            <div className="navbar">
                <h3>NavBar</h3>
                <ul>
                    <li style={style}><HyperLink to="/dashboard">Dashboard</HyperLink></li>
                    <li style={style}><HyperLink to="/dashboard/info">Dashboard Info</HyperLink></li>
                    <li style={style}><HyperLink to="/account/profile">Profile</HyperLink></li>
                    <li style={style}><HyperLink to="/account/auth">Authorization</HyperLink></li>
                </ul>
            </div>
        );
    }
}
