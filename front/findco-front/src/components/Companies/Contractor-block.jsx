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
                        <div className='contractor'>
                            <h4>Ime podjetja:</h4> <p> {contractor.company_name}</p>
                        </div>
                        <div className='contractor'>
                            <h4>Področje dela: </h4> <p> {contractor.company_line_of_work}</p>
                        </div>
                        <div className='contractor'>
                            <h4>Ime in priimek latnika: </h4> <p> {contractor.first_name} {contractor.last_name}</p>
                        </div>
                        <div className='contractor'>
                            <h4>Email: </h4> <p> {contractor.email}</p>
                        </div>
                        <div className='contractor'>
                            <h4>Telefon: </h4> <p> {contractor.phone}</p>
                        </div>
                        <div className='contractor'>
                            <h4>Mesto: </h4> <p> {contractor.company_city}</p>
                        </div>
                        <div className='contractor'>
                            <h4>Regija: </h4> <p> {contractor.company_region}</p>
                        </div>
                        <div className='contractor'>
                            <h4>Država: </h4> <p> {contractor.company_country}</p>
                        </div>
                        
                    </div>
                    <div className="read-more">
                            <button onClick={() => window.location = 'mailto:{contractor.email}'}> 
                                Kontaktiraj
                            </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContractorBlock
