import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'
import Quickinfo from '../components/HomePageComponent/QuickInfo'
import Gallery from '../components/HomePageComponent/Gallery-1'
import img from '../images/bcg/homeBcg.jpeg'
import Menu from '../components/HomePageComponent/Menu'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="eatery" subtitle="55 main street - Santa Monica, CA">
        <BannerButton style={{ margin: '2rem auto' }}>menu</BannerButton>
      </Banner>
    </HomeHeader>
    <Quickinfo />
    <Gallery />
    <Menu />
  </Layout>
)

export default IndexPage
