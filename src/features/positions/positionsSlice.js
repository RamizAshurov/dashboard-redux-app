import { createSlice } from '@reduxjs/toolkit';

const positionsSlice = createSlice({
    name: "positions",
    initialState: [],
    reducers: {
        addPositions: (state, action) => action.payload
    }
})

export const selectFilteredPositions = (state, filters = []) => {
    if (filters.length === 0)
        return state.positions

    return state.positions.filter(positions => {
        const posFilters = [].concat(positions.role, positions.level, ...positions.languages, ...positions.tools)

        return filters.every(filter => posFilters.includes(filter))
    })
}

export const positionsReducer = positionsSlice.reducer
export const { addPositions } = positionsSlice.actions