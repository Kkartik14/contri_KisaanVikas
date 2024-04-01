import React, { useState } from 'react';
import styles from "./Styles/SignUp.module.css";
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCOlQ-mrBCQMZnMfKONpAw93rabRsENJ2A",
  authDomain: "krishi-unnati-62682.firebaseapp.com",
  projectId: "krishi-unnati-62682",
  storageBucket: "krishi-unnati-62682.appspot.com",
  messagingSenderId: "312570628259",
  appId: "1:312570628259:web:4987e7b4a17facc6f45716",
  measurementId: "G-E27QKB6CYP",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const { contentContainer, welcomeTitle, welcomeContainer, companyDescription, buttonsContainer, loginButton, signupButton, backgroundVideo, formContainer, inputField, submitButton, selectField } = styles;

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        navigate('/signup');
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const auth = getAuth();
          let uname = username + "@kisaanvikas.com";
          const userCredential = await signInWithEmailAndPassword(auth, uname, password);
          
          // Signed up
          const user = userCredential.user;
      
          navigate("/home");
        } catch (error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        }
      };  

    return (
        <div className={welcomeContainer}>
            <video autoPlay muted loop className={backgroundVideo}>
                <source src="/LoginPage.mp4" type="video/mp4" />
            </video>
            <div className={contentContainer}>
                <h1 className={welcomeTitle}>WELCOME TO KRISHI UNNATI</h1>
                <p className={companyDescription}>
                    YOUR AGRO AGRO AGRO AGRO DESCRIPTION OF COMPANY
                </p>

                <div className={formContainer}>
                    <form onSubmit={handleSubmit}>
                        <input
                            className={inputField}
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            className={inputField}
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <br />
                        <button className={submitButton} type="submit">Submit</button>
                    </form>
                </div>
                <div className={buttonsContainer}>
                    <button className={loginButton} onClick={handleSignUp}>New User? SIGN UP</button>
                </div>
            </div>
        </div>
    );
};

export default Login;