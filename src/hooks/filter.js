/**
 * Custom hook for filtering data
 * 
 * 2 elements needed
 * * Sort key
 * * Data source
 * 
 * Output
 * * Sorted result
 */

 const useFilter = () => {
    const filterData = (data, filterkey) => {
        const filteredata = data.filter(
            d => filterkey.every(
                keyword => Object.values(d).join('').toLowerCase().includes(keyword.toLowerCase()) 
            )
        );

        return filteredata;
    }

    return {
        filterData
    };
}

export default useFilter;