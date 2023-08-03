import { configureStore } from '@reduxjs/toolkit/';

import { positionsReducer } from './positions/positionsSlice';
import { filtersReducer } from './filters/filtersSlice';

const store = configureStore({
    reducer: {
        positions: positionsReducer,
        filters: filtersReducer
    }
})

export { store }