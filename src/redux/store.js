import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { dataReducer } from "./reducer";

export const store = configureStore({
  reducer: {
    cars: dataReducer,
  },
});

setupListeners(store.dispatch);
