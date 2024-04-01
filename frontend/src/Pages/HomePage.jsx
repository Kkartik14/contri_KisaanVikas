import styles from "./Styles/HomePage.module.css";
import { useNavigate } from 'react-router-dom';

const { contentContainer, welcomeTitle, welcomeContainer, companyDescription, buttonsContainer,loginButton, signupButton,backgroundVideo} = styles;

const HomePage = () => {
    const navigate = useNavigate();
       const handleLogin = () => {
       navigate('/login'); 
    };
   
    const handleSignUp = () => {
       navigate('/signup');
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
           <div className={buttonsContainer}>
             <button className={loginButton} onClick={handleLogin}>LOGIN</button>
             <button className={signupButton} onClick={handleSignUp}>SIGN UP</button>
           </div>
         </div>
       </div>
    );
   };
   

export default HomePage;