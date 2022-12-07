import React, {useCallback, useState} from 'react';
import WhatsAppChannelConfig from './WhatsAppChannelConfig';
import ErrorPage from './ErrorPage';
import Step from './Step';

const WhatsAppChannel = (props) => {
    const [pageData, setPageData] = useState({mode: "configuration", selection: null});


    const onChangeExample = useCallback(({action, payload})=>{
         switch(action) {
            case "configuration":
                setPageData({mode: "configuration", selection: null});
                break;
            case "startConfiguration":
                setPageData({mode: "update", selection: payload});
                break;
            case "update":
                setPageData({mode: "update", selection: payload});
                break;
            case "error":
                setPageData({mode: "error", selection: payload});
                break;
            default:
                setPageData({mode: "configuration", selection: null});
                break;
         }
      }, []);

    return(
        <React.Fragment>
            {pageData.mode === "configuration" && (<WhatsAppChannelConfig onchangeData={onChangeExample}/>)}
            {(pageData.mode === "update") && 
            (<Step option={pageData.selection} onchangeData={onChangeExample}/>)}
            {pageData.mode === "error" && (<ErrorPage onchangeData={onChangeExample}/>)}
        </React.Fragment>
    )
}

export default WhatsAppChannel;