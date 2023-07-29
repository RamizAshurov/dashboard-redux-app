const ADD_FILTER = "ADD_FILTER"
const REMOVE_FILTER = "REMOVE_FILTER"
const CLEAR_FILTERS = "CLEAR_FILTER"

const addFilter = filter => ({
    type: ADD_FILTER,
    payload: filter
})

const removeFilter = filter => ({
    type: REMOVE_FILTER,
    payload: filter
})

const clearFilters = () => ({ type: CLEAR_FILTERS })

export { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS }
export { addFilter, removeFilter, clearFilters }