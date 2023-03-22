import { useState, useEffect } from "react";
import { 
    MainHeader, 
    ViewSubHeader, 
    StandardModal,
    ViewRoadmapController,
    StandardSidebar
} from "./../../components/";
import { SidebarProvider } from "./../../contexts/SimpleSidebar";
import { MockHeader, MockMap } from "./../../components/MockMap/New";
import styles from "./altstyles.module.css";

const View = props => {
    // For modal 
    const [isModalOpen, setModalIsOpen] = useState(false);
    const [contentType, setContentType] = useState('add roadmap');
    const [browserHeight, setBrowserHeight] = useState(0);

    // Modal toggler
    const toggleModal = () => {
        setModalIsOpen(!isModalOpen);
    };

    useEffect(() => {
        const updateOnResize = () => {
          setBrowserHeight(window.innerWidth);
        };
    
        window.addEventListener('resize', updateOnResize);
      
        return () => window.removeEventListener('resize', updateOnResize);
    }, []);

    return (
        <>
            <SidebarProvider>
                <div className={styles.parent_container}>
                    <div className={styles.sticky_header}>
                        <div className={styles.view_header}>
                            <MainHeader modalToggler={toggleModal} contentSetter={setContentType} />
                        </div>
                        <div className={styles.view_filter}>
                            <ViewSubHeader modalToggler={toggleModal} contentSetter={setContentType} />
                        </div>
                        <div className={styles.view_controller}>
                            <ViewRoadmapController modalToggler={toggleModal} contentSetter={setContentType} />
                        </div>
                        <div className={styles.view_map_header}>
                            <MockHeader />
                        </div>
                    </div>
                    <div className={styles.view_map} style={{ maxHeight: browserHeight || '100%' }} >
                        <MockMap />
                    </div>
                </div>
                <StandardSidebar />
            </SidebarProvider>
            {isModalOpen && <StandardModal openSetter={toggleModal} contentType={contentType} />}
        </>
    );
}

export default View;