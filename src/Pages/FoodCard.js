import React from "react";
import { MdStarRate } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/CartSlice";
import { Link } from "react-router-dom";
import { itemsAddToDetails } from "../redux/SingleFood";
import { Button } from "antd";

const FoodCard = ({ id, name, price, img, rating, desc }) => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  console.log(cartItems);

  const handleAddToCart = () => {
    dispatch(add({ id, name, price, img, desc, quantity: 1 }));
  };

  return (
    <div className="my-2 bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer">
      <Link to={`/food/${id}`}>
        <img
        onClick={()=>dispatch(itemsAddToDetails(name, id, price, desc))}
          className="hover:scale-105 duration-500 w-full h-28 object-fill"
          src={img || "https://www.dotandkey.com/cdn/shop/files/sunstick.jpg?v=1708078633"}
          alt={name}
        />
      </Link>

      <div className="px-6 py-1">
        <div className="font-bold text-sm my-2 text-red-500">{name.slice(0, 20)}</div>
        <div className="flex my-2 items-center">
        
        </div>
      </div>
      <div className="px-6 pt-2 pb-2 flex justify-between items-center">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-red-700 mr-2">
          ${price}
        </span>
       <span className="flex items-center gap-2"> <MdStarRate color="orange" /> / {rating}</span>
       
      </div>
      <Button onClick={handleAddToCart} className="dark:bg-gray-900 text-white text-md uppercase w-full my-2">Add To Cart</Button>
    </div>
  );
};

export default FoodCard;
