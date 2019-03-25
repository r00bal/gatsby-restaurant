import React from 'react'
import { PageHeader, Banner } from '../utils'
import img from '../images/bcg/menuBcg.jpeg'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Menu = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={img}>
      <Banner title="menu" subtitle={`let's dig in`} />
    </PageHeader>
  </Layout>
)

export default Menu
