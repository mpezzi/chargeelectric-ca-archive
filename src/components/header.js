import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import logo from "../images/logo.svg"

const Header = () => {

  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand header-brand">
            <h1 className="m-0">
              <a href="/">
                <img className="header-logo-image" src={logo} alt={data.site.siteMetadata.title} />
              </a>
            </h1>
          </div>
        </div>
      </div>
    </header>
  )

}

export default Header
