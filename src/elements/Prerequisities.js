import React, { useEffect, useState } from 'react';
import { prerequisities } from '../utils';
import { useTranslation } from 'react-i18next';

const Prerequisities = ({option}) => {
    const [optionPreRequisities, setOptionPrerequisities] = useState([]);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        if(option) {
            const newPreReq = prerequisities.filter(item => item.isEnableOptions.includes(option));
            setOptionPrerequisities(newPreReq);
        }
    }, [option]);

    return(
        <React.Fragment>
            <h3>{t('Prerequisities')}</h3>
            <div className="card" style={{width: '100%', borderColor: "#cc9900", background: "rgba(204, 153, 0, 0.3)"}}>
                <div className="card-body">
                    {optionPreRequisities?.map(item => {
                        return(
                            <div className='d-flex'>
                                <span className='pe-2'>{item.icon}</span>
                                {item.description()}
                            </div>
                        )
                    })}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Prerequisities;