import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const Equipment = (props) => (
    <Layout>
        <Helmet title="Equipment"></Helmet>
        <div class="container" style={{height: '400px'}}>
            <h1>This is Equipment page</h1>
        </div>
    </Layout>
)


export default Equipment