import React from 'react';
import {useSelector} from 'react-redux';
import ProductItem from '../../components/ProductItem/ProductItem';

const ProductList = () => {
  let products = useSelector( state => state.main.products)
 
  return (
    <>
    <h2>Products</h2>
      { products.map(prod => {
        return (
          <ProductItem
            id={prod.id}
            key={prod.id}
            name={prod.name}
            priority={prod.priority}
            lastUpdated={ prod.statusLog[prod.statusLog.length-1]}
          />
        )
      })}
    </>
  );
};

export default ProductList;