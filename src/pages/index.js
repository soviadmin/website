import React from "react"
import Helmet from 'react-helmet'
import Layout from '../components/layout';
import Banner from "../components/Banner"
import EquipmentSection from "../components/EquipmentSection"
import AboutSection from '../components/AboutSection'
import ServiceSection from '../components/ServiceSection'
import Testimonials from '../components/Testimonials'
import ContactSection from '../components/ContactSection'


class HomeIndex extends React.Component {
    render() {
        return (
            <Layout>
                <Helmet title="Home"></Helmet>
                <Banner/>
                <AboutSection/>
                <EquipmentSection/>
                <ServiceSection/>
                <Testimonials/>
                <ContactSection/>
            </Layout>
        )
    }
}

export default HomeIndex
