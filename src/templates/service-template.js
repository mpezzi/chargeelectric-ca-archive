import React from "react"
import { graphql } from 'gatsby';
import Layout from "../components/layout"
import SEO from "../components/seo"

const ServiceTemplate = ({ data }) => {

  return (
    <Layout>
      <SEO title={data.markdownRemark.frontmatter.title} keywords={[`gatsby`, `application`, `react`]} />
      <div className="service">
        <h2>
          {data.markdownRemark.frontmatter.title}
        </h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
    </Layout>
  );

}

export default ServiceTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
