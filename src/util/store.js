import {configureStore} from "@reduxjs/toolkit"
import todoReducer from "./Slice";

const store = configureStore({
    reducer: todoReducer

});

export default store