import React from 'react';
import './Contractor-block.scss';
import './Button.scss';

function ContractorBlock({ contractor }) {
    //component, designed for styled list of contractors
    return (
        <div className='container-contractor'>
            <div className="row">
                <div className="contractor-block">
                    <div className="contractor-info">
                        <h4>{contractor.company_name}</h4>
                        <p>{contractor.first_name}</p>
                        <p>{contractor.last_name}</p>
                    </div>
                    <div className="read-more">
                        <button className=''> 
                            Več podatkov
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContractorBlock
