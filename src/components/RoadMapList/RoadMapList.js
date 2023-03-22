import { useState } from "react";
import { StandardPopup, StandardSpace } from "./../";
import { StandardMockListItem, StandardMockGridItem } from "./../MockList";
import { useDeleteRoadmap } from "./../../hooks";
import styles from "./styles.module.css";

function RoadMapList({ 
  roadmaps, 
  listType, 
  clickHandler = () => {},
  modalToggler = () => {},
  contentSetter = () => {}
}) {
  const { deleteRoadmapHandler } = useDeleteRoadmap();
  const [pop, setPop] = useState(0); // pop will take id of list as signal to open. By default the value will be 0.


  if (!roadmaps) {
    return <div>No Roadmaps</div>;
  }

  const openHandler = id => {
    setPop(id);
  }

  const closeHandler = e => {
    setPop(0);
  }

  const deleteThis = id => {
    // TODO :: for delete handler of the list item
    setPop(0);
    const res = deleteRoadmapHandler(id);
  }

  const addCollaborator = () => {
    // TODO 
    console.log('Should open a modal in here!');
    contentSetter('add collaborator');
    modalToggler(true);
  }

  const popupContent = id => {
    return (
      <div className={styles.menu_container}>
        <p className={styles.menu_text} onClick={() => deleteThis(id)}>Delete</p>
        <StandardSpace height={2} />
        <p className={styles.menu_text} onClick={closeHandler}>Close</p>
      </div>
    );
  }

  return (
    <>
      {
        listType === 'list' &&
        <div className={styles.listing_container}>
            {
                roadmaps.map((d, idx) => 
                    <div key={`list_${idx}`} className={styles.placeholder_list}>
                      <StandardMockListItem data={d} menuHandler={() => openHandler(d.id)} viewHandler={clickHandler} userHandler={addCollaborator} />
                      { pop === d.id && <StandardPopup content={() => popupContent(d.id)} open={!!pop} target={`list menu`} origin={`top right`} /> }
                    </div>    
                )
            }
        </div>
      }
      {
        listType === 'grid' &&
        <div className={styles.grid_container}>
            {
                roadmaps.map((d, idx) => 
                    <div key={`grid_${idx}`} className={styles.placeholder_grid}>
                        <StandardMockGridItem data={d} menuHandler={() => openHandler(d.id)} viewHandler={clickHandler} userHandler={addCollaborator} />
                        { pop === d.id && <StandardPopup content={() => popupContent(d.id)} open={!!pop} target={`list menu`} origin={`top right`} /> }
                    </div>    
                )
            }
        </div>
      }
    </> 
  );
}

export default RoadMapList;
