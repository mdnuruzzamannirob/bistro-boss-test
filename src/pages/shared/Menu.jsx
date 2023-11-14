import { useEffect } from "react";
import { useState } from "react";
import MenuCard from "./MenuCard";

const Menu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    fetch("/menu.json")
      .then((res) => res.json())
      .then((data) => setMenus(data));
  }, []);

  const filterMenu = menus.filter((menu) => menu.category === "popular");

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {filterMenu?.map((menu) => (
          <MenuCard key={menu.id} menu={menu}></MenuCard>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="btn border-0 border-b-4 border-black hover:bg-transparent mt-8 bg-transparent hover:border-yellow-500">
          View Full Menu
        </button>
      </div>
    </>
  );
};

export default Menu;
