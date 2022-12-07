import React, { useState } from "react";
import { useTranslation } from 'react-i18next';

const AgreementContent = (props) => {
    const {onClickCheckBox, isAgreed}= props;
    const { t, i18n } = useTranslation();

    return(
    <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked={isAgreed} onClick={onClickCheckBox}/>
        <label class="form-check-label" for="flexCheckDefault">
           {t('agreement')}
        </label>
    </div>
    )
}

export default AgreementContent;