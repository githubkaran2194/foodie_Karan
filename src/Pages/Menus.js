import React, { useState } from 'react';
import FoodData from './FoodData';
import FoodCard from './FoodCard';

const Menus = () => {
  const [items] = useState(FoodData);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  ).filter(item => selectedCategory ? item.category === selectedCategory : true);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };


  const categories = [...new Set(items.map(item => item.category))];

  return (
    <div className='max-w-[1000px] mx-auto'>
      <div className="flex justify-center items-center my-4 gap-1 flex-col sm:flex-row w-full">
        <input
          type="text"
          placeholder="Search here"
          value={search}
          onChange={handleChange}
          className="w-[80%] shadow-slate-750 shadow-md rounded-sm placeholder:text-black placeholder:text-md placeholder:font-medium p-[7px_10px] border focus:border-red-900 focus:border-x-sky-200 border-gray-600"
        />
        <button className="bg-red-500 text-white p-[6px_25px] shadow-md rounded-sm text-md hover:bg-red-800">
          Search
        </button>
      </div>
      <div className='flex justify-center items-center'>
       {
        categories.map((category)=>(
        <button className='dark:bg-gray-900 text-white m-2 p-[8px_22px]  rounded-md text-sm hover:bg-white hover:border-blue-500 border hover:text-blue-500' onClick={()=>setSelectedCategory(category)}>{category}</button>
        ))
       }
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 p-2'>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
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
          ))
        ) : (
          <div className="text-center">Item not found</div>
        )}
      </div>
    </div>
  );
};

export default Menus;
