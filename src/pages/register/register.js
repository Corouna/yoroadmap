import { useState } from "react";
import {
  StandardInput,
  StandardButton,
  StandardCheckbox,
} from "./../../components";
import { YoroadmapLogo } from "./../../assets/svg";
import { FcGoogle } from "react-icons/fc";
import styles from "./styles.module.css";
import { useRegister } from "../../hooks/useRegister";

const Register = props => {
  const title = 'Yoroadmap';
  const mainTitle = 'register';
  const subTitle = `Already a registered user?`;
  const linkTitle = 'Sign in';
  const agreementLabel = <>I have read the <a className={styles.title_link}>Terms of Service</a> and<a className={styles.title_link}>Privacy policy</a></>;
  const formLoginLabel = 'Register Account';
  const googleLoginLabel = <><FcGoogle style={{ height: 17, width: 17, marginRight: 10 }}/>Register with Google</>;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const { registerHandler } = useRegister();

  const onRegister = () => {
      registerHandler(email, password);
  }

  const onAgree = () => {
      setAgree(!agree);
  }

  return (
      <div className={styles.register_container}>
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
                      <a className={styles.title_link} href="signin">{linkTitle}</a>
                  </div>
              </div>
              <div className={`${styles.form_content_space} ${styles.form_input}`}>
                  <div className={styles.input_email}>
                      <StandardInput placeholder="email" setter={setEmail} />
                  </div>
                  <div className={styles.input_password}>
                      <StandardInput placeholder="password" setter={setPassword} />
                  </div>
                  <div className={styles.input_remember}>
                      <StandardCheckbox label={agreementLabel} tick={agree} setter={onAgree} />
                  </div>
              </div>
              <div className={`${styles.form_content_space} ${styles.form_button}`}>
                  <div className={styles.button_container}>
                      <StandardButton label={formLoginLabel} color="blue" clickHandler={onRegister} />
                  </div>
                  <div className={styles.button_container}>
                      <StandardButton label={googleLoginLabel} color="white" />
                  </div>
              </div>
          </div>
      </div>
  );
};

export default Register;