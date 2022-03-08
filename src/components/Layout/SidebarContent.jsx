import React, { useEffect, useRef } from "react";
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const SidebarContent = props => {
  const ref = useRef()

  useEffect(() => {
    const pathName = props.location.pathname
    const initMenu = () => {
      new MetisMenu("#side-menu")
      let matchingMenuItem = null
      const ul = document.getElementById("side-menu")
      const items = ul.getElementsByTagName("a")
      for (let i = 0; i < items.length; ++i) {
        if (pathName === items[i].pathname) {
          matchingMenuItem = items[i]
          break
        }
        else if (pathName.includes(items[i].pathname.substring(1))) {
          if (items[i].pathname.substring(1) != "") {
            matchingMenuItem = items[i];
            break
          }
        }
      }
      if (matchingMenuItem) {
        activateParentDropdown(matchingMenuItem);
      }
    };
    initMenu()
  }, [props.location.pathname])

  const scrollElement = (item) => {
    if (item) {
      const currentPosition = item.offsetTop
      if (currentPosition > window.innerHeight) {
        if(ref.current !== undefined)
          ref.current.getScrollElement().scrollTop = currentPosition - 300
      }
    }
  }

  const activateParentDropdown = (item) =>  {
    item.classList.add("active")
    const parent = item.parentElement
    const parent2El = parent.childNodes[1]
    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show")
    }

    if (parent) {
      parent.classList.add("mm-active")
      scrollElement(item);
      return false
    }
    scrollElement(item);
    return false
  }

  return (
    <React.Fragment>
      <div id="sidebar-menu">
        <ul className="metismenu list-unstyled" id="side-menu">
          <li>
            <Link to="/" className="">
              <i className="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/#" className="">
              <i className="fas fa-users-cog"></i>
              <span>Customers</span>
            </Link>
          </li>
          <li>
            <Link to="/lead" className="">
              <i className="fas fa-funnel-dollar"></i>
              <span>Leads</span>
            </Link>
          </li>
          <li>
            <Link to="/marketing-visit" className="">
              <i className="fas fa-handshake"></i>
              <span>Marketing Visits</span>
            </Link>
          </li>
          <li>
            <Link to="/#" className="">
              <i className="fas fa-file-signature"></i>
              <span>Contracts</span>
            </Link>
          </li>
          <li>
            <Link to="/#" className="">
              <i className="fas fa-folder-open"></i>
              <span>Job Files</span>
            </Link>
          </li>
          <li>
            <Link to="/#" className="">
              <i className="far fa-chart-bar"></i>
              <span>MIS</span>
            </Link>
          </li>
        </ul>
      </div>
    </React.Fragment>
  )
}

export default withRouter(SidebarContent)
