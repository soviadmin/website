import React from 'react';



export default function ServiceSection(props) {
    return (
        <div className="our-services">
            <h2>Our Services</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-xs-12">
                        <div class="card mb-5">
                            <div class="card-body">
                                <h5 class="card-title">Service 1</h5>
                                <p class="card-text">Find aute irure dolor in reprehend in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xs-12">
                        <div class="card mb-5">
                            <div class="card-body">
                                <h5 class="card-title">Service 3</h5>
                                <p class="card-text">Find aute irure dolor in reprehend in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xs-12">
                        <div class="card mb-5">
                            <div class="card-body">
                                <h5 class="card-title">Service 4</h5>
                                <p class="card-text">Find aute irure dolor in reprehend in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ROW 2 */}
                <div className="row">
                    <div className="col-lg-4 col-xs-12">
                        <div class="card mb-5">
                            <div class="card-body">
                                <h5 class="card-title">Service 4</h5>
                                <p class="card-text">Find aute irure dolor in reprehend in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-xs-12">
                        <div class="card mb-5">
                            <div class="card-body">
                                <h5 class="card-title">Service 5</h5>
                                <p class="card-text">Find aute irure dolor in reprehend in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <button type="button" class="btn btn-primary mt-5">More about us</button> */}
        </div>
    )
}