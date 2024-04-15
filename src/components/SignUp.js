import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError]= useState('');
    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            // Make a POST request to Okta's user registration API
            const response = await axios.post(
                'https://dev-70664026.okta.com/api/v1/users?activate=true',
                {
                    "profile": {
                        "firstName": firstName,
                        "lastName": lastName,
                        "email": email,
                        "login": email
                    },
                    "credentials": {
                        "password" : { "value": password },
                        // "recovery_question": {
                        //     "question": "Who's a major player in the cowboy scene?",
                        //     "answer": "Annie Oakley"
                        // }
                    }
                },
                {
                    headers: {
                        Authorization: 'SSWS 00ivk_oP7drYuhEcMVmYezwGDxnn8FJC3VyfESwuXV',
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('User registration successful:', response.data);
            // Optionally redirect user or perform other actions upon successful registration
        } catch (error) {
            console.error('User registration error:', error);
            // Handle registration error
            setError(error.response.data.errorCauses[0].errorSummary)
        }
    };

    return (
    <>
        <div>
        <div className='signup-container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                /> <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className='password-error'>{error}</div>
                <button type="submit">Sign Up</button>
            </form>
        </div>
        </div>
        </>
    );
};

export default SignUp;
