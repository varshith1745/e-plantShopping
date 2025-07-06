// File: store.js

// ✅ 1. Import configureStore from Redux Toolkit
import { configureStore } from '@reduxjs/toolkit';

// ✅ 2. Import cartReducer from the cart slice
import cartReducer from './CartSlice';

// ✅ 3. Create the Redux store
const store = configureStore({
  reducer: {
    // 'cart' is the key name for this slice in global state
    cart: cartReducer,
  },
});

// ✅ 4. Export the store to use in the app with <Provider>
export default store;
