export const selectAllPositions = (state) => state.positions

export const selectFilteredPositions = (state, filters = []) => {
    if (filters.length === 0)
        return state.positions

    return state.positions.filter(positions => {
        const posFilters = [].concat(positions.role, positions.level, ...positions.languages, ...positions.tools)

        return filters.every(filter => posFilters.includes(filter))
    })
}