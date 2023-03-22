import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetRoadmaps } from "../../hooks";
import {
  MainHeader,
  ListSubHeader,
  StandardModal,
  RoadMapList,
} from "./../../components/";
import { useSorter, useFilter } from "./../../hooks";
import styles from "./styles.module.css";

const List = (props) => {
  // For routing
  const navigateTo = useNavigate();
  const { data, loading, error } = useGetRoadmaps();
  // For modal
  const [isModalOpen, setModalIsOpen] = useState(false);
  const [contentType, setContentType] = useState("add roadmap");
  // For list
  const [roadmapData, setRoadmapData] = useState(data);
  const [listType, setListType] = useState("list"); // list or grid only
  // For sorter
  const { sortData } = useSorter();
  // For filter
  const { filterData } = useFilter();
  // For layout
  const [browserHeight, setBrowserHeight] = useState(0);

  // Modal toggler
  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  // Sort functionality
  const sortList = (sortkey) => {
    const sorted = sortData(data, sortkey);
    setRoadmapData(sorted);
  };

  // Filter functionality
  const filterList = (filterkey) => {
    const filtered = filterData(data, filterkey);
    setRoadmapData(filtered);
  };

  // For navigating to view page
  const GoToViewPage = () => {
    navigateTo('/roadmaps/view');
  }

  // For updating content 
  const updateList = item => {
    setRoadmapData([ ...roadmapData, item ]);
  }

  useEffect(() => {
    if (data && roadmapData.length === 0) {
      setRoadmapData(data);
    }
  }, [data, roadmapData.length]);

  useEffect(() => {
      const updateOnResize = () => {
        setBrowserHeight(window.innerWidth);
      };
  
      window.addEventListener('resize', updateOnResize);
    
      return () => window.removeEventListener('resize', updateOnResize);
  }, []);

  return (
    <div className={styles.parent_container}>
      <div className={styles.sticky_header}>
        <div className={styles.list_header}>
          <MainHeader />
        </div>
        <div className={styles.list_filter}>
          <ListSubHeader listSetter={setListType} viewType={listType} onFilter={filterList} onSorter={sortList} modalToggler={toggleModal} contentSetter={setContentType} />
        </div>
      </div>
      <div className={styles.view_list} style={{ maxHeight: browserHeight || '100%' }} >
        <div className={styles.list_container}>
          <div className={styles.list_content}>
            <RoadMapList roadmaps={roadmapData} listType={listType} clickHandler={GoToViewPage} modalToggler={toggleModal} contentSetter={setContentType} />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <StandardModal openSetter={toggleModal} contentType={contentType} setter={updateList} />
      )}
    </div>
  );
};

export default List;
