import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BodyFooter = () => {

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
    <section className="cta section">
      <div className="container">
        <div className="cta-inner section-inner">
          <h3 className="section-title mt-0">
            Want an enjoyable and high quality experience?
          </h3>
          <div className="cta-cta">
            <a className="button button-primary button-wide-mobile" href={`mailto:${data.site.siteMetadata.mail}`}>
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )

}

export default BodyFooter
