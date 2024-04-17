import React from 'react';
import { Link } from 'react-router-dom';

const RelatedProduct = ({ product }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <Link to={`/food/${product.id}`}>
        <img src={product.img} alt={product.name} className="w-full h-40 object-cover" />
      </Link>
      <div className="p-4">
        <Link to={`/food/${product.id}`}>
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        </Link>
        <p className="text-gray-600">${product.price}</p>
      </div>
    </div>
  );
};

export default RelatedProduct;
