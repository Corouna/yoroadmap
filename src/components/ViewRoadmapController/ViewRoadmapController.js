import { useState, useContext } from "react";
import { StandardPopup } from "./..";
import { SidebarContext } from './../../contexts/SimpleSidebar';
import { LeftChevronLogo, RightChevronLogo, ImportFromGoogleLogo, DownloadAsSVGLogo, InfoLogo, CloseLogo } from "./../../assets/svg";
import styles from "./styles.module.css";

const ViewRoadmapController = ({ modalToggler, contentSetter }) => {
    // texts
    const demoText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    // context
    const { setOpen, open } = useContext(SidebarContext);

    // states
    const [infoActive, setInfoActive] = useState(false);

    const downloadSvgChart = () => {
        setOpen(true);
    }

    const importSheetFromGoogle = () => {
        contentSetter('import sheet');
        modalToggler();
    }

    const openInfo = () => {
        setInfoActive(!infoActive);
    }

    const closeHandler = () => {
        setInfoActive(false);
    }

    const popupContent = () => {
        return (
            <div className={styles.menu_container}>
                <div className={styles.menu_content}>
                    {demoText}
                </div>
            </div>
        );
    }

    // labels
    const controllerUpperLabel = 'Yopeso Portal App';
    const controllerMonthLabel = 'December';
    const controllerWeekLabel = 'Week 49';
    const controllerLowerLabel = (
        <>
            November 1 - December 23rd, 2022 
            <div className={styles.info_icon}>
                <InfoLogo width={15} height={15} fill={ infoActive ? '#0050E2' : '#767680' } clickHandler={openInfo} />
                { infoActive && <StandardPopup content={() => popupContent()} open={infoActive} target={`info`} origin={`top right`} /> }
            </div></>
    );

    return (
        <div className={styles.vrc_container}>
            <div className={styles.vrc_left}>
                <div className={styles.vrc_left_uppertext}>{controllerUpperLabel}</div>
                <div className={styles.vrc_left_lowertext}>{controllerLowerLabel}</div>
            </div>
            <div className={styles.vrc_center}>
                <div className={styles.vrc_center_leftchevron}>
                    <LeftChevronLogo />
                </div>
                <div className={styles.vrc_center_text}>
                    <div className={styles.vrc_center_uppertext}>{controllerMonthLabel}</div>
                    <div className={styles.vrc_center_lowertext}>{controllerWeekLabel}</div>
                </div>
                <div className={styles.vrc_center_rightchevron}>
                    <RightChevronLogo />
                </div>
            </div>
            <div className={styles.vrc_right}>
                <div className={styles.vrc_right_download} onClick={downloadSvgChart}>
                    <DownloadAsSVGLogo />
                </div>
                <div className={styles.vrc_right_import} onClick={importSheetFromGoogle}>
                    <ImportFromGoogleLogo />
                </div>
            </div>
        </div>
    )
};

export default ViewRoadmapController;