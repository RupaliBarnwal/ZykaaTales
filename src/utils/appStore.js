import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore= configureStore({
  reducer :{   /// it consists of all the reducers from different slices, it is the reducer for the whole store.
    cart:cartReducer,
    //user: userReducer, // suppose we have reducer for user slices
  },
});
export default appStore;