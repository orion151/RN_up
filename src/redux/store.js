import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import AbilityReducer from "./slice/ability.slice";

const store = configureStore({
    reducer: {
        abilityData: AbilityReducer,
    },
    middleware: getDefaultMiddleware(),
    devTools: true,
});

export default store;