import React, { useState } from 'react';
import "./style.css";
import Menu from "./MenuApi.js";
import MenuCard from "./MenuCard.js";
import Navbar from './Navbar';

const uniqueList =
[
  ...new Set(Menu.map((curElem)=>{
    return curElem.category;
  })),
  "All",
];
console.log(uniqueList);

const Restaurant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const findCategory= (category)=>
  {
    if(category==="All")
    {
      setMenuData(Menu);
      return;
    }
    const updatedList = Menu.filter( (curElem)=>
      {return curElem.category === category;}
    );
    console.log(updatedList);
   setMenuData(updatedList);
  };

  return (
    <>
    <Navbar findCategory={findCategory} menuList={menuList}/>
    <MenuCard menuData={menuData}/> 
    </>
  );
}

export default Restaurant;