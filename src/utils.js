import React from 'react';
import * as Icon from 'react-bootstrap-icons';

export const accountTypes = [
    {
        title1: 'New to WhatsApp account setup',
        title2: 'Have a Facebook business account but never created a WhatsApp business account.',
        value: 1,
        key: 1,
    },
    {
        title1: 'New to WhatsApp account setup',
        title2: 'Have a Facebook business account but never created a WhatsApp business account.',
        value: 2,
        key: 2,
    },
    {
        title1: 'New to WhatsApp account setup',
        title2: 'Have a Facebook business account but never created a WhatsApp business account.',
        value: 3,
        key: 3,
    }
]

export const prerequisities = [
    {
        icon: <Icon.SlashCircle color='#cc9900' size={30}/>,
        description: () => {
            return(
                <p><a href="#">Delete the existing WhatsApp account</a> and then connect WhatsApp channel.</p>
            )
        },
        isEnable: true,
        key: 1,
    },
    {
        icon: <Icon.People color='#cc9900' size={30}/>,
        description: () => {
            return(
                <p><a href="#">Delete the existing WhatsApp account</a> and then connect WhatsApp channel.</p>
            )
        },
        isEnable: true,
        key: 2,
    },
    {
        icon: <Icon.Person color='#cc9900' size={30}/>,
        description: () => {
            return(
                <p><a href="#">Delete the existing WhatsApp account</a> and then connect WhatsApp channel.</p>
            )
        },
        isEnable: true,
        key: 3,
    }
]