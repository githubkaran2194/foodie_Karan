import React from "react";
import Menus from "./Menus";

const Home = () => {
  return (
    <>
      <div
        className="sm:max-w-screen-2xl max-w-screen-xl h-[50vh] mx-auto mb-7 p-6 flex justify-center items-center opacity-90"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="text-center ">
          <h1 className="text-xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            <span className="text-red-700">Welcome</span> to The World of{" "}
            <br />
            Tasty & Fresh Food
          </h1>
          <p className="text-md  hidden sm:block dark:bg-gray-800 text-white p-2 max-w-screen-md">
          A classic Italian pizza topped with fresh tomatoes, mozzarella cheese, basil leaves, and a drizzle of olive oil. Simple yet bursting with flavors, this Margherita Pizza is a timeless favorite that captures the essence of Italian cuisine.
          </p>
        </div>
      </div>
   <div className="my-6">
   <Menus />
   </div>
    </>
  );
};

export default Home;
