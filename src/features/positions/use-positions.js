import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import data from '../../mock/data.json'

import { addPositions, selectFilteredPositions } from './positionsSlice'
import { selectFiltres } from '../filters/filtersSlice'

const usePositions = () => {
    const dispatch = useDispatch()

    const currentFilters = useSelector(selectFiltres)
    const filteredPositions = useSelector(state => selectFilteredPositions(state, currentFilters))

    useEffect(() => {
        dispatch(addPositions(data))
    }, [dispatch])

    return filteredPositions
}

export { usePositions }