import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSiteMetadata } from "../hooks/useSiteMetadata"
import Helmet from 'react-helmet'
import Layout from '../components/Layout';
import HomeCarousel from "../components/HomeCarousel"
import FeaturedEquipment from "../components/FeaturedEquipment"
import AboutUs from '../components/AboutUs'
import OurServices from '../components/OurServices'
import WhyChooseUs from '../components/WhyChooseUs'
import GetQuote from '../components/GetQuote'
import Partners from '../components/Partners'


export default function Home() {
  const siteMetadata = useSiteMetadata();
  return (
      <Layout>
         <Helmet
              title={"Home" + siteMetadata.title}>
          </Helmet>
          <HomeCarousel/>
          <FeaturedEquipment/>
          <AboutUs/>
          <OurServices/>
          <WhyChooseUs/>
          <GetQuote/>
          <Partners/>
      </Layout>
   );
}
