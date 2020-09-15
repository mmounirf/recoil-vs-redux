import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { v4 as uuidv4 } from 'uuid';

const initialState = [
  { count: 0, id: uuidv4() },
  { count: 0, id: uuidv4() },
  { count: 0, id: uuidv4() }
]

const countersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNTER':
      const counterToUpdateIndex = state.findIndex(counter => counter.id === action.id);
      const newCounters = [...state];
      newCounters.splice(counterToUpdateIndex, 1, { ...newCounters[counterToUpdateIndex], count: action.count })
      return newCounters;

    // return state.map((counter) => {
    //   if(counter.id === action.id) {
    //     return {
    //       ...counter,
    //       count: action.count
    //     }
    //   }
    //   return counter
    // })
    default:
      return state
  }
}

export const selectCounters = state => state;

export const selectCounter = state => id => state.find(counter => counter.id === id)

export const setCounter = (id, count) => {
  return {
    type: 'SET_COUNTER',
    id,
    count
  }
}

export const reduxStore = createStore(countersReducer, initialState, composeWithDevTools());

