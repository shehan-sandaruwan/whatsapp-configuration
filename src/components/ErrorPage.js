import { t } from 'i18next';
import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import {alignCenterScreen} from "../theme";
import { useTranslation } from 'react-i18next';

const ErrorPage = (props) => {
    const { t, i18n } = useTranslation();
    
    const reConnectWhatsApp = () => {
        // reconnect logi here
    }

    return(
        <React.Fragment>
             <div className={alignCenterScreen}>
             <div className="text-center">
                    <Icon.XCircleFill className='text-danger' size={50}/>
                    <div className="mt-3 d-flex flex-column">
                        <h2>{t('Account not created')}</h2>      
                        <p className='mb-0'>{t('sorry account unable to create')}</p>
                        <small>{t('please try to re-connect')} <a href='#'>{t('support')}</a></small>
                    </div>
                    <button type="button" class="btn btn-danger btn-sm mt-3" onClick={reConnectWhatsApp}><Icon.ArrowRepeat className='text-white' size={20}/>Re-connect WhatsApp</button>
                </div>
             </div>
        </React.Fragment>
    )
}

export default ErrorPage;