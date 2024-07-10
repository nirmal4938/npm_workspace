// packages/shared-store/src/reducers.js
import { combineReducers } from 'redux';

const initialStateA = {
  value: 'Value from Reducer A',
};

const initialStateB = {
  value: 'Value from Reducer B',
};

const reducerA = (state = initialStateA, action) => {
  switch (action.type) {
    case 'UPDATE_A':
      return { ...state, value: 'Updated by Reducer A' };
    default:
      return state;
  }
};

const reducerB = (state = initialStateB, action) => {
  switch (action.type) {
    case 'UPDATE_B':
      return { ...state, value: 'Updated by Reducer B' };
    default:
      return state;
  }
};

export default combineReducers({
  reducerA,
  reducerB,
});
