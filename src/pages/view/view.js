import { useState, useContext } from "react";
import { 
    MainHeader, 
    ViewSubHeader, 
    StandardModal,
    ViewRoadmapController,
    SimpleSidebar
} from "./../../components/";
import { SidebarProvider } from "./../../contexts/SimpleSidebar";
import { MockRoadmap } from "./../../components/MockMap";
import { MockRoadmapFull } from "./../../components/MockMap/New";
import styles from "./styles.module.css";

const View = props => {
    // For modal 
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [contentType, setContentType] = useState('add roadmap');

    // Modal toggler
    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };

    return (
        <>
            <SidebarProvider>
                <div className={styles.parent_container}>
                    <div className={styles.view_header}>
                        <MainHeader modalToggler={toggleModal} contentSetter={setContentType} />
                    </div>
                    <div className={styles.view_filter}>
                        <ViewSubHeader modalToggler={toggleModal} contentSetter={setContentType} />
                    </div>
                    <div className={styles.view_controller}>
                        <ViewRoadmapController modalToggler={toggleModal} contentSetter={setContentType} />
                    </div>
                    <div className={styles.view_map}>
                        <MockRoadmap />
                    </div>
                </div>
                <SimpleSidebar />
            </SidebarProvider>
            {isModalOpen && <StandardModal openSetter={toggleModal} contentType={contentType} />}
        </>
    );
}

export default View;