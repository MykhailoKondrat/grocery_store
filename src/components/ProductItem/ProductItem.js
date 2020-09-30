import React from 'react';
import {Link} from 'react-router-dom';

const ProductItem = ({id,name,priority,lastUpdated}) => {
  return (
    <div>
      <hr/>
      <Link to={`/${id}`}>     <h4>{name}</h4>
      </Link>
      <p>
        <span>
          Priority: <strong>{priority}</strong>
        </span>
        <br/>
        <span>
          Status : <em>{lastUpdated.status}</em> at {lastUpdated.setOnDate}
        </span>
      </p>
      <hr/>

    </div>
  );
};

export default ProductItem;