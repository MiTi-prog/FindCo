import React from 'react'
import banner from "./../../assets/piseMajster.jpg";
import axios from "axios";
import { useState, useEffect } from 'react';
import ContractorBlock from './Contractor-block';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Companies.scss';
import './SearchBar.scss';

function Companies() {
    /*const options = {
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Content-Type' : 'application/json'
        }
    };*/

    const [contractors, setContractors] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchContractors = async () => {
            try {
                const response = await axios.get('http://find-co.herokuapp.com/api/v1/contractors'); //, options
                setContractors(
                    response.data.sort()
                )
                
                console.log('Contractors: ', response.data.sort());
            } catch (err) {
                console.log(err);
            }
        };
        fetchContractors();
    }, [])

    
    return (
        <>
        <Header />
            <div className="container-search">
                <div className="row">
                    <div className="banner">
                        <img alt='banner' src={banner} />
                    </div>
                    <div className="title">
                        <h1>Poišči izvajalca del</h1>
                    </div>
                    <div className="contractors-content">
                        
                        <div className="sidebar">
                            {/* Sidebar */}
                            <div className='search-container'>
                                <div className="search">
                                    <h3>Poišči podjetje</h3>
                                    <input 
                                        type="text" 
                                        placeholder='Iskanje...' 
                                        className='searchbar' 
                                        onChange={event => {setSearchTerm(event.target.value)}}
                                        />
                                    {/*<label>
                                        <input type="checkbox" />
                                        My Value
                                    </label>*/}
                                </div>  
                            </div>
                        </div>
                        
                        <div className="contractors-list">
                        <h2>Vsi ponudniki storitev</h2>
                            {contractors.filter((val) => {
                                if (searchTerm == '') { return val; }
                                else if (val.company_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val
                                }
                                else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val
                                }
                                else if (val.last_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return val
                                }
                            }).map((contractor) => (
                                //props to Contractor-block component
                                <ContractorBlock keys={contractor.id} contractor={contractor} />
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
}

export default Companies
