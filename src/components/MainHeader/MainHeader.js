import { useState } from "react";
import { UserAvatar, StandardPopup, StandardSpace } from "./../";
import { YoroadmapLogo, MaleAvatar, CloseLogo } from "./../../assets/svg";
import styles from  "./styles.module.css";

const MainHeader = props => {
    // For popup under user avatar
    const [pop, setPop] = useState(0);

    const openHandler = id => {
        setPop(id);
    }
    
    const closeHandler = () => {
        setPop(0);
    }

    const userContent = () => {
        return (
          <div className={styles.menu_container}>
            <div className={styles.menu_close}>
                <CloseLogo clickHandler={closeHandler} />
            </div>
            <div className={styles.menu_avatar}>
                <MaleAvatar />
                <div className={styles.menu_avatar_name}>John Smith</div>
                <div className={styles.menu_avatar_desc}>Super Developer!</div>
            </div>
            <div className={styles.menu_list}>
                <div className={styles.menu_list_item}>Account Details</div>
                <div className={styles.menu_list_item}>Logout</div>
            </div>
          </div>
        );
    }

    const settingsContent = () => {
        return (
            <div className={styles.menu_container}>
                <div className={styles.menu_close}>
                     <CloseLogo clickHandler={closeHandler} />
                </div>
            </div>
        );
    } 

    return (
        <div className={styles.header_container}>
            <div className={styles.header_left}>
                <div className={styles.logo_container}>
                    <div className={styles.left_logo}>
                        <YoroadmapLogo width="44" height="34" />
                    </div>
                    <div className={styles.left_text}></div>
                </div>
            </div>
            <div className={styles.header_right}>
                <div className={styles.right_settings}>
                    <div className={styles.settings_icon} onClick={() => openHandler(1)}></div>
                    { pop === 1 && <StandardPopup content={() => settingsContent()} open={!!pop} target={`settings`} origin={`top right`} /> }
                </div>
                <div className={styles.right_user}>
                    <UserAvatar clickHandler={() => openHandler(2)} />
                    { pop === 2 && <StandardPopup content={() => userContent()} open={!!pop} target={`avatar`} origin={`top right`} /> }
                </div>
            </div>
        </div>
    );
}

export default MainHeader;