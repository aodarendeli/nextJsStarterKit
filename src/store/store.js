import {
    configureStore,
    combineReducers,
} from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
// import { shopApi } from "./shopApiSlice";
import cartReducer from "./slices/cart";
import { categoryApi } from "./slices/category";
import { loadFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";
import { isServer } from "../utils/environment";

const combinedReducer = combineReducers({
    // [shopApi.reducerPath]: shopApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    cart: cartReducer,
});

const makeStore = () => {
    const configuredStore = configureStore({
        reducer: combinedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(categoryApi.middleware),

        // preloadedState: loadFromLocalStorage(),
        devTools: process.env.NODE_ENV !== "production",
    });

    // if (!isServer()) {
    //     configuredStore.subscribe(() => {
    //         saveToLocalStorage(configuredStore.getState());
    //     });
    // }

    return configuredStore;
};
export const store = makeStore();
export const wrapper = createWrapper(makeStore, { debug: true });
