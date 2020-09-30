import React, {useState} from 'react';
import ProductList from '../../containers/ProductsList/ProductList';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct, updateStorage} from '../../app/mainSlice';

const GroceryErrands = (props) => {
  const dispatch = useDispatch();
  const [newProduct,setNewProduct] = useState('');
  const mainState = useSelector(state=>state.main.products);
  const handleAddProduct = (e) => {
    e.preventDefault();
    setNewProduct('');
    dispatch(addProduct(newProduct));
    dispatch(updateStorage());
  }
  const handleInput = (e) => {
    setNewProduct(e.target.value);
  }
  return (
    <>
      {/*//add product*/}
      <h2>My Grocery Errands</h2>
      <section>
    
        <form onSubmit={handleAddProduct}>
          <input type="text" name="newProductName" value={newProduct} onChange={handleInput} placeholder="Enter Product Name"/>
          <button type="submit" disabled={!newProduct}>Add Product</button>
        </form>
      </section>
      {/*//filter*/}
      <section>
        <form>
          <h3>Sort items</h3>
          <label>
            <input type="radio" name="filter" value="all"  defaultChecked />
            All
          </label>
          <label>
            <input type="radio" name="filter" value="ranOut"  />
            Ran Out
          </label>
          <label>
            <input type="radio" name="filter" value="have" />
            have
          </label>
        </form>
      </section>
      {/*  product list*/}
      {mainState.length !==0 &&
      <section>
        <ProductList/>
      </section>
      }
    </>
  );
};

export default GroceryErrands;