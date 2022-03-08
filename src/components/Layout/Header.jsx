import React, { useState } from "react";
import ReactDrawer from 'react-drawer';
import 'react-drawer/lib/react-drawer.css';
import { Dropdown } from "reactstrap";
import { Link } from "react-router-dom";
import RightSidebar from "./common/RightSidebar";
import ProfileMenu from "./common/TopbarDropdown/ProfileMenu";

const Header = props => {
  const [megaMenu, setmegaMenu] = useState(false)
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const [position, ] = useState();
  const [open, setOpen] = useState(false);

  const onDrawerClose = () => {
    setOpen(false);
  }

  function tToggle() {
    var body = document.body;
    if (window.screen.width <= 998) {
      body.classList.toggle("sidebar-enable");
    } else {
      body.classList.toggle("vertical-collpsed");
      body.classList.toggle("sidebar-enable");
    }
  }

  return (
    <React.Fragment>
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            <button
              type="button"
              onClick={() => {
                tToggle()
              }}
              className="btn btn-sm px-3 font-size-16 header-item "
              id="vertical-menu-btn"
            >
              <i className="fa fa-fw fa-bars" />
            </button>

            <Dropdown
              className="dropdown-mega d-none d-lg-block ms-2"
              isOpen={megaMenu}
              toggle={() => {
                setmegaMenu(!megaMenu)
              }}
            >
            </Dropdown>
          </div>
          <div className="d-flex">
            <ProfileMenu />
          </div>
        </div>
      </header>
      <ReactDrawer
        open={open}
        position={position}
        onClose={onDrawerClose}
      >
        <RightSidebar onClose={onDrawerClose} />
      </ReactDrawer>
    </React.Fragment>
  )
}

export default Header;
