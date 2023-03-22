import { StandardButton, StandardBreadcrumb, StandardGroupButton } from "./../";
import { ViewTogglerGroupLogo } from "./../../assets/svg";
import styles from "./styles.module.css";

const ViewSubHeader = ({ modalToggler, contentSetter }) => {
    const subheaderTitle = 'Roadmaps list';
    const addEventLabel = <><div className={styles.add_icon} />New Category</>;

    const addNewEvent = () => {
        contentSetter('add event');
        modalToggler();
    }

    return (
        <div className={styles.vsh_container}>
            <div className={styles.vsh_left}>
                <div className={styles.vsh_left_text}>
                    <StandardBreadcrumb />
                </div>
            </div>
            <div className={styles.vsh_center}>
                <StandardGroupButton />
            </div>
            <div className={styles.vsh_right}>
                <StandardButton 
                    color="white" 
                    label={addEventLabel} 
                    width={109} 
                    height={32}
                    fontSize={12}
                    padding={5}
                    clickHandler={addNewEvent} 
                />
            </div>
        </div>
    );
}

export default ViewSubHeader;