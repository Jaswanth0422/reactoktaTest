import React from 'react';
import { Redirect } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import OktaSignInWidget from './components/OktaSignInWidget';
import SignUp from "./components/SignUp";

function Login() {
    const { oktaAuth, authState } = useOktaAuth();

    const onSuccess = function(res) {
        if (res.status === 'SUCCESS') {
            console.log('success signin')
            return oktaAuth.signInWithRedirect({
                sessionToken: res.session.token
            });
        }
    }

    const onError = function(err) {
        console.log('error logging in', err);
    }

    return authState?.isAuthenticated ?
        <SignUp/> :
        <OktaSignInWidget
            baseUrl='https://dev-70664026.okta.com/'
            onSuccess={onSuccess}
            onError={onError}/>;
}

export default Login;