import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import "./auth.css";

const LoginComponent = () => {
  const { signInWithEmailAndPassword} = useAuth();  

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const login = async () => {
    const fetchData = async () => {
      const res = await signInWithEmailAndPassword(username, password);
      return res;
    }
    return await fetchData();
  }
  
  const handleSubmit = async(e) => {
    const res = await login();
    if (res.status === 200) {
      navigate('/');
    }
    else {
      switch (res.status) {
        case 404:
            setErrorMessage('Gebruikersnaam of wachtwoord is onjuist');
          break;
      
        default:
          break;
      }
    }
  };

  return (
    <form className="form">
      <p className="error_message">{errorMessage}</p>
      <label htmlFor="username">Gebruikersnaam:</label>
      <input className="form__input" name="username" type="text" placeholder="Username" onChange={handleUsernameChange}/>
      <label htmlFor="password">Wachtwoord:</label>
      <input className="form__input" name="password" type="password" placeholder="Password" onChange={handlePasswordChange}/>
      <button className="form__input form__input--button" type="button" onClick={handleSubmit}>Login</button>
    </form>
  )
};

export default LoginComponent;