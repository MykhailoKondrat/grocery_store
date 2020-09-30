import React from 'react';
import {Link, useParams,useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {
  changePriority,
  changeStatus,
  deleteProduct, updateStorage,
} from '../../app/mainSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch= useDispatch();
  const product = useSelector( state => state.main.products.find(prod => prod.id === id ));
  const handleDeleteProduct = () => {
    dispatch(deleteProduct(id));
    history.push("/");
    dispatch(updateStorage());
  
  };
  const handleSetPriority = (e) => {
    dispatch(changePriority({
      id:id,
      value:e.target.value
    }));
    dispatch(updateStorage());
  
  }
  const handleChangeStatus = () => {
    dispatch(changeStatus({
      id:id,
      currentStatus: product.statusLog[product.statusLog.length -1].status
    }));
    dispatch(updateStorage());
  
  }
  return (
    <>
      <Link to="/"><p>Back</p></Link>
      <h2>{product.name}</h2>
      <button onClick={handleDeleteProduct}>Delete Product</button>
      <p>
        <label htmlFor="priority">Product Priority
          <input type="range" min="1" max="5" defaultValue={product.priority} name="priority" onChange={handleSetPriority}/>
          <span>{product.priority}</span>
        </label>
      </p>
      <div>
        <h4>Status</h4>
        <form onChange={handleChangeStatus}>
          <label > Have
            <input type="radio" value='Have' name="status" defaultChecked/>
          </label>
          
          <label htmlFor="status"> Run Out
            <input type="radio" value='Run Out' name="status"/>
          </label>
        </form>
      </div>
      <div>
        <h4>Status History</h4>
        {
          product.statusLog.map( log => {
            return (
              <p key={Math.random()}>Set to {log.status} at {log.setOnDate}</p>
            )
          })
        }
      </div>
    </>
  );
};

export default ProductDetails;