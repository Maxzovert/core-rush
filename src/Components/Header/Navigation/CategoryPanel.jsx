import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import { MdOutlineAddBox } from "react-icons/md";
import "../Navigation/style.css";
import { Link } from "react-router-dom";

const CategoryPanel = (props) => {
  const list = () => (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      {/*Title */}
      <h2 className="p-3 text-[16px] font-[500] flex  items-center justify-between">
        Shop by Category
        <IoCloseSharp
          onClick={() => props.openCategoryPanel(false)}
          className="cursor-pointer text-[20px] bg-gray-200 rounded"
        />
      </h2>

      {/*Main menu */}
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
            <Link to="/" className="w-full">
              <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>
            <MdOutlineAddBox className="absolute top-[10px] right-[15px] cursor-pointer" />

            {/*Sub menu */}
            <ul className="absolute top-[100%] left-[0] w-full pl-3">
              <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="w-full !text-left !justify-start px-3 !text-[rgba(0,0,0,0.8)]">
                    Apparel
                  </Button>
                </Link>
                <MdOutlineAddBox className="absolute top-[10px] right-[15px] cursor-pointer" />

                {/*Sub sub menu */}
                <ul className="absolute top-[100%] left-[0] w-full pl-3">
                  <li className="list-none relative">
                    <Link
                      to="/"
                      className="link transition text-[14px] w-full !text-left !justify-start px-3"
                    >
                      Apparel
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
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
