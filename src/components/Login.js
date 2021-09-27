import React, { useState } from "react";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      window.alert(`Welcome back!  ${result.user.email} !!`);
      history.push("/");
    } catch (err) {
      window.alert(`Password should be 6 charecters long :(`);
    }
  };
  return (
    <>
      <h1>Login Here !!</h1>
      <div className="login">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <input
            className="email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="pass"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="btn-login">
            LOGIN
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
