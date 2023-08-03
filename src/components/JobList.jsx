import { useDispatch } from 'react-redux'

import { JobPosition } from './JobPosition';

import { addFilter } from 'features/filters/filtersSlice';

import { usePositions } from 'features/positions/use-positions';

const JobList = () => {
  const positions = usePositions()
  const dispatch = useDispatch()

  const handleAddFilter = filter => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {positions.map(position => (
        <JobPosition 
          key={position.id} 
          handleAddFilter={handleAddFilter}
          {...position} />
      ))}
    </div>
  )
}

export {JobList};