'use client';

import { useState } from "react";
import { Button } from "antd";

const codesMenu: TOOLS.MenuItem = {
  key: "002",
  name: "生成工具",
  children: [{ key: "00201", name: "条形码" }],
};

function Nav() {
  //const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="container">
      <div>
        <h2>nav</h2>
        <Button type="primary">Button</Button>
      </div>
      <div></div>
    </div>
  );
}

export default Nav;
