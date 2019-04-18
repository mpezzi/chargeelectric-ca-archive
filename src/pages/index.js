import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ServiceList from "../components/service-list";

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <ServiceList />
    </Layout>
  )

}

export default IndexPage
