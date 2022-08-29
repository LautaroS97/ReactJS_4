import Contador from './subcomponents/Counter.js';

const ItemListContainer = ({catalog}) => {
    return (
        <div>
            <section>
            <div>
            <p className="catalog">
            {catalog}
            <Contador/>
            </p>
            </div>
            </section>
        </div>
        
    )
}

export default ItemListContainer;