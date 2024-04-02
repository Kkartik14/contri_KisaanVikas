import React, { useState } from "react";
import styles from "./Styles/SignUp.module.css";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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

const {
  contentContainer,
  welcomeTitle,
  welcomeContainer,
  companyDescription,
  buttonsContainer,
  loginButton,
  signupButton,
  backgroundVideo,
  formContainer,
  inputField,
  submitButton,
  selectField,
} = styles;

const SignUp = () => {
  const navigate = useNavigate();

  // State for username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const focusArea = formData.get("focusArea");

    const auth = getAuth();
    let uname = username + "@kisaanvikas.com";
    createUserWithEmailAndPassword(auth, uname, password)
      .then((userCredential) => {
        // Signed up
        console.log("signing up now");
        const user = userCredential.user;
        console.log("User signed up!");
        navigate("/login");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });

    console.log(uname);
    console.log(password);

    switch (focusArea) {
      case "fairShare":
        navigate("/fairShare");
        break;
      case "cropInsurance":
        navigate("/cropInsuranceXyz");
        break;
      default:
        navigate("/home");
        break;
    }
  };

  return (
    <div className={welcomeContainer}>
      <video autoPlay muted loop className={backgroundVideo}>
        <source src="/LoginPage.mp4" type="video/mp4" />
      </video>
      <div className={contentContainer}>
        <h1 style={{fontWeight: 'bold'}} className={welcomeTitle}>Welcome to Kisaan Vikas!</h1>
        <p className={companyDescription}>
          HARVESTING EASE, PLANTING PROSPERITY
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
              type="text"
              placeholder="Name"
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
            <select className={selectField} name="focusArea" required>
              <option value="">Select your focus area</option>
              <option value="organic">Organic</option>
              <option value="optimizeFarming">Optimize Farming</option>
              <option value="safeInformedFarming">
                Safe and Informed Farming
              </option>
              <option value="cropInsurance">Crop Insurance</option>
              <option value="fairShare">Fair Share</option>
              <option value="others">Others</option>
            </select>
            <button className={submitButton} type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className={buttonsContainer}>
          <button className={loginButton} onClick={handleLogin}>
            Already Signed Up? LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
