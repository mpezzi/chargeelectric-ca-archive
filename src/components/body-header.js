import React from "react"
import { useStaticQuery, graphql } from "gatsby";

const BodyHero = () => {

  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            mail
          }
        }
      }
    `
  );

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title mt-0">
              {data.site.siteMetadata.title}
            </h1>
            <p className="hero-paragraph">
              {data.site.siteMetadata.description}
            </p>
            <div className="hero-cta">
              <a className="button button-primary" href={`mailto:${data.site.siteMetadata.mail}`}>
                Get in touch
              </a>
            </div>
          </div>
          <div className="hero-figure"></div>
        </div>
      </div>
    </section>
  )

}

export default BodyHero