import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import OneJuice from '../../Components/OneJuice/OneJuice';

import './Lab.css'

const Lab = ({searching}) => {

    const [juices, setJuices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => { const getJuices = async () => {
        try {
            setIsLoading(true);
            
            const result = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searching}`
            );
            setJuices(result.data.drinks);
            setIsLoading(false);
        } 
        catch (error) {
            setIsLoading(false);
            setIsError(true);
        }
        };getJuices() },[searching]);

    return (
        <div className='thelab'>
            {isLoading ? (
            <h3>Loading</h3>
            ) : juices == null ? (
                <h3>No drink</h3>
            ) : isError ? (
            <h1>Error To fetching Data</h1>
            ) : (
            <div className="Juices">{juices.map((juice) => (<OneJuice juice={juice} key={juice.idDrink}/>))}</div>
        )}
        </div>
    )
}

export default Lab
