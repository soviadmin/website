import React from 'react';
import { useImage } from "../hooks/useImage";

export default function EquipmentSection(props) {
    // const imgContainer = useImage();
    return (
        <div className="feature-eq">
            <h3>Featured Equipment</h3>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-xs-12">
                        Feature 1
                    </div>
                    <div className="col-lg-4 col-xs-12">
                    Feature 2
                    </div>
                    <div className="col-lg-4 col-xs-12">
                    Feature 3
                    </div>
                </div>
            </div>
            <button type="button" class="btn btn-primary mt-5">View all equipment</button>
        </div>
    )
}