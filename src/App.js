import './App.css';

import OktaSignInWidget from "./components/SigIn";
import SignUp from "./components/SignUp";
import {LoginCallback, SecureRoute, Security} from '@okta/okta-react';
import {OktaAuth, toRelativeUrl} from '@okta/okta-auth-js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from "./Login";


function App() {
    const oktaAuth = new OktaAuth({
        issuer: 'https://dev-70664026.okta.com/oauth2/default',
        clientId: '0oagce4608NKi14rA5d7',
        redirectUri: window.location.origin + '/callback'
    });
    const router = createBrowserRouter([{
        path: '/', element: <OktaSignInWidget/>,
    }, {
        path: '/signup', element: <SignUp/>,
    },{
        path:'/login',element:<Login/>
    }]);
    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        window.location.replace(originalUri);
    };
    return <>
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
            <RouterProvider router={router}/>

        </Security>
    </>
    ;
}


export default App;
