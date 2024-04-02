import styles from "./Styles/HomePage.module.css";
import { useNavigate } from "react-router-dom";

const {
  contentContainer,
  welcomeTitle,
  welcomeContainer,
  companyDescription,
  buttonsContainer,
  loginButton,
  signupButton,
  backgroundVideo,
} = styles;

const HomePage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className={welcomeContainer}>
      <video autoPlay muted loop className={backgroundVideo}>
        <source src="/LoginPage.mp4" type="video/mp4" />
      </video>
      <div className={contentContainer}>
        <h1 style={{fontWeight: 'bold'}} className={welcomeTitle}>Welcome to Kisan Vikaas</h1>
        <p style={{marginLeft: '60px', marginRight: '60px', padding: '20px', fontWeight: 'bold'}} className={companyDescription}>
          Kisaan Vikas, meaning "Farmer Progress" in Hindi, is your one-stop
          mobile app for a thriving farm. Diagnose plant diseases early, get
          weather forecasts and alerts, manage crop insurance, learn about
          government schemes, and access educational resources - all in one
          place. Kisaan Vikas works even with low connectivity and offers
          multilingual support to empower every farmer, regardless of location
          or language. Download Kisaan Vikas and take control of your
          agricultural journey!
        </p>
        <div className={buttonsContainer}>
          <button style={{fontWeight: 'bold'}} className={loginButton} onClick={handleLogin}>
            LOGIN
          </button>
          <button style={{fontWeight: 'bold'}} className={signupButton} onClick={handleSignUp}>
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
