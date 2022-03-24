import React from "react";

function Categories({ filterCtegories, categories }) {
  return (
    <div className=" py-7 flex justify-center space-x-4">
      {categories.map((btnCategory, index) => {
        return (
          // itrate throuhh btns
          <button
            className="bg-[#9c7d33] py-2 px-3 rounded-md font-bold shadow-sm hover:bg-[#d4b97a] transition-all ease-in text-white"
            key={index}
            onClick={() => filterCtegories(btnCategory)}>
            {btnCategory.charAt(0).toUpperCase() + btnCategory.slice(1)}
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
