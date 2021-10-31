import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import img from '../../../../images/login/login.jpg'


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
        <div >
            <div className="container">
                <div className="row m-5 d-flex justify-content-center  align-items-center">
                    <div className="col-lg-6">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center border h-100 mx-auto p-5">
                            <h4 className="mb-4">PLEASE LOG IN</h4>
                            <button onClick={handleGoogleLogin} className="btn btn-outline-success w-100"> <i className="fab fa-google"></i> Google login</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;