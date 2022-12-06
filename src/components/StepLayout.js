
import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import AccountTypeDropDown from '../elements/AccountTypeDropDown';
import Prerequisities from '../elements/Prerequisities';
import AgreementContent from '../elements/AgreementContent';
import {rowItemCenter, mTmEmS, raiseRequestButtonStyle, flexRowAlignEnd, flexColAlignEnd} from '../theme';

const StepsLayout = (props) => {
    const {buttonLabel} = props;
    return(
        <React.Fragment>
             <div className='d-flex flex-column'>
                <div className="row p-5 justify-content-between" style={{background: 'url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png)', height: "40vh"}}> 
                    <div className="col-sm-3 p-0">
                    <div>
                        <Icon.ArrowLeftShort size={30}  className='text-primary'/>
                        <label className='text-primary cursor-pointer'>Go Back</label>
                    </div>
                    </div>
                    <div className={`${flexColAlignEnd} col-sm-5 p-0`}>
                    <Icon.Whatsapp color="#25D366" size={50}/>
                    <div className="mt-3">
                        <h2>WhatsApp account type</h2>      
                        <p className='mb-0'>Select your account to get important information about pre requisites and account setup</p>
                    </div>
                    </div>
                    <div className="col-sm-3 p-0 d-flex align-items-end">
                    <div className={`${flexRowAlignEnd} w-100`}>
                        <div className="col-sm-5 p-0">
                        <Icon.Book size={25} className='text-primary'/>
                        <label className='text-primary ps-2'>Read FAQs</label>
                        </div>
                        <div className="col-sm-5 p-0">
                        <Icon.QuestionCircle size={25} className='text-primary'/>
                        <label className='text-primary ps-2'>Get help</label>
                        </div>
                    </div>
                    </div>
                </div>
                <div className={`${rowItemCenter} ${mTmEmS}`}>
                    <div className="col-sm-3 p-0"></div>
                    <div className="col-sm-5 p-0">
                        <div className='d-flex flex-column' style={{gap: "30px"}}>
                            <AccountTypeDropDown />
                            <Prerequisities />
                            <AgreementContent />
                        </div>
                        <button type="button" className={raiseRequestButtonStyle} disabled>{buttonLabel || 'Raise Request'}</button>
                    </div>
                    <div className="col-sm-3 p-0"></div>
                    </div>
             </div>
        </React.Fragment>
    )
}

export default StepsLayout;