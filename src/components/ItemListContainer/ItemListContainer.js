import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount';

function ItemListContainer (props) {
    return (
        <section className="cuerpo">
            <h2>{props.greeting}</h2>
            <ItemCount stock={10} initial={0}/>
        </section>
    );
}

export default ItemListContainer;