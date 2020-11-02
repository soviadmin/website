import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'


const Service = () => (
    <Layout>
        <Helmet title="Service"></Helmet>
        <div style={{height: '400px'}}>
            <h1>This is Service page</h1>
        </div>
    </Layout>
)

export default Service