import './App.css';

import OktaSignInWidget from "./components/SigIn";
import SignUp from "./components/SignUp";
import {LoginCallback, SecureRoute, Security} from '@okta/okta-react';
import {OktaAuth, toRelativeUrl} from '@okta/okta-auth-js';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Login from "./Login";
import Payment from "./components/payment";
import Stripe from "./components/Stripe";


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
    },{
        path:'/payment',element:<Payment/>
    },{
        path:'/stripe',element:<Stripe/>
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
