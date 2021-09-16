import axios from 'axios';
import './Details.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Details = ({history}) => {

    const {id} = useParams();
    const [juice, setJuice] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    console.log(id)

    

    useEffect(() => {
        const getJuice = async () => {
            try {
                setIsLoading(true);
                
                const result = await axios.get(
                `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
                );
                setJuice(...result.data.drinks);
                setIsLoading(false);
                
                
            } 
            catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        };getJuice()
    }, [id])

    return (
        <div>
            {isLoading ? (
            <h3>Loading</h3>
            ) : juice == null ? (
                <h3>No drink</h3>
            ) : isError ? (
            <h1>Error To fetching Data</h1>
            ) : (
            <div>
                <div id="container">	
                    <div className="product-details">
                        <h1>{juice.strDrink}</h1>
                        
                        <p className="information">{juice.strInstructions}</p>
                        <div className="control">
                            <button className="btn" onClick={()=>history.goBack()}>
                                <span className="buy">Go Back</span>
                            </button>
                        </div>
                    </div>
                    <div className="product-image">
                        <img src={juice.strDrinkThumb} alt="" />
                        <div className="info">
                            <h2> Ingredient</h2>
                            <ul>
                                {juice.strIngredient1 != null ? (<li>{juice.strIngredient1}</li>) :null}
                                {juice.strIngredient2 != null? (<li>{juice.strIngredient2}</li>) :null}
                                {juice.strIngredient3 != null? (<li>{juice.strIngredient3}</li>) :null}
                                {juice.strIngredient4 != null? (<li>{juice.strIngredient4}</li>) :null}
                                {juice.strIngredient5 != null? (<li>{juice.strIngredient5}</li>) :null}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}

export default Details
