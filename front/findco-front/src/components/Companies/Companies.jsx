import React from 'react'
import banner from "./../../assets/hisa1.jpg";
import axios from "axios";
import { useState, useEffect } from 'react';
import ContractorBlock from './Contractor-block';

function Companies() {
    /*const options = {
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Content-Type' : 'application/json'
        }
    };*/

    const [contractors, setContractors] = useState('');

    useEffect(() => {
        const fetchContractors = async () => {
            try {
                const response = await axios.get('http://find-co.herokuapp.com/api/v1/contractors'); //, options
                setContractor(
                    response.data.sort()
                )
                
                /*.then((response) => {
                console.log('Success', response);
                }, (error) => {
                console.log(error);
                })*/
                
            } catch (err) {
                console.log(err);
            }
        };
        fetchContractors();
    }, [])

    
    return (
        <div className='container-search'>
            <div className="row">
                <div className="banner">
                   <img src={banner} />
                </div>
                <div className="contractors-list">
                    {contractors.map((contractor) => (
                        //props to Contractor-block component
                        <ContractorBlock contractor={contractor} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Companies
