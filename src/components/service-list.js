import React from "react"
import Service from './service'
import { useStaticQuery, graphql } from "gatsby";

const ServiceList = () => {

  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              excerpt(pruneLength: 250)
              frontmatter {
                title,
                path,
                image
              }
            }
          }
        }
      }
    `
  );

  return (
    <>
      <div id="services" className="text-center">
        <h2 className="section-title mt-0">
          Our Services
        </h2>
        <p className="section-paragraph mb-0">
          We believe that customer service is of the utmost importance so we pride ourselves on providing clients with a stress free experience and high quality workmanship.
        </p>
      </div>
      <div className="features-wrap">
        {
          data.allMarkdownRemark.edges.map(
            e => <Service key={e.node.id} title={e.node.frontmatter.title} description={e.node.excerpt} path={e.node.frontmatter.path} image={e.node.frontmatter.image} />
          )
        }
      </div>
    </>
  )

}

export default ServiceList
