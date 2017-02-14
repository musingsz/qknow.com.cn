import React from 'react';
import {connect} from 'react-redux';
import {pushState} from 'redux-router';

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount () {
            this.checkAuth(this.props.user.isAuthenticated);
        }

        componentWillReceiveProps (nextProps) {
            this.checkAuth(nextProps.user.isAuthenticated);
        }

        checkAuth (isAuthenticated) {
            if (!isAuthenticated) {
                let redirectAfterLogin = this.props.user.location.pathname;
                this.props
                    .dispatch(pushState(null, `/login?next=${redirectAfterLogin}`));
            }
        }

        render () {
            return (
                <div>
                    {this.props.user.isAuthenticated === true
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => ({
        token: state.auth.token,
        userName: state.auth.userName,
        isAuthenticated: state.auth.isAuthenticated
    });

    return connect(mapStateToProps)(AuthenticatedComponent);

}
