import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const ErrorPage = (props) => {
    return(
        <React.Fragment>
             <div className='d-flex justify-content-md-center align-items-center vh-100'>
             <div className="text-center">
                    <Icon.XCircleFill className='text-danger' size={50}/>
                    <div className="mt-3 d-flex flex-column">
                        <h2>Account not created</h2>      
                        <p className='mb-0'>Sorry, the WhatsApp account could not be created due to some technical error</p>
                        <small>Please try re-connecting again or contact <a href='#'>support</a></small>
                    </div>
                    <button type="button" class="btn btn-danger btn-sm mt-3"><Icon.ArrowRepeat className='text-white' size={20}/>Re-connect WhatsApp</button>
                </div>
             </div>
        </React.Fragment>
    )
}

export default ErrorPage;