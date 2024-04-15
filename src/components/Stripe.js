import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51P5mgOSEjf2hwZOaJNjvUC4lt3WterU6Xr3ppLyXxDpe5hDp5sPnXjnuVW4e8EX0AvOvzPEPZe02DkY1YZ1otuNx00C5rxOjRz');

export default function Stripe() {
    const options = {
        mode: 'payment',
        amount: 1099,
        currency: 'usd',
        // Fully customizable with appearance API.
        appearance: {
            /*...*/
        },
    };
    // const options = {
    //     // passing the client secret obtained from the Stripe Dashboard
    //     clientSecret: 'sk_test_51P5mgOSEjf2hwZOa7E9YgattubQcmLx9y9isidYPnPDVv1SgBSU38doHFJSX100SQiInkDEGR7guOp2SkLSuK04W00eQFQ4Ew4',
    // };

    return (
        <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
        </Elements>
    );
};