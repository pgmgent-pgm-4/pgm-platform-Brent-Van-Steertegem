import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context";
import "./auth.css";

const RegisterComponent = () => {
  // const { signInWithEmailAndPassword} = useAuth();  

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheckChange = (e) => {
    setPasswordCheck(e.target.value);
  };

  const register = async () => {
    const fetchData = async () => {
      // const res = await signInWithEmailAndPassword(username, password);
      // return res;
    }
    return await fetchData();
  }
  
  const handleSubmit = async(e) => {
    if (password === passwordCheck) {
      console.log(password, passwordCheck)
      setErrorMessage('');
      const res = await register();
      // if (res.status === 200) {
      //   navigate('/');
      // }
      // else {
      //   switch (res.status) {
      //     case 404:
      //         setErrorMessage('Gebruikersnaam of wachtwoord is onjuist');
      //       break;
      //     default:
      //       break;
      //   }
      // }
    } else {
      setErrorMessage('Wachtwoorden komen niet overeen');
    }
  };

  return (
    <form className="form">
      <p className="error_message">{errorMessage}</p>
      <label htmlFor="username">Gebruikersnaam:</label>
      <input className="form__input" name="username" type="text" placeholder="Gebruikersnaam" onChange={handleUsernameChange}/>
      <label htmlFor="email">Email:</label>
      <input className="form__input" name="email" type="text" placeholder="E-mail" onChange={handleEmailChange}/>
      <label htmlFor="password">Wachtwoord:</label>
      <input className="form__input" name="password" type="password" placeholder="Wachtwoord" onChange={handlePasswordChange}/>
      <label htmlFor="password_check">Bevestig wachtwoord:</label>
      <input className="form__input" name="password_check" type="password" placeholder="Wachtwoord" onChange={handlePasswordCheckChange}/>
      <button className="form__input form__input--button" type="button" onClick={handleSubmit}>Registreer</button>
    </form>
  )
};

export default RegisterComponent;