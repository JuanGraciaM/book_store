import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';
import React, { useEffect, useState } from 'react';
import { listadoProdutos } from '../../data/asyncMock';
import { ItemList } from '../ItemList/ItemList';
import Swal from 'sweetalert2';



function ItemListContainer () {

  const onAdd = (a,b) => {
    if(a) {
      Swal.fire({
        icon: 'success',
        title: `Agregaste ${b} unidades al carrito`,
        showConfirmButton: true,
      })
    }
  }

    const [productos, setProductos] = useState([])

    const getProductos = () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            listadoProdutos.length > 0 ?
              resolve(listadoProdutos)
              :
              reject("No hay datos")
          }, 2000);
        }
        )
      }

      useEffect(() => {
        getProductos()
          .then(res => setProductos(res))
          .catch(err => console.log(err))
      }, []) 

    return (
        <>
            <ItemCount stock={10} initial={0} onAdd={onAdd}/>
            <div>
                <ItemList listadoProductos={productos} /> 
            </div>
        </>
    );
}

export default ItemListContainer;