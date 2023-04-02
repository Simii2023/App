
// steps to use redux in react app 
// 1. create store 
// 2. provide store to react app (in index.js)
// 3. create slices for compoments 
// 4. invoke slices into components 

// useful links :
// https://redux.js.org/introduction/getting-started
// https://react-redux.js.org/introduction/getting-started
// https://redux-toolkit.js.org/introduction/getting-started


import { configureStore } from '@reduxjs/toolkit';
import writerReducer from './WriterSlice';


export default configureStore({
    reducer: {
        writer: writerReducer
    },
    
});