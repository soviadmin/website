import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout.js'

const Notfound = () => (
    <Layout>
        <Helmet title="Not Found Page"></Helmet>
        <div style={{height: '400px'}}>
            <h1>Error 404: Not Found</h1>
        </div>
    </Layout>
)

export default Notfound