import React from "react"
import PropTypes from "prop-types"
import Header from "./header";
import Body from "./body";
import Footer from "./footer";
import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <div className="body-wrap">
      <Header />
      <Body>
        {children}
      </Body>
      <Footer />
    </div>
  );

}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
