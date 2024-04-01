import { Link } from "react-router-dom";
import styles from "./Styles/HomePage.module.css";

const { mainDiv, content, Login, contentHeading, earthVideo } = styles;

const HomePage = () => {
  return (
    <div className={mainDiv}>
      <div className={content}>
        <h1 className="heading" id={contentHeading}>
          Krishi Unnati <br />
          feyhdwiockfjvnhbfyeru8i09okf j
        </h1>
        <Link to={"/register"}>
          <button className={Login}>Login Now|</button>
        </Link>
      </div>

      <video
        height="300dvh"
        autoPlay
        muted
        loop
        src="/earth.webm"
        className={earthVideo}
      ></video>
    </div>
  );
};

export default HomePage;
