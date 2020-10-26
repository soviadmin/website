import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Contact = (props) => (
    <Layout>
        <Helmet title="Contact"></Helmet>
        <div class="container" style={{height: '400px'}}>
            <h1>This is Contact page</h1>
        </div>
    </Layout>
)


export default Contact