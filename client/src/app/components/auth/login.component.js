import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import "./auth.css";

const LoginComponent = () => {
  const { signInWithEmailAndPassword} = useAuth();  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirmationChange = (e) => {
    e.target.value === password ? setPasswordCheck(true) : setPasswordCheck(false);
  };

  const login = () => {
    const fetchData = async () => {
      await signInWithEmailAndPassword(username, password);
    }
    const data = fetchData();
    return data;
  }
  
  const handleSubmit = (e) => {
    if (passwordCheck) {
      const data = login();
      navigate("/");
    }
  };

  return (
    <form className="form">
      <p className="error_message"></p>
      <label htmlFor="username">Username:</label>
      <input className="form__input" name="username" type="text" placeholder="Username" onChange={handleUsernameChange}/>
      <label htmlFor="password">Password:</label>
      <input className="form__input" name="password" type="password" placeholder="Password" onChange={handlePasswordChange}/>
      <label htmlFor="password_confirm">Confirm password:</label>
      <input className="form__input" name="password_confirm" type="password" placeholder="Confirm Password" onChange={handlePasswordConfirmationChange}/>
      <button className="form__input form__input--button" type="button" onClick={handleSubmit}>Login</button>
    </form>
  )
};

export default LoginComponent;