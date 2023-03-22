import { useState } from "react";
import { MockEventA, MockEventB, MockEventC, CurrentDayColumn, DayLeftLine } from ".";
import { StandardSpace, StandardPopup } from "./../../";
import styles from "./../styles.module.css";

const MockMap = props => {
    const height = 970;
    const [pop, setPop] = useState(0);

    const openHandler = id => {
        console.log('Opening pop up! ::: ', id);
        setPop(id);
    }

    const closeHandler = () => {
        setPop(0);
    }

    const popupContent = id => {
        return (
          <div className={styles.menu_container}>
            <p className={styles.menu_text} onClick={() => {}}>Edit Category</p>
            <StandardSpace height={2} />
            <p className={styles.menu_text} onClick={() => {}}>Add New Event</p>
            <StandardSpace height={2} />
            <p className={styles.menu_text} onClick={closeHandler}>Close</p>
          </div>
        );
    }

    return (
        <div className={styles.map_container}>
            <svg id="svg-sample" width="1128" height={height} xmlns="http://www.w3.org/2000/svg">
                <g>
                    <DayLeftLine x="173" y="0" height={height} />
                    <DayLeftLine x="310" y="0" height={height} />
                    <DayLeftLine x="447" y="0" height={height} />
                    <DayLeftLine x="583" y="0" height={height} />
                    <CurrentDayColumn x="719" y="0" height={height} />
                    <DayLeftLine x="992" y="0" height={height} />
                    <DayLeftLine x="1127" y="0" height={height} />
                </g>
                <g style={{ position: 'relative' }}>
                    <MockEventA x="8" y="10" menuHandler={() => openHandler(1)} />
                    { pop === 1 && <StandardPopup content={() => popupContent()} open={!!pop} target={`list menu`} origin={`top right`} /> }
                </g>
                <g style={{ position: 'relative' }}>
                    <MockEventB x="8" y="322" menuHandler={() => openHandler(2)} />
                    { pop === 2 && <StandardPopup content={() => popupContent()} open={!!pop} target={`list menu`} origin={`top right`} /> }
                </g>
                <g style={{ position: 'relative' }}>
                    <MockEventC x="8" y="634" menuHandler={() => openHandler(3)} />
                    { pop === 3 && <StandardPopup content={() => popupContent()} open={!!pop} target={`list menu`} origin={`top right`} /> }
                </g>
            </svg>
        </div>
    );
}

export default MockMap;