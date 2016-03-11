import React, { Component } from 'react';
import { Link, match } from 'react-router';

export default class HyperLink extends Component {
    componentWillMount () {
        const { to } = this.props;
        const { routes } = this.context;
        const location = this.context.router.createLocation(to);
        match({
            routes,
            location: location.pathname
        }, (er, redirct, props) => {
            this.setState({
                outer: !props
            });
        });
    }

    render () {
        const { to, children } = this.props;
        const { outer } = this.state;
        if (outer) {
            return <a href={to}>{children}</a>;
        } else {
            return <Link {...this.props}>{children}</Link>;
        }
    }
}

HyperLink.contextTypes = {
    routes: React.PropTypes.array.isRequired,
    router: React.PropTypes.object.isRequired
};
