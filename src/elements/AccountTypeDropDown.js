import React from 'react';
import { accountTypes } from '../utils';
import Select from 'react-select';

const AccountTypeDropDown = () => {
    const onChangeDropDown = (event) => {
        console.log(event.target.value);
    }
    const accountTypeOptions = accountTypes.map(item => {
        item.label = (
            <>
            <label className='fs-5'>{item.title1}</label>
            <p className='fs-6 mt-1'>{item.title2}</p>
            </>
        )
        return item;
    })
    return(
        <React.Fragment>
            <Select  options={accountTypeOptions} placeholder={"Select..."}/>
        </React.Fragment>
    )
}

export default AccountTypeDropDown;