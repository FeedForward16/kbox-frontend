import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
export const Auth = (props) => {
   const isSignIn = props.isSignIn; 
  return (
    <>
      {isSignIn ? <SignUp /> : <Login />}
    </>
  );
}
export default Auth;
