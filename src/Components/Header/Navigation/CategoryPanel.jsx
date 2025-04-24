// 👇 CHANGES only in index values and logic!
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
    setInnerSubMenuIndex(null); // Reset inner submenu when main menu changes
  };

  const openInnerSubMenu = (index) => {
    if (innerSubmenuIndex === index) {
      setInnerSubMenuIndex(null);
    } else {
      setInnerSubMenuIndex(index);
    }
  };

  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      {/* Title */}
      <h2 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop by Category
        <IoCloseSharp
          onClick={() => props.openCategoryPanel(false)}
          className="cursor-pointer text-[20px] bg-gray-200 rounded"
        />
      </h2>

      {/* Menu */}
      <div className="scroll">
        <ul className="w-full">
          {/* FASHION 👗 */}
          <li className="list-none flex items-center relative">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>
            {submenuIndex !== 0 ? (
              <MdOutlineAddBox
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}
            {submenuIndex === 0 && (
              <ul className="submenu absolute top-[100%] left-[0] w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>
                  {innerSubmenuIndex !== 0 ? (
                    <MdOutlineAddBox
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  ) : (
                    <FaRegSquareMinus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(0)}
                    />
                  )}
                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu absolute top-[100%] left-[0] w-full pl-3">
                      <li><Link to="/" className="link text-[14px] px-3">Rolling Diamond</Link></li>
                      <li><Link to="/" className="link text-[14px] px-3">Smart Tablet</Link></li>
                      <li><Link to="/" className="link text-[14px] px-3">Crepe T-Shirt</Link></li>
                      <li><Link to="/" className="link text-[14px] px-3">Leather Watch</Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* OUTWERE 🧥 */}
          <li className="list-none flex items-center relative">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                Outwere
              </Button>
            </Link>
            {submenuIndex !== 1 ? (
              <MdOutlineAddBox
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegSquareMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}
            {submenuIndex === 1 && (
              <ul className="submenu absolute top-[100%] left-[0] w-full pl-3">
                <li className="list-none relative">
                  <Link to="/" className="w-full">
                    <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                      Apparel
                    </Button>
                  </Link>
                  {innerSubmenuIndex !== 1 ? (
                    <MdOutlineAddBox
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(1)}
                    />
                  ) : (
                    <FaRegSquareMinus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubMenu(1)}
                    />
                  )}
                  {innerSubmenuIndex === 1 && (
                    <ul className="inner_submenu absolute top-[100%] left-[0] w-full pl-3">
                      <li><Link to="/" className="link text-[14px] px-3">Rolling Diamond</Link></li>
                      <li><Link to="/" className="link text-[14px] px-3">Smart Tablet</Link></li>
                      <li><Link to="/" className="link text-[14px] px-3">Crepe T-Shirt</Link></li>
                      <li><Link to="/" className="link text-[14px] px-3">Leather Watch</Link></li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
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
