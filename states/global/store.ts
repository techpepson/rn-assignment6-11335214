//global state management 

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        addToCart: Cart,
    }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch