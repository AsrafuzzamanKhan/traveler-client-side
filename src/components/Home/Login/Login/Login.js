import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle, setIsLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
            .finally(() => setIsLoading(false));

    }

    return (
        <div>
            <button onClick={handleGoogleLogin}>Google login</button>
        </div>
    );
};

export default Login;