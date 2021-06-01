import React from "react"
import Img from "gatsby-image"

export default function ContainerTable(props) {

    let content = {
        EN: {
            heading: "Container Specification",
            tbTitleDG: "Door Opening (m)",
            tbTitleIR: "Interior (m)",
            tbTitleWM: "Weight (kg)/ Volume",
            length: "Length",
            width: "Width",
            height: "Height",
            heightEx: "Height Extension",
            tare: "Tare",
            payload: "Payload",
            cbm: "CBM"
        },

        VI: {
            heading: "Thông số kĩ thuật",
            tbTitleDG: "Cửa mở (m)",
            tbTitleIR: "Phần trong (m)",
            tbTitleWM: "Khối lượng (kg)/ Thể tích",
            length: "Dài",
            width: "Rộng",
            height: "Cao",
            heightEx: "Chiều cao mở rộng",
            tare: "KL Vỏ",
            payload: "KL Hàng",
            cbm: "CBM"
        },
    }

    props.language === "en" ? (content = content.EN) : (content = content.VI)

    return (
        <div className="container-table mt-5 pb-5">
            <div className="detail-img">
                <div className="col-md-6 col-12 mb-5 mt-4">
                    <h2 style={{textTransform: "none"}} className="mb-5">{props.containerName}</h2>
                    <Img fluid={props.containerImg} />
                </div>
            </div>
            <div className="container">
                <h4>{content.heading}</h4>
                <div className="row">
                    <div hidden={props.noDoorOpening} className="col-md-3 col-12">
                        <TableSpec hidden={props.noDoorOpening} content={content} tbType="door-opening" tbValues={props.dgValues} isSuperRack={false}/>
                    </div>
                    <div className="col-md-5 col-12">
                        <TableSpec hidden={false} content={content} tbType="interior" tbValues={props.irValues} isSuperRack={props.superRack}/>
                    </div>
                    <div className="col-md-4 col-12">
                        <TableSpec hidden={false} content={content} tbType="weight" tbValues={props.wmValues} isSuperRack={false}/>
                    </div>
                </div>
            </div>
        </div>
  )
}
export function TableSpec(props) {
    return (
        <div>
            <p>
                {props.tbType == "door-opening" && props.content.tbTitleDG}
                {props.tbType == "interior" && props.content.tbTitleIR}
                {props.tbType == "weight" && props.content.tbTitleWM}
            </p>
            <table className="table table-bordered table-spec-details">
                <thead className="thead-light">
                    <tr>
                        <th hidden={props.tbType == "door-opening"} scope="col">
                            {props.tbType == "weight"? props.content.tare : props.content.length}
                        </th>
                        <th scope="col">
                            {props.tbType == "weight"? props.content.payload : props.content.width}
                        </th>
                        <th scope="col">
                            {props.tbType == "weight"? props.content.cbm : props.content.height}
                        </th>
                        <th hidden={!props.isSuperRack} scope="col">
                            {props.content.heightEx}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { props.hidden == false ? 
                    <tr>{props.tbValues.map((val, index) => {
                        return (
                            <td>
                                {props.tbType == "weight"? 
                                    index != props.tbValues.length-1?  
                                        val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") 
                                        : val == 0? "-" : val.toFixed(1)
                                    : val.toFixed(3)}
                            </td>)})}
                    </tr>
                    : <></>}
                </tbody>
            </table>
        </div>
    )
}
