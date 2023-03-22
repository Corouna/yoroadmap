import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { StandardInput, StandardButton } from "./../../components";
import { YoroadmapLogo } from "./../../assets/svg";
import styles from "./styles.module.css";

const Login = props => {
    const navigateTo = useNavigate();
    const title = 'Yoroadmap';
    const mainTitle = 'forgot password';
    const subTitle = `Please enter your email below to reset your password`;
    const requestLabel = 'Send Reset Request';
    const cancelLabel = 'Cancel';

    const [email, setEmail] = useState("");

    const backToLogin = () => {
        navigateTo('/signin')
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
                    </div>
                </div>
                <div className={`${styles.form_content_space} ${styles.form_input}`}>
                    <div className={styles.input_email}>
                        <StandardInput placeholder="email" setter={setEmail} />
                    </div>
                </div>
                <div className={`${styles.form_content_space} ${styles.form_button}`}>
                    <div className={styles.sm_button_container}>
						<div className={styles.sm_cancel}>
							<StandardButton label={cancelLabel} color="white" width={140} clickHandler={backToLogin} />
						</div>
						<div className={styles.sm_create}>
							<StandardButton label={requestLabel} color="blue" width={210} clickHandler={() => {}} />
						</div>
					</div>
                </div>
            </div>
        </div>
    );
};

export default Login;