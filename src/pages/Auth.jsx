import React, { useState, lazy, Suspense } from "react";
const Login = lazy(() => import("./Login/Login"));
const Signup = lazy(() => import("./SignUp/SignUp"));

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); 

  const toggleAuth = () => {
    setIsLogin(!isLogin); 
  };

  return (
    <div className="Lazy">
      <div>
        <h2>
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <Suspense fallback={<p>Loading...</p>}>
          {isLogin ? <Login /> : <Signup />}
        </Suspense>
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={toggleAuth} >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
