import React from 'react'
import './Item.css'

export const Item = (props) => {

    return (

        <div className="card">
            <div className="card__div-img">
                <img src={require(`../../assets/${props.image}`)} alt={props.name}/>
            </div>
            <div className="card__div-info">
                <h5>{props.name}</h5>
                <p>$ {props.price}</p>
                <p>Stock disponible: {props.stock}</p>
                <button>Ver más</button>
            </div>
        </div>
        
    )
}