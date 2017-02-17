import React from 'react';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

export function requireAuthentication(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount () {
            this.checkAuth(this.props.isAuthenticated);
        }

        componentWillReceiveProps (nextProps) {
            this.checkAuth(nextProps.isAuthenticated);
        }

        checkAuth (isAuthenticated) {
            if (!isAuthenticated) {
                let redirectAfterLogin = this.props.location.pathname;
                browserHistory.push(`/user/login?next=${redirectAfterLogin}`);
            }
        }

        render () {
            return (
                <div>
                    {this.props.isAuthenticated === true && this.props.role === 1
                        ? <Component {...this.props}/>
                        : null
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => {
      return {
          token: state.user.get("token"),
          userName: state.user.get("userName"),
          isAuthenticated: state.user.get("isAuthenticated"),
          role: state.user.get("role")
      }
    };

    return connect(mapStateToProps)(AuthenticatedComponent);

}
