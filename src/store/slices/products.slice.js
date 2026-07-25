import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  items: [
    {
      id: 1,
      title: "Product 1",
      description: "First amazing product",
      price: 10,
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState: INITIAL_STATE,
  reducers: {},
});

export default productsSlice.reducer;
