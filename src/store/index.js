import { createReducer, configureStore, createAction } from '@reduxjs/toolkit';
export const chooseRation = createAction('choose_ration');
export const chooseDaysActive = createAction('choose_days_active');
export const chooseCountDaysActive = createAction('choose_count_days_active');

const initialState = {
  selectedRation: 'S',
  selectedDaysActive: 'Каждый день',
  selectedCountDaysActive: '2'
};
    
const reducer = createReducer(initialState, (builder) => {
  builder

  .addCase(chooseRation, (state, action) => {
    return {...state, selectedRation: action.payload}
  })

  .addCase(chooseDaysActive, (state, action) => {
    return {...state, selectedDaysActive: action.payload}
  })

  .addCase(chooseCountDaysActive, (state, action) => {
    return {...state, selectedCountDaysActive: action.payload}
  })

  // .addCase(deleteUser, (state) => {
  //   const newUsers = state.users.slice(0, state.users.length - 1)
  //   return {...state, users: newUsers}
  // })

});

const store = configureStore({
  reducer: reducer,
});

export default store;