import { useState } from "react";
import "./style.scss";

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const submit = (e) => {
    e.preventDefault();
    console.log("submit >>>>");
    console.log("Username: ", username);
    console.log("Password: ", password);
  };

  return (
    <main data-testid="sing in" className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h2>Sign In</h2>
        <form onSubmit={submit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" onBlur={e => setUsername(e.target.value)} required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password"  onBlur={e => setPassword(e.target.value) } required/>
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
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
