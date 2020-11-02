import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const About = () => (
    <Layout>
        <Helmet title="About"></Helmet>
        <div style={{height: '400px'}}>
            <h1>This is About page</h1>
        </div>
    </Layout>
)

export default About




