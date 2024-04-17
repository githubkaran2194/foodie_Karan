/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import { Link, useParams } from 'react-router-dom';
import FoodData from './FoodData';
import { add } from '../redux/CartSlice';
import RelatedProduct from './RelatedProduct';

const SinglePage = () => {
    const [related, setRelated] = useState([]);
    const { id } = useParams(); // Destructure id from useParams
    const itemId = parseInt(id); 
    const item = FoodData.find((item) => item.id === itemId); // Find item based on id

    console.log("Item:", item); // Log the found item

    if (!item) {
        return <p>Item Not Found</p>;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch(); // Initialize useDispatch

    const handleAddToCart = () => {
        dispatch(add(item)); // Dispatch the add action with the item object
    };

    useEffect(() => {
        const relatedProduct = (category) => {
            const rel = FoodData.filter((item) => item.category === category && item.id !== itemId); // Filter related products by category and exclude the current item
            setRelated(rel);
        };

        relatedProduct(item.category); // Call relatedProduct with the category of the current item
    }, [itemId, item.category]); // Call relatedProduct whenever itemId or item.category changes

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img src={item.img} alt={item.name} className="w-full" />
                </div>
                <div className="md:w-1/2 md:ml-8 mt-4 md:mt-0">
                    <h2 className="text-2xl font-semibold mb-2">{item.name}</h2>
                    <p className="text-gray-600 mb-4">{item.desc}</p>
                    <div className="flex items-center mb-4">
                        <span className="text-gray-900 mr-2">${item.price}</span>
                        <span className="text-gray-600 flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v3m0 5v7m-6-7h12M4 15h16" />
                            </svg>
                            {item.rating}
                        </span>
                    </div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Render related products */}
            {related.length > 0 && (
                <div>
                    <h2 className="text-xl font-semibold mt-8 mb-4">Related Products</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {related.map((product) => (
                            <RelatedProduct product={product}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SinglePage;
