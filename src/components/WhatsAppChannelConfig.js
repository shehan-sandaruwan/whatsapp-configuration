import React, { useEffect, useState } from 'react';
import * as Icon from 'react-bootstrap-icons';
import { useTranslation } from 'react-i18next';
import { raiseRequestButtonStyleLg, flexRowAlignEnd, alignItemCenterCol, flexRowAlignStart, roundedBorder, paddingTopBottomOne,
    p0m0dFlexfdCol, dFdColaStart, jtfyCAPstR, pstAbAlMdl } from '../theme';
 


const WhatsAppChannelConfig = (props) => {
    const { t, i18n } = useTranslation();

    const onClickGetStart = (event) => {
        event.preventDefault();

        const value = {action: "startConfiguration", payload: null};
        props.onchangeData(value);
    }

    return(
        <React.Fragment>
            <div className="jumbotron" style={{marginTop: "10%"}}>
                    <div className="container text-center mt-5">
                        <div className="row align-items-center">
                            <Icon.Whatsapp color="#25D366" size={96}/>
                            <div className="mt-3">
                                <h2>{t('setup messenger')}</h2>      
                                <p>{t('connect your whatsApp')}</p>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className={`${flexRowAlignEnd} col-sm-2 p-0`}>
                                <div className={`${alignItemCenterCol} ${roundedBorder}`}>
                                    <Icon.Whatsapp color="#25D366" size={50}/>
                                </div>
                            </div>
                            <div className={`col-sm-1 ${paddingTopBottomOne}`} style={{background: "rgba(84, 245, 39, 0.25)"}}>
                                <hr style={{border: "dashed 1px"}} className='m-0'></hr>
                            </div>
                            <div className={`col-sm-6 ${p0m0dFlexfdCol} bg-light`}>
                                <div className={`row pt-3 pb-3 ms-0 me-0 ${jtfyCAPstR}`}>
                                    <hr style={{border: "dashed 1px", width: "100%", top: "50%"}} className={pstAbAlMdl}></hr>
                                    <div className="col-sm-3 p-0">
                                        <div className={`${dFdColaStart}`}>
                                            <label className='fs-6 text-start'>step 1</label>
                                            <Icon.Record2Fill size={40}  color="#25D366"/>
                                            <label className='fs-6 text-start'>{t('add business det')}</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 p-0">
                                        <div className={`${dFdColaStart}`}>
                                            <label className='fs-6 text-start'>step 1</label>
                                            <Icon.Record2Fill size={40}  color="#25D366"/>
                                            <label className='fs-6 text-start'>{t('Add display name')}</label>
                                        </div>
                                    </div>
                                    <div className="col-sm-3 p-0">
                                        <div className={`${dFdColaStart}`}>
                                            <label className='fs-6 text-start'>step 1</label>
                                            <Icon.Record2Fill size={40}  color="#25D366"/>
                                            <label className='fs-6 text-start'>{t('Verify via OTP')}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`col-sm-1 ${paddingTopBottomOne}`} style={{background: "rgba(84, 245, 39, 0.25)"}}>
                            <hr style={{border: "dashed 1px"}} className='m-0'></hr>
                            </div>
                            <div className={`${flexRowAlignStart} col-sm-2 p-0`}>
                                <div className={`${alignItemCenterCol} ${roundedBorder}`}>
                                    <Icon.CheckCircleFill color="#25D366" size={50}/>
                                </div>
                            </div>
                        </div>
                        <button type="button" className={raiseRequestButtonStyleLg} onClick={onClickGetStart}>{t('get started')}</button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WhatsAppChannelConfig;