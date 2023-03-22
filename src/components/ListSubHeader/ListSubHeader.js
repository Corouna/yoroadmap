import { useState } from "react";
import { StandardDropdown, StandardButton, StandardPopup } from "./../";
import { PlusLogo } from "./../../assets/svg";
import styles from "./styles.module.css";

const sorterOptions = {
    type: 'simple',
    allowMultipleValues: false,
    options: [
        { id: 0, value:'name', label: 'name' },
        { id: 1, value:'added date', label: 'added date' },
        { id: 2, value:'end date', label: 'end date' },
        { id: 3, value:'access', label: 'access' },
        { id: 4, value:'status', label: 'status' },
    ]
};

const filterOptions = {
    type: 'group',
    allowMultipleValues: true,
    options: [
        {
            id: 0,
            group: 'status',
            options: [
                { id: 0, value:'in progress', label: 'in progress' },
                { id: 1, value:'attention', label: 'attention' },
                { id: 2, value:'on hold', label: 'on hold' },
            ]
        },
        {
            id: 1,
            group: 'access',
            options: [
                { id: 0, value:'private', label: 'private' },
                { id: 1, value:'shared', label: 'shared' },
                { id: 2, value:'public', label: 'public' },
            ]
        }
    ]
};

const ListSubHeader = ({ 
    listSetter, 
    viewType, 
    onFilter = () => {}, 
    onSorter = () => {},
    modalToggler = () => {},
    contentSetter = () => {}
}) => {
    const subheaderTitle = 'Roadmaps list';
    const filterOffLabel = <><div className={styles.filteroff_icon} />Filter is off</>;
    const filterOnLabel = <><div className={styles.filteron_icon} />Filter is on</>;
    const addRoadmapLabel = 'New Roadmap';

    const [sorterOpen, setSorterOpen] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);

    // Sorter value
    const [sorterKey, setSorterKey] = useState('');
    // Filter value
    const [filterKeys, setFilterKeys] = useState([]);
    // For popup
    const [pop, setPop] = useState(false);

    const openSorterMenu = () => {
        setSorterOpen(!sorterOpen);
        setFilterOpen(false);
    }

    const openFilterMenu = () => {
        setFilterOpen(!filterOpen);
        setSorterOpen(false);
    }

    const selectSorter = (v) => {
        setSorterKey(v);
        onSorter(v);
        setSorterOpen(false);
    }

    const selectFilter = (v) => {
        setFilterKeys(v);
        onFilter(v);
    }

    const openCreateModal = () => {
        contentSetter('add roadmap');
        modalToggler();
    }

    const hoverAddRoadmap = action => {
        console.log('You hover me! And the action is ::: ', action);
        if (action === 'hover') setPop(true);
        if (action === 'unhover') setPop(false);
    }

    return (
        <div className={styles.lsh_container}>
            <div className={styles.lsh_left}>
                <div className={styles.lsh_left_text}>{subheaderTitle}</div>
            </div>
            <div className={styles.lsh_center}>
                <div className={styles.center_sorter}>
                    <StandardDropdown 
                        label={<><div className={styles.sort_icon} />{`Sort by ${sorterKey ? sorterKey : 'name'}`}</>} 
                        color="white"
                        multi={false} 
                        openSetter={openSorterMenu} 
                        open={sorterOpen} 
                        menu={sorterOptions} 
                        value={sorterKey} 
                        valueSetter={selectSorter} 
                    />
                </div>
                <div className={styles.center_filter}>
                    <StandardDropdown 
                        label={filterKeys.length ? filterOnLabel : filterOffLabel} 
                        color="white" 
                        multi={true} 
                        openSetter={openFilterMenu} 
                        open={filterOpen} 
                        menu={filterOptions}
                        valueSetter={selectFilter}
                    />
                </div>
            </div>
            <div className={styles.lsh_right}>
                <div className={styles.display_add}>
                    <StandardButton 
                        color="blue" 
                        label={addRoadmapLabel} 
                        clickHandler={openCreateModal} 
                        width={145}
                        onHoverHandler={hoverAddRoadmap}
                        onHoverLeaveHandler={hoverAddRoadmap}
                    />
                </div>
                <div className={styles.display_list}>
                    <div className={`${styles.list_icon} ${viewType === 'list' && styles.list_active_icon}`} onClick={() => listSetter('list')} />
                </div>
                <div className={styles.display_grid}>
                    <div className={`${styles.grid_icon} ${viewType === 'grid' && styles.grid_active_icon}`} onClick={() => listSetter('grid')} />
                </div>
            </div>
        </div>
    );
}

export default ListSubHeader;