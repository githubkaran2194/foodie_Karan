import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, remove } from '../redux/CartSlice';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h1 className="text-black mb-4">
        Cart {cartItems.length === 0 ? "is Empty" : `with ${cartItems.length} items`}
      </h1>
      <div className="flex flex-col space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-2">
            <div className="flex items-center space-x-4">
              <img src={item.img} alt={item.name} className="w-16 h-16 rounded-lg" />
              <div>
                <p className="text-gray-600">{item.name}</p>
                <div className="flex items-center space-x-2">
                  <button className="bg-blue-500 text-white p-2 rounded-full" onClick={() => dispatch(increment(item))}>+</button>
                  <p className="text-sm text-gray-500">{item.quantity}</p>
                  <button className="bg-blue-500 text-white p-2 rounded-full" onClick={() => dispatch(decrement(item))} disabled={item.quantity <= 1}>-</button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <MdDelete className="text-red-600 hover:text-red-800 text-xl cursor-pointer" onClick={() => dispatch(remove(item))} />
              <p className="text-gray-600">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className="mt-4 flex justify-end items-center">
          <p className="text-gray-600">Total:</p>
          <p className="font-bold text-xl text-gray-800">${total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
