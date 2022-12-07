
import { t } from 'i18next';
import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import {rowItemCenter, mTmEmS, flexRowAlignEnd, flexColAlignEnd} from '../theme';
import { useTranslation } from 'react-i18next';

const StepsLayout = (props) => {
    const { t, i18n } = useTranslation();
    const {onchangeData} = props;

    return(
        <React.Fragment>
             <div className='d-flex flex-column'>
                <div className="row p-5 justify-content-between" style={{background: 'url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)', height: "40vh"}}> 
                    <div className="col-sm-3 p-0">
                    <div style={{cursor: "pointer", display: "block"}} onClick={() => onchangeData({action: "configuration", payload: null})}>
                        <Icon.ArrowLeftShort size={30}  className='text-primary'/>
                        <label className='text-primary cursor-pointer'>{t('goBack')}</label>
                    </div>
                    </div>
                    <div className={`${flexColAlignEnd} col-sm-5 p-0`}>
                    <Icon.Whatsapp color="#25D366" size={50}/>
                    <div className="mt-3">
                        <h2>{t('WhatsApp account type')}</h2>      
                        <p className='mb-0'>{t('select your account')}</p>
                    </div>
                    </div>
                    <div className="col-sm-3 p-0 d-flex align-items-end">
                    <div className={`${flexRowAlignEnd} w-100`}>
                        <div className="col-sm-5 p-0">
                        <Icon.Book size={25} className='text-primary'/>
                        <a href="#" className='ps-2'>{t('rfqs')}</a>
                        </div>
                        <div className="col-sm-5 p-0">
                        <Icon.QuestionCircle size={25} className='text-primary'/>
                        <a href="#" className='ps-2'>{t('help')}</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={`${rowItemCenter} ${mTmEmS}`}>
                    <div className="col-sm-3 p-0"></div>
                    <div className="col-sm-5 p-0">
                        <div className='d-flex flex-column' style={{gap: "30px"}}>
                            {props.children}
                        </div>
                    </div>
                    <div className="col-sm-3 p-0"></div>
                    </div>
             </div>
        </React.Fragment>
    )
}

export default StepsLayout;