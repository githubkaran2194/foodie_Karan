import React, { useState } from 'react';
import FoodCard from './FoodCard';
import FoodData from './FoodData';

const HotItems = () => {
  const [items, setItems] = useState(FoodData); // Rename 'item' to 'items'
  const [filter, setFilter] = useState(''); // State to store the filter category

  // Function to filter items based on category
  const filtered = (category) => {
    const filCate = FoodData.filter((item) => item.category === category);
    setItems(filCate); 
    setFilter(category);
  };

  const snackFilter =FoodData.filter((item)=>item.category === 'Snacks')


  return (
    <div className='mx-auto max-w-5xl'>
      <h2 className='text-black py-2 text-center text-3xl font-bold'>Hot Items</h2>
      <div className='text-center mb-4'>
        <button onClick={() => filtered('Snacks')} className="mr-2">Snacks</button>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'>
        {snackFilter.map((item) => (
          <FoodCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            desc={item.desc}
            category={item.category}
            rating={item.rating}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
};

export default HotItems;
