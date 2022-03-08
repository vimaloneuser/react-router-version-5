import React from "react";
import SidebarContent from "./SidebarContent";
import { Link } from "react-router-dom";
import ConstantImages from "../../constants/constantImages";

const Sidebar = props => {
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  return (
    <React.Fragment>
      <div className="vertical-menu">
        <div className="navbar-brand-box">
          <Link to="/" className="logo logo-dark">
            <span className="logo-sm">
              <img src={ConstantImages.ApexLogoSmall} alt="" height="22" style={{ margin: '19px auto 0', display: 'flex' }} />
            </span>
            <span className="logo-lg">
              <img src={ConstantImages.ApexLogoLarge} alt="" height="60" />
            </span>
          </Link>
        </div>
        <div data-simplebar className="h-75 siderbar-scroll">
          {props.type !== "condensed" ? <SidebarContent /> : <SidebarContent />}
        </div>
        {
          (!isMobile) ?
            <div className="navbar-brand-box-footer">
              <Link to="/" className="logo logo-dark">
                <span className="logo-lg">
                  <img src={ConstantImages.IrclassLogo} alt="" height="30" />
                </span>
              </Link>
            </div>
            : null
        }
      </div>
    </React.Fragment>
  )
}

export default Sidebar
