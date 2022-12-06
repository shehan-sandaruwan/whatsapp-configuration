import React from 'react';
import { prerequisities } from '../utils';

const Prerequisities = () => {
    return(
        <React.Fragment>
            <div className="card" style={{width: '100%', borderColor: "#cc9900", background: "rgba(204, 153, 0, 0.3)"}}>
                <div className="card-body">
                    {prerequisities.map(item => {
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