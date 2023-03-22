import { MaleAvatar } from "./../../assets/svg";
import styles from "./styles.module.css";

const UserAvatar = ({ clickHandler }) => {
    return (
        <div className={styles.user_avatar} onClick={clickHandler}>
            <MaleAvatar />
        </div>
    );
}

export default UserAvatar;