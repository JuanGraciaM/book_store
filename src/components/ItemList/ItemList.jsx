import './ItemList.css'
import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({ listadoProductos }) => {

    console.log('listadoProductos', listadoProductos)

    return (

        <div className="cards-container">
            <div className="cards-container__div">
                {listadoProductos.map((unProducto) => <Item key={unProducto.id} name={unProducto.name} image={unProducto.img} price={unProducto.price} stock={unProducto.stock}/>)}
            </div>
        </div>

    )
}