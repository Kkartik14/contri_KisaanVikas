import styles from "./Styles/SignUp.module.css";
import { useNavigate } from 'react-router-dom';

const { contentContainer, welcomeTitle, welcomeContainer, companyDescription, buttonsContainer, loginButton, signupButton, backgroundVideo, formContainer, inputField, submitButton, selectField } = styles;

const SignUp = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login'); 
    };
    const handleSubmit = (event) => {
        event.preventDefault(); 
        navigate('/home');
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
                        <input className={inputField} type="text" placeholder="Username" required />
                        <input className={inputField} type="password" placeholder="Password" required />
                        <button className={submitButton} type="submit">Submit</button>
                    </form>
                </div>
                <div className={buttonsContainer}>
                    <button className={loginButton} onClick={handleLogin}>New User? SIGN UP</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
