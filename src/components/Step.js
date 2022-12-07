import React, {useEffect, useMemo, useState} from "react";
import StepsLayout from "./StepLayout";
import AccountTypeDropDown from '../elements/AccountTypeDropDown';
import Prerequisities from '../elements/Prerequisities';
import AgreementContent from '../elements/AgreementContent';
import { optionButtonLabel } from '../utils';
import { raiseRequestButtonStyle } from "../theme";
import { accountTypes } from "../utils";
import { useTranslation } from 'react-i18next';


const Step = (props) => {
    const { t, i18n } = useTranslation();
    const {option, onchangeData} = props;
    const [selectedOption, setSelectOption] = useState(null);

    useEffect(() => {
        if(option) {
            const accountType = accountTypes.filter(type => type.value === option);
            if(accountType.length) {
                setSelectOption(accountType[0]);
            }
        }

    }, [option])

    const onClickCheckBox = (event) => {
        const newSelectedOption = {...selectedOption};

        newSelectedOption.isAgreed = event.target.checked;
        setSelectOption(newSelectedOption);
    }

    return (
        <StepsLayout onchangeData={onchangeData}>
            <AccountTypeDropDown option={option} onchangeData={onchangeData}/>
            {option && (
                <>
                    <Prerequisities option={option}/>
                    <AgreementContent onClickCheckBox={onClickCheckBox} isAgreed={selectedOption?.isAgreed}/>
                </>
            )} 
            <button type="button" className={raiseRequestButtonStyle} style={{width: "fit-content"}} disabled={!selectedOption?.isAgreed}>{optionButtonLabel[option] || 'Raise Request'}</button>              
        </StepsLayout>
    )
}

export default Step;