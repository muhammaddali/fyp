
import {  configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer.ts";
// import thunk from "redux-thunk";



const rootStore = configureStore({reducer: rootReducer});


export default rootStore;

