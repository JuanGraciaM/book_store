import './ItemListContainer.css'

function ItemListContainer (props) {
    return (
        <section className="cuerpo">
            <h2>{props.greeting}</h2>
        </section>
    );
}

export default ItemListContainer;