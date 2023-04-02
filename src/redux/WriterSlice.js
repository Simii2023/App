import { createSlice } from '@reduxjs/toolkit';

const WriterSlice = createSlice({

    name: 'writer',

    initialState: {
        writerDetailsInStore: { username: 'Sonu', email: 'sonu@gmail.com' },
        someOtherVariable: ''
    },

    reducer: {
        updateWriterDetailsInStore: (state, action) => {
            state.writerDetailsInStore = action.payload;
        }
    }
});

export const { updateWriterDetailsInStore } = WriterSlice.actions;

export default WriterSlice.reducer
