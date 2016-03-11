import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavLayout extends Component {
    getChildContext () {
        return { routes: this.props.routes };
    }

    render () {
        return (
            <div className="app nav-layout">
                <div className="navbar">{this.props.navbar}</div>
                <div className="content">{this.props.content}</div>
            </div>
        );
    }
}

NavLayout.childContextTypes = {
    routes: React.PropTypes.array.isRequired
};
