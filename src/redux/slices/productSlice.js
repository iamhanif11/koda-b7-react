import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listProduct: [],
  editingIndex: null
};

const productSlice = createSlice({
  name: "products",
  initialState,

  reducers:{
    
      addSync: (state, action) => {
        state.listProduct.push(action.payload);
      },
      editSync: (state, action) => {
        const {index, newData} = action.payload
        state.listProduct[index] = newData
    
        },
    
      deleteSync: (state, action) => {
        state.listProduct = state.listProduct.filter(
          (_, index) => index !==action.payload
     )},

     setEditingIndex: (state, action) => {
        state.editingIndex =action.payload
     }
  }
});

export const { addSync, editSync, deleteSync, setEditingIndex } = productSlice.actions;

export const addProductAsync = (product) => (dispatch) => {
  setTimeout(() => {
    dispatch(addSync(product));
  }, 1000);
};

export const editProductAsync = (index, newData) => (dispatch) => {
  setTimeout(() => {
    dispatch(editSync({index: index, newData: newData}));
  }, 1000);
};

export const deleteProductAsync = (index) => (dispatch) => {
  setTimeout(() => {
    dispatch(deleteSync(index));
  }, 1000);
};

export default productSlice.reducer;
