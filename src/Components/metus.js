import React from "react";

function Menus({ menuItems }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 space-x-6 space-y-9">
      {menuItems.map((item) => {
        //   destructure
        const { id, category, title, desc, img, price } = item;
        return (
          <section key={id} className="flex ">
            <div className="image">
              <img
                className="max-w-md h-32 object-cover border-4 rounded-md border-[#9c7d33]"
                src={img}
                alt={title}
              />
            </div>
            <article>
              <section className="flex justify-between w-full px-5 pb-3">
                <p className="font-bold text-2xl">
                  {title.charAt(0).toUpperCase() + title.slice(1)}
                </p>
                <p className="font-bold text-[#9c7d33] text-xl">${price}</p>
              </section>
              <div className="w-11/12 mx-auto h-0.5 bg-gray-400"></div>
              <aside className="pl-4 text-md">{desc}</aside>
            </article>
          </section>
        );
      })}
    </div>
  );
}

export default Menus;
