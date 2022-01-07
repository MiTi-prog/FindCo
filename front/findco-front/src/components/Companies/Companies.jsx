import React from 'react'
import banner from "./../../assets/hisa1.jpg";
import axios from "axios";

function Companies() {
    /*const options = {
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Content-Type' : 'application/json'
        }
    };*/

    const getContractors = async () => {
        try {
            await axios.get('http://find-co.herokuapp.com/api/v1/contractors') //, options
            .then((response) => {
            console.log('Success', response);
            }, (error) => {
            console.log(error);
            })
            
        } catch (err) {
            console.log(err);
        }
    };

    getContractors();
        
    return (
        <div className='container-search'>
            <div className="row">
                <div className="banner">
                   
                </div>
            </div>
            companies
        </div>
    )
}

export default Companies
