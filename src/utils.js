import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import i18next from 'i18next';

export const accountTypes = [
    {
        title1: 'New to WhatsApp',
        title2: 'Have a Facebook business account',
        value: "option1",
        key: 1,
        isAgreed: false,
    },
    {
        title1: 'Existing WhatsApp',
        title2: 'Have installed',
        value: "option2",
        key: 2,
        isAgreed: false,
    },
    {
        title1: 'Migrate WhatsApp',
        title2: 'Have WhatsApp business',
        value: "option3",
        key: 3,
        isAgreed: false,
    }
]

export const prerequisities = [
    {
        icon: <Icon.SlashCircle color='#cc9900' size={30}/>,
        description: () => {
            return(
                <p><a href="#">{i18next.t('delete existing account')} </a>{i18next.t('contact whatsapp channel')}</p>
            )
        },
        isEnableOptions: ['option2',],
        key: 1,
    },
    {
        icon: <Icon.BagDash color='#cc9900' size={30}/>,
        description: () => {
            return(
                <p><a href="#">{i18next.t('Disable two factor authentication')} (2FA)</a> {i18next.t('from your previouse')}</p>
            )
        },
        isEnableOptions: ['option3'],
        key: 2,
    },
    {
        icon: <Icon.People color='#cc9900' size={30}/>,
        description: () => {
            return(
                <p>{i18next.t('Make sure that you')} <a href="#">{i18next.t('have the admin access')}</a> of the <a a href="#"></a>{i18next.t('fb business manager')}</p>
            )
        },
        isEnableOptions: ['option1', 'option2', 'option3'],
        key: 3,
    },
    {
        icon: <Icon.Person color='#cc9900' size={30}/>,
        description: () => {
            return(
                <p>{i18next.t('you need')} <a href="#">{i18next.t('phone number')}</a> {i18next.t('which you can verify via')} OTP/call.</p>
            )
        },
        isEnableOptions: ['option1', 'option2'],
        key: 3,
    }
]

export const optionButtonLabel = {
    option1: "Connect WhatsApp",
    option2: "Raise Request",
    option3: "Raise Request",
}