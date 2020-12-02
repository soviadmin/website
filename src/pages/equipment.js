import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Tab, Tabs } from "react-bootstrap"


const Equipment = () => (
    <Layout>
        <Helmet title="Equipment"></Helmet>
        <div className="equipment-page">
            <header className="header">
                <h1 className="title">Equipment Gallery</h1>
                <p>Breadcrumbs</p>
            </header>
            <div className="equipment-tabs">
                <Tabs variant="pills" className="justify-content-center" defaultActiveKey="all" id="uncontrolled-tab-example">
                    <Tab eventKey="all" title="All Equipment">
                        <OpenTop/>
                        <HardTop/>
                    </Tab>
                    <Tab eventKey="open-top" title="Open Top">
                        <OpenTop/>
                    </Tab>
                    <Tab eventKey="hard-top" title="Hard Top">
                        <HardTop/>
                    </Tab>
                </Tabs>
            </div>
        </div>
    </Layout>
    
)

export default Equipment

export function OpenTop() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h4>40' open top container</h4>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h4>40' high cube flat rack</h4>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h4>40' high cube super rack</h4>
                </div>
                
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h4>40' super rack</h4>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h4>40' flat rack with 47 MT pay load</h4>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h4>40' flat rack with collapsible end</h4>
                </div>
                
            </div>
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h4>20' open top container</h4>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h4>20' high cube open top</h4>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h4>20' flat rack with 31 MT pay load</h4>
                </div>
            </div>
        </div>
    );
}

export function HardTop() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h4>40' high cube hard top open top</h4>
                </div>
                <div className="col-xl-4 col-lg-6 col-sm-12">
                    <h4>20' high cube hard top</h4>
                </div>
            </div>
        </div>
    );
}


