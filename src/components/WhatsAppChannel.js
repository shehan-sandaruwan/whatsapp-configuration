import React, { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { raiseRequestButtonStyleLg, flexRowAlignEnd, alignItemCenterCol, flexRowAlignStart } from '../theme';
 


const WhatsAppChannel = (props) => {
    const {data, onChane} = props;
    const [pageData, setPageData] = useState({mode: "configuration", selection: "option1"});

    return(
        <React.Fragment>
            <div className="jumbotron" style={{marginTop: "10%"}}>
                    <div className="container text-center mt-5">
                        <div className="row align-items-center">
                            <Icon.Whatsapp color="#25D366" size={96}/>
                            <div className="mt-3">
                                <h2>Setup WhatsApp messenger</h2>      
                                <p>Connect your WhatsApp business account</p>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className={`${flexRowAlignEnd} col-sm-2 p-0`}>
                                <div className={`${alignItemCenterCol} p-4 border border-3 border-success rounded-circle`}>
                                    <Icon.Whatsapp color="#25D366" size={50}/>
                                </div>
                            </div>
                            <div className="col-sm-1 align-self-center ps-0 pe-0 pt-1 pb-1" style={{background: "rgba(84, 245, 39, 0.25)"}}>
                                <hr style={{border: "dashed 1px"}} className='m-0'></hr>
                            </div>
                            <div className="col-sm-6 p-0 m-0 d-flex flex-column bg-light">
                                <div className="row justify-content-around  pt-3 pb-3 ms-0 me-0 position-relative">
                                    <hr style={{border: "dashed 1px", width: "100%", top: "50%"}} className="position-absolute align-middle"></hr>
                                    <div className="col-sm-3 p-0">
                                        <div className="d-flex flex-column align-items-start">
                                            <label className='fs-6 text-start'>step 1</label>
                                            <Icon.Record2Fill size={40}  color="#25D366"/>
                                            <label className='fs-6 text-start'>Add business details</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 p-0">
                                        <div className="d-flex flex-column align-items-start">
                                            <label className='fs-6 text-start'>step 1</label>
                                            <Icon.Record2Fill size={40}  color="#25D366"/>
                                            <label className='fs-6 text-start'>Add display name</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 p-0">
                                        <div className="d-flex flex-column align-items-start">
                                            <label className='fs-6 text-start'>step 1</label>
                                            <Icon.Record2Fill size={40}  color="#25D366"/>
                                            <label className='fs-6 text-start'>Verify via OTP</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-1 align-self-center ps-0 pe-0 pt-1 pb-1" style={{background: "rgba(84, 245, 39, 0.25)"}}>
                            <hr style={{border: "dashed 1px"}} className='m-0'></hr>
                            </div>
                            <div className={`${flexRowAlignStart} col-sm-2 p-0`}>
                                <div className={`${alignItemCenterCol} p-4 border border-3 border-success rounded-circle`}>
                                    <Icon.CheckCircleFill color="#25D366" size={50}/>
                                </div>
                            </div>
                        </div>
                        <button type="button" className={raiseRequestButtonStyleLg}>Get started</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WhatsAppChannel;