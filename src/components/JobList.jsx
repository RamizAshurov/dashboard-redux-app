import { JobPosition } from './JobPosition';

import { useSelector, useDispatch } from 'react-redux';
import { selectAllPositions, selectFilteredPositions } from 'store/positions/positions-selectors';
import { addFilter } from 'store/filters/filters-actions';
import { selectFilters } from 'store/filters/filters-selectors';

const JobList = () => {
  const currentFilters = useSelector(selectFilters)
  const filteredPositions = useSelector(state => selectFilteredPositions(state, currentFilters))
  const dispatch = useDispatch()

  const handleAddFilter = filter => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {filteredPositions.map(position => (
        <JobPosition 
          key={position.id} 
          handleAddFilter={handleAddFilter}
          {...position} />
      ))}
    </div>
  )
}

export {JobList};