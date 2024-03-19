import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import connect, { singInByRememberMe } from "./loginRequest";
import {reset} from "../../assets/redux/reducers/authSlice";
import SvgExclamation from "../../assets/images/svg/circle-exclamation-solid.jsx";
import "./style.scss";
import { Navigate} from "react-router-dom";


function LoginPage() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); //Charge isAuthenticated from the store
  const isRemembered = document.cookie.includes("token"); //Check if the token is in the cookie
  const dispatch = useDispatch(); //Dispatch the action to the store
  const [username, setUsername] = useState(""); //Set the state of the username
  const [password, setPassword] = useState(""); //Set the state of the password
  const [isChecked, setIsChecked] = useState(false); //Set the state of the checkbox Remember me

  
  //If the user is not authenticated and is remembered, then dispatch the action to sign in by remember me
  useEffect(() => {
    if (!isAuthenticated & isRemembered) {
      dispatch(singInByRememberMe());//
    } 
  }, []);



  const feedback = useSelector((state) => state.auth.error); //Charge feedback from the store if there is an error
  
  //Dispatch the action to sign in
  const submit = (e) => {
    e.preventDefault();
    dispatch(connect({ username, password, isChecked }));
  };

  //Dispatch the action to reset the feedback
  const toggleReset = () => {
    dispatch(reset());
  };
  
  //If the user is authenticated and there is no feedback, then redirect to the account page
  if (isAuthenticated && !feedback) {
   return < Navigate to="/profile" />
  }


  return (
    <main data-testid="sing in" className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h2>Sign In</h2>
        {feedback && (
          <p className="feedback error">
            <SvgExclamation /> {feedback}
          </p>
        )}
        <form onSubmit={submit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onBlur={(e) => setUsername(e.target.value)}
              onChange={ toggleReset}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onBlur={(e) => setPassword(e.target.value)}
              onChange={ toggleReset}
              required
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default LoginPage;
