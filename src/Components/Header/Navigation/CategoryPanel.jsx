import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import { MdOutlineAddBox } from "react-icons/md";
import "../Navigation/style.css";
import { Link } from "react-router-dom";
import { FaRegSquareMinus } from "react-icons/fa6";

const CategoryPanel = (props) => {
  const [submenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubMenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
    setInnerSubMenuIndex(null);
  };

  const openInnerSubMenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubMenuIndex(null);
    } else {
      setInnerSubMenuIndex(index);
    }
  };

  const categories = [
    {
      name: "Fashion",
      path: "/fashion",
      hasSubmenu: true,
      subcategories: [
        {
          name: "Apparel",
          path: "/fashion/apparel",
          hasSubmenu: true,
          items: [
            { name: "Rolling Diamond", path: "/fashion/apparel/rolling-diamond" },
            { name: "Smart Tablet", path: "/fashion/apparel/smart-tablet" },
            { name: "Crepe T-Shirt", path: "/fashion/apparel/crepe-t-shirt" },
            { name: "Leather Watch", path: "/fashion/apparel/leather-watch" },
          ],
        },
      ],
    },
    {
      name: "Jewellery",
      path: "/jewellery",
      hasSubmenu: false,
    },
    {
      name: "Watches",
      path: "/watches",
      hasSubmenu: false,
    },
    {
      name: "Outwere",
      path: "/outwere",
      hasSubmenu: true,
      subcategories: [
        {
          name: "Apparel",
          path: "/outwere/apparel",
          hasSubmenu: true,
          items: [
            { name: "Rolling Diamond", path: "/outwere/apparel/rolling-diamond" },
            { name: "Smart Tablet", path: "/outwere/apparel/smart-tablet" },
            { name: "Crepe T-Shirt", path: "/outwere/apparel/crepe-t-shirt" },
            { name: "Leather Watch", path: "/outwere/apparel/leather-watch" },
          ],
        },
      ],
    },
    {
      name: "Cosmetics",
      path: "/cosmetics",
      hasSubmenu: false,
    },
    {
      name: "Accessories",
      path: "/accessories",
      hasSubmenu: false,
    },
    {
      name: "Electronics",
      path: "/electronics",
      hasSubmenu: false,
    },
    {
      name: "Furniture",
      path: "/furniture",
      hasSubmenu: false,
    },
    {
      name: "Sunglasses",
      path: "/sunglasses",
      hasSubmenu: false,
    },
    {
      name: "X-Box Controller",
      path: "/xbox-controller",
      hasSubmenu: false,
    },
    {
      name: "Leather watch",
      path: "/leather-watch",
      hasSubmenu: false,
    },
    {
      name: "Smart Tablet",
      path: "/smart-tablet",
      hasSubmenu: false,
    },
    {
      name: "Purse",
      path: "/purse",
      hasSubmenu: false,
    },
  ];

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h2 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop by Category
        <IoCloseSharp
          onClick={() => props.openCategoryPanel(false)}
          className="cursor-pointer text-[20px] bg-gray-200 rounded"
        />
      </h2>

      <div className="scroll">
        <ul className="w-full">
          {categories.map((category, index) => (
            <li key={index} className="list-none">
              <div className="flex items-center relative">
                <Link to={category.path} className="w-full">
                  <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                    {category.name}
                  </Button>
                </Link>
                {category.hasSubmenu && (
                  <>
                    {submenuIndex !== index ? (
                      <MdOutlineAddBox
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openSubmenu(index)}
                      />
                    ) : (
                      <FaRegSquareMinus
                        className="absolute top-[10px] right-[15px] cursor-pointer"
                        onClick={() => openSubmenu(index)}
                      />
                    )}
                  </>
                )}
              </div>

              {submenuIndex === index && category.hasSubmenu && (
                <ul className="submenu w-full pl-3">
                  {category.subcategories.map((subcategory, subIndex) => (
                    <li key={subIndex} className="list-none">
                      <div className="flex items-center relative">
                        <Link to={subcategory.path} className="w-full">
                          <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                            {subcategory.name}
                          </Button>
                        </Link>
                        {subcategory.hasSubmenu && (
                          <>
                            {innerSubmenuIndex !== subIndex ? (
                              <MdOutlineAddBox
                                className="absolute top-[10px] right-[15px] cursor-pointer"
                                onClick={() => openInnerSubMenu(subIndex)}
                              />
                            ) : (
                              <FaRegSquareMinus
                                className="absolute top-[10px] right-[15px] cursor-pointer"
                                onClick={() => openInnerSubMenu(subIndex)}
                              />
                            )}
                          </>
                        )}
                      </div>

                      {innerSubmenuIndex === subIndex && subcategory.hasSubmenu && (
                        <ul className="inner_submenu w-full pl-3">
                          {subcategory.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link
                                to={item.path}
                                className="link text-[14px] px-3 block py-1"
                              >
                                {item.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      <Drawer
        anchor="left"
        open={props.isOpenCatPanel}
        onClose={() => props.openCategoryPanel(false)}
      >
        {list()}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;