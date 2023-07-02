import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './reducer';
import { loadState, saveState } from './sessionStorage';


const store = configureStore({
    reducer: rootReducers,
    preloadedState: loadState()
})
store.subscribe(() => {
    saveState(store.getState());
  });
export default store;
