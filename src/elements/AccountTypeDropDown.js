import React, { useState } from 'react';
import { accountTypes } from '../utils';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';

const AccountTypeDropDown = (props) => {
    const {onchangeData}= props;
    const [selectOption, setSelectOption] = useState(null);
    const { t, i18n } = useTranslation();
    
    const onChangeDropDown = (option) => {
        setSelectOption(option);
        onchangeData({action: "update", payload: option.value});
    }

    const accountTypeOptions = accountTypes.map(item => {
        const newItem = {};
        newItem.value = item.value;
        newItem.label = (
            <>
            <label className='fs-5'>{t(item.title1)}</label>
            <p className='fs-6 mt-1'>{t(item.title2)}</p>
            </>
        )
        return newItem;
    })

    return(
        <React.Fragment>
            <label>{t('Choose account type')} <span className='text-danger'>*</span></label>
            <Select  options={accountTypeOptions} placeholder={"Select..."} onChange={onChangeDropDown} value={selectOption}/>
        </React.Fragment>
    )
}

export default AccountTypeDropDown;