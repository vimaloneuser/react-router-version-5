import React, { useEffect, useState } from "react"
import { withRouter } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Rightbar from "./common/RightSidebar";

const Layout = props => {
  const [showRightSidebar,] = useState(false);
  const [samplePage,setSamplePage] = useState()
  useEffect(() => {
    setSamplePage(window.location.pathname);
    window.scrollTo(0, 0)
  }, []);
  
  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <Header />
        <Sidebar/>
        <div className="main-content">
          <div className={`page-content ${(samplePage == "/lead/lead-sample1") ? "custom-sample1" : ((samplePage == "/lead/lead-sample2") ? "custom-sample2" : '') }`}>
            <div className="container-fluid">
              {props.children}
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {showRightSidebar ? <Rightbar /> : null}
    </React.Fragment>
  )
}

export default withRouter(Layout)
