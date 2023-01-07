import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MonthAction, MonthProps, UpdateValue} from '../Intefaces';
import {updateMonth} from '../Storage';

// Define a type for the slice state
interface CalendarState {
  months: MonthProps[];
}

// Define the initial state using that type
const initialState: CalendarState = {
  months: [],
};

export const counterSlice = createSlice({
  name: 'calendar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    set: (state, action: PayloadAction<MonthProps[]>) => {
      console.log(action.payload);
      return {...state, months: [...state.months, ...action.payload]};
    },
    update: (state, action: PayloadAction<UpdateValue>) => {
      const p = action.payload;
      console.log(p.monthIndex, p.boxColumnIndex, p.boxIndex, p.emoji);
      state.months[p.monthIndex].boxColumns[p.boxColumnIndex].boxes[
        p.boxIndex
      ].emoji = p.emoji;

      updateMonth(state.months[p.monthIndex]).then(x => {
        console.log(x);
      });
    },
  },
});

export const {update, set} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default counterSlice.reducer;
