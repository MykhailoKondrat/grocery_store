import { createSlice } from '@reduxjs/toolkit';
import { v1 as uuid } from "uuid";
const initialState = {
  products:JSON.parse(localStorage.getItem('ProductsStorage')) ?? []
}
export const mainSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    addProduct: (state, { payload }) =>{
      state.products.push({
        id:uuid(),
        name:payload,
        priority:3,
        statusLog:[
          {
            status:'Have',
            setOnDate: new Date().toLocaleString()
          }
        ]
      })
    },
    deleteProduct: (state,{ payload }) => {
      state.products = state.products.filter( prod => prod.id !== payload);
    },
    increment: state => {
      state.value += 1;
    },
    changePriority: (state, { payload: { id, value } } ) => {
      const productIndex = state.products.findIndex(prod => prod.id === id);
      state.products[productIndex].priority = value;
    },
    changeStatus: (state, { payload: { id, currentStatus }}) => {
      const productIndex = state.products.findIndex(prod => prod.id === id);
      state.products[productIndex].statusLog.push(
        {
          status: currentStatus ==='Run Out' ? 'Have' : 'Run Out',
          setOnDate: new Date().toLocaleString()
        }
      )
    },
    updateStorage: state => {
      localStorage.setItem('ProductsStorage',JSON.stringify(state.products))
    }
  },
});

export const { addProduct, deleteProduct,changePriority,changeStatus,updateStorage} = mainSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.ProductsList.value)`
// export const selectCount = state => state.counter.value;

export default mainSlice.reducer;
