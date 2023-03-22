/**
 * Custom hook for searching data
 * 
 * Mainly used for text based input, and searching
 * is based on single keyword input by user.
 * 
 * 2 elements needed
 * * Keyword
 * * Data source
 * 
 * Output
 * * Filtered result
 */

const useSearch = () => {
    const searchData = (data, keyword) => {
        const filteredData = data.filter( d => {
            return Object.values(d).join('').toLowerCase().includes(keyword.toLowerCase());
        });

        return filteredData;
    }

    return {
        searchData
    };
}

export default useSearch;