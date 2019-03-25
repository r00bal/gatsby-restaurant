import React from 'react'
import { PageHeader, Banner } from '../utils'
import img from '../images/bcg/contactBcg.jpeg'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Contact = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
      <Banner title="contact us" subtitle={`let's get in touch`} />
    </PageHeader>
  </Layout>
)

export default Contact
