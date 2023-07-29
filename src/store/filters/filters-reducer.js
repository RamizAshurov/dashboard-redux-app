import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTERS } from "./filters-actions";

export const filtersReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_FILTER:
            if (state.includes(action.payload)) 
                return state
            return [...state, action.payload]
        case REMOVE_FILTER:
            return state.filter(filter => filter !== action.payload)
        case CLEAR_FILTERS:
            return []
        default:
            return state;
    }
}