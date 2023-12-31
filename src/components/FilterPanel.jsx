import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { useSelector, useDispatch } from 'react-redux';

import { selectFilters } from 'store/filters/filters-selectors';
import { removeFilter, clearFilters } from 'store/filters/filters-actions';

const FilterPanel = () => {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilters)

  if (currentFilters.length === 0) 
    return null

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {
            currentFilters.map(filter => {
              return <Badge 
                key={filter}
                variant="clearable"
                onClear={() => dispatch(removeFilter(filter))}
              >
                { filter }
              </Badge>  
            })
          }
        </Stack>

        <button 
          className='link'
          onClick={() => dispatch(clearFilters())}
        >Clear</button>
      </div>
    </Card>
  )
}

export {FilterPanel};