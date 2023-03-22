/**
 * Custom hook for sorting data
 * 
 * 2 elements needed
 * * Sort key
 * * Data source
 * 
 * Output
 * * Sorted result
 */

 const useSorter = () => {
    const sortData = (data, sortkey) => {
        const sortedData = data.sort((a, b) => a[sortkey].localeCompare(b[sortkey]))
        return sortedData;
    }

    return {
        sortData
    };
}

export default useSorter;