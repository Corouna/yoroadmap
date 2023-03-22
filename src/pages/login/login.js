import { useState } from "react";
import {
  StandardInput,
  StandardButton,
  StandardCheckbox,
} from "./../../components";
import { YoroadmapLogo } from "./../../assets/svg";
import { FcGoogle } from "react-icons/fc";
import { useLogin } from "../../hooks";
import {
  mainTitle,
  title,
  linkTitle,
  rememberLabel,
  formLoginLabel,
  forgotLabel,
  subTitle,
} from "../../utils/Constant";
import styles from "./styles.module.css";

const Login = (props) => {
  const googleLoginLabel = (
    <>
      <FcGoogle style={{ height: 17, width: 17, marginRight: 10 }} />
      Sign in with Google
    </>
  );

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const { loginHandler, snackbarIsVisible, setSnackbarVisibility, snackbarMessage } = useLogin();

    const onLogin = () => {
        loginHandler(email, password);
    }

    const onRemember = () => {
        setRemember(!remember);
    }

    return (
        <div className={styles.login_container}>
            <div className={styles.left_image}></div>
            <div className={styles.right_form}>
                <div className={`${styles.form_content_space} ${styles.form_brand}`}>
                    <div className={styles.brand_logo}>
                        <YoroadmapLogo />
                    </div>
                    <div className={styles.brand_text}>{title}</div>
                </div>
                <div className={`${styles.form_content_space} ${styles.form_title}`}>
                    <div className={styles.title_main}>{mainTitle}</div>
                    <div className={styles.title_sub}>
                        {subTitle}
                        <a className={styles.title_link} href="signup">{linkTitle}</a>
                    </div>
                </div>
                <div className={`${styles.form_content_space} ${styles.form_input}`}>
                    <div className={styles.input_email}>
                        <StandardInput placeholder="email" setter={setEmail} />
                    </div>
                    <div className={styles.input_password}>
                        <StandardInput placeholder="password" setter={setPassword} />
                    </div>
                    <div className={styles.input_forgot}>
                        <a className={styles.forgot_link} href="forgotpassword">{forgotLabel}</a>
                    </div>
                    <div className={styles.input_remember}>
                        <StandardCheckbox label={rememberLabel} tick={remember} setter={onRemember} />
                    </div>
                </div>
                <div className={`${styles.form_content_space} ${styles.form_button}`}>
                    <div className={styles.button_container}>
                        <StandardButton label={formLoginLabel} color="blue" clickHandler={onLogin} />
                    </div>
                    <div className={styles.button_container}>
                        <StandardButton label={googleLoginLabel} color="white" />
                    </div>
                </div>
            </div>
            {/* <Snackbar snackbarIsVisible={snackbarIsVisible} snackbarVisibilitySetter={setSnackbarVisibility} message={snackbarMessage} /> */}
        </div>
    );
};

export default Login;