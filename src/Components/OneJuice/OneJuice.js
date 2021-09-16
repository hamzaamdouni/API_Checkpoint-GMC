import React from 'react'
import { Link } from 'react-router-dom'
import './OneJuice.css'

const OneJuice = ({juice}) => {

    const style = {
        Container : {
            background : `url(${juice.strDrinkThumb})`,
            backgroundSize: '100%',
        },
        Clink : {
            textDecoration: 'none',
            transition: 'color 0.5s ease',
            color: 'rgb(230, 247, 3)'
        }
    }
    return (
        <Link to={`/lab/details/${juice.idDrink}`} style={style.Clink}>
    <div className="container" style={style.Container}>
        <div className="overlay">
            <div className="items" />
                <div className="items head">
                    <p>{juice.strDrink}</p>
                    <hr />
                </div>
            <div className="items price">
                <p className="new">{juice.strAlcoholic}</p>
                <p className="new">{juice.strCategory}</p>
            </div>
            <div className="items cart">
                <span>{juice.strGlass}</span>
            </div>
        </div>
    </div>
    </Link>
    )
}

export default OneJuice
