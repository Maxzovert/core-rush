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
          {/* FASHION 👗 */}
          <li className="list-none">
            <div className="flex items-center relative">
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
            </div>
            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none">
                  <div className="flex items-center relative">
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
                  </div>
                  {innerSubmenuIndex === 0 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li>
                        <Link
                          to="/"
                          className="link text-[14px] px-3 block py-1"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="link text-[14px] px-3 block py-1"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="link text-[14px] px-3 block py-1"
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="link text-[14px] px-3 block py-1"
                        >
                          Leather Watch
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* Jewellery */}
          <li className="list-none">
            <div className="flex items-center relative">
              <Link to="/" className="w-full">
                <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                  Jewellery
                </Button>
              </Link>
            </div>
          </li>

          {/* Watches */}
          <li className="list-none">
            <div className="flex items-center relative">
              <Link to="/" className="w-full">
                <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                  Watches
                </Button>
              </Link>
            </div>
          </li>

          {/* OUTWERE 🧥 */}
          <li className="list-none">
            <div className="flex items-center relative">
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
            </div>
            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none">
                  <div className="flex items-center relative">
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
                  </div>
                  {innerSubmenuIndex === 1 && (
                    <ul className="inner_submenu w-full pl-3">
                      <li>
                        <Link
                          to="/"
                          className="link text-[14px] px-3 block py-1"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="link text-[14px] px-3 block py-1"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="link text-[14px] px-3 block py-1"
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/"
                          className="link text-[14px] px-3 block py-1"
                        >
                          Leather Watch
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>

          {/* Cosmetics */}
          <li className="list-none">
            <div className="flex items-center relative">
              <Link to="/" className="w-full">
                <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                  Cosmetics
                </Button>
              </Link>
            </div>
          </li>

          {/* Accessories */}
          <li className="list-none">
            <div className="flex items-center relative">
              <Link to="/" className="w-full">
                <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                  Accessories
                </Button>
              </Link>
            </div>
          </li>

          {/* Electronics */}
          <li className="list-none">
            <div className="flex items-center relative">
              <Link to="/" className="w-full">
                <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                  Electronics
                </Button>
              </Link>
            </div>
          </li>

          {/* Furniture */}
          <li className="list-none">
            <div className="flex items-center relative">
              <Link to="/" className="w-full">
                <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                  Furniture
                </Button>
              </Link>
            </div>
          </li>

          {/* Sunglasses */}
          <li className="list-none">
            <div className="flex items-center relative">
              <Link to="/" className="w-full">
                <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                  Sunglasses
                </Button>
              </Link>
            </div>
          </li>

          {/* X-Box Controller */}
          <li className="list-none">
            <div className="flex items-center relative">
              <Link to="/" className="w-full">
                <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                  X-Box Controller
                </Button>
              </Link>
            </div>
          </li>

          {/* Leather watch */}
          <li className="list-none">
            <div className="flex items-center relative">
              <Link to="/" className="w-full">
                <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                  Leather watch
                </Button>
              </Link>
            </div>
          </li>

          {/* Smart Tablet */}
          <li className="list-none">
            <div className="flex items-center relative">
              <Link to="/" className="w-full">
                <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                  Smart Tablet
                </Button>
              </Link>
            </div>
          </li>

          {/* Purse */}
          <li className="list-none">
            <div className="flex items-center relative">
              <Link to="/" className="w-full">
                <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                  Purse
                </Button>
              </Link>
            </div>
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
