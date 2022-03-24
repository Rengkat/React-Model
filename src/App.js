import React, { useState } from "react";
import menu from "./Components/data";
import Categories from "./Components/categories";
import Menus from "./Components/metus";

const allCategories = [
  "all",
  ...new Set(menu.map((category) => category.category)),
];

function App() {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  const filterCtegories = (categories) => {
    if (categories === "all") {
      setMenuItems(menu);
      return;
    }
    const newMenus = menu.filter((item) => item.category === categories);

    setMenuItems(newMenus);
  };
  return (
    <div className="w-full h-auto ">
      <div className="w-4/5 mx-auto">
        <header className="w-full text-center pt-20">
          <h1 className="font-bold text-5xl py-1">Our Menus</h1>
          <div className="w-20 py-0.5 bg-[#ac7d0c] mx-auto"></div>
        </header>
        <main>
          <nav>
            <Categories
              filterCtegories={filterCtegories}
              categories={categories}
            />
          </nav>
          <section className="">
            <Menus menuItems={menuItems} />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
