import React, {useState} from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { Tab, Tabs } from "react-bootstrap"
import ScrollAnimation from 'react-animate-on-scroll'
import { useImage } from "../hooks/useImage"
import Img from "gatsby-image"

const Equipment = () => {
    return (
    <Layout>
        <Helmet title="Equipment"></Helmet>
        <div className="equipment-page">
            <header className="header">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Equipment</li>
                        </ol>
                    </nav>
                    <h1 className="title">Equipment Gallery</h1>
                </ScrollAnimation>
            </header>
            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
                <div className="equipment-tabs">
                    <Tabs variant="pills" className="justify-content-center" defaultActiveKey="all" id="uncontrolled-tab-example">
                        <Tab eventKey="all" title="All Equipment">
                            <AllEquipment/>
                        </Tab>
                        <Tab eventKey="open-top" title="SOVI's Special">
                            <Special/>
                        </Tab>
                        <Tab eventKey="hard-top" title="SOVI's Super Special">
                            <SuperSpecial/>
                        </Tab>
                    </Tabs>
                </div>
            </ScrollAnimation>
        </div>
    </Layout>
    
    );
}

export default Equipment

export function AllEquipment() {
    const [itemKey, setKey] = useState(0);
    const imgContainer = useImage();
    
    function randomKey() {
        const rand = 1 + Math.random() * (100);
        if (rand === itemKey) {
          rand = rand + 100;
          setKey(rand);
        }
        return rand;
    }
    const allItems = 
        [
            [imgContainer.equipment40_01.childImageSharp.fluid, "40' Open Top Container"],
            [imgContainer.equipment40_02.childImageSharp.fluid, "40' High Cube Flat Rack"],
            [imgContainer.equipment40_03.childImageSharp.fluid, "40' High Cube Super Rack"],
            [imgContainer.equipment40_04.childImageSharp.fluid, "40' Super Rack"],
            [imgContainer.equipment40_05.childImageSharp.fluid, "40' Flat Rack with 47 MT Pay Load"],
            [imgContainer.equipment40_06.childImageSharp.fluid, "40' Flat Rack with Collapsible Ends"],
            [imgContainer.equipment40_07.childImageSharp.fluid, "40' High Cube Hard Top Open Top"],
            [imgContainer.equipment20_01.childImageSharp.fluid, "20' Open Top Container"],
            [imgContainer.equipment20_02.childImageSharp.fluid, "20' High Cube Open Top"],
            [imgContainer.equipment20_03.childImageSharp.fluid, "20' Flat Rack with 31 MT Pay Load"],
            [imgContainer.equipment20_04.childImageSharp.fluid, "20' High Cube Hard Top"]
        ];
    return (
        <div className="row">
            {allItems.map((groupItem)=> {
            return (
                <div className="col-xl-4 col-lg-6 col-sm-12 eq-image eq-gallery-item" key={randomKey()}>
                    <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                        <Img key={randomKey()} fluid={groupItem[0]} />
                        <p className="eq-name mb-5">{groupItem[1]}</p>
                    </ScrollAnimation>
                </div>
            )})}
        </div>
    );
}

export function Special() {
    const [itemKey, setKey] = useState(0);
    const imgContainer = useImage();
    
    function randomKey() {
        const rand = 1 + Math.random() * (100);
        if (rand === itemKey) {
          rand = rand + 100;
          setKey(rand);
        }
        return rand;
    }
    const specialItems = 
    [
        [imgContainer.equipment40_01.childImageSharp.fluid, "40' Open Top Container"],
        [imgContainer.equipment20_01.childImageSharp.fluid, "20' Open Top Container"],
        [imgContainer.equipment40_06.childImageSharp.fluid, "40' Flat Rack with Collapsible Ends"],
        [imgContainer.equipment20_02.childImageSharp.fluid, "20' High Cube Open Top"],
    ];
    return (
        <div className="row">
            {specialItems.map((groupItem)=> {
            return (
                <div className="col-xl-4 col-lg-6 col-sm-12 eq-image eq-gallery-item" key={randomKey()}>
                    <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                        <Img key={randomKey()} fluid={groupItem[0]} />
                        <p className="eq-name mb-5">{groupItem[1]}</p>
                    </ScrollAnimation>
                </div>
            )})}
        </div>
    );
}

export function SuperSpecial() {
    const [itemKey, setKey] = useState(0);
    const imgContainer = useImage();
    
    function randomKey() {
        const rand = 1 + Math.random() * (100);
        if (rand === itemKey) {
          rand = rand + 100;
          setKey(rand);
        }
        return rand;
    }
    const superSpecialItems = 
    [
        [imgContainer.equipment40_02.childImageSharp.fluid, "40' High Cube Flat Rack"],
        [imgContainer.equipment40_07.childImageSharp.fluid, "40' High Cube Hard Top Open Top"],
        [imgContainer.equipment20_03.childImageSharp.fluid, "20' Flat Rack with 31 MT Pay Load"],
        [imgContainer.equipment40_05.childImageSharp.fluid, "40' Flat Rack with 47 MT Pay Load"],
        [imgContainer.equipment40_03.childImageSharp.fluid, "40' High Cube Super Rack"],
        [imgContainer.equipment40_04.childImageSharp.fluid, "40' Super Rack"],
        [imgContainer.equipment20_04.childImageSharp.fluid, "20' High Cube Hard Top"]
    ];
    return (
        <div className="row">
            {superSpecialItems.map((groupItem)=> {
            return (
                <div className="col-xl-4 col-lg-6 col-sm-12 eq-image eq-gallery-item" key={randomKey()}>
                    <ScrollAnimation animateIn="zoomIn" animateOnce={true}>
                        <Img key={randomKey()} fluid={groupItem[0]} />
                        <p className="eq-name mb-5">{groupItem[1]}</p>
                    </ScrollAnimation>
                </div>
            )})}
        </div>
    );
}


