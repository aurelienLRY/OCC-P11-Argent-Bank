import { configureStore  } from "@reduxjs/toolkit";
import rootReducer from "./reducers";


export const store  = 
 configureStore({ 
    preloadedState: {},
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production",
    });

