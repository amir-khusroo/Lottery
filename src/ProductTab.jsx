import Product from "./product";
import './ProductTab.css'

function ProductTab() {
    return (
        <div className="ProductTab">
            <Product title="Apple Macbook" ind={0}/>
            <Product title="Digital Pencil" ind={1}/>
            <Product title="iPhone 14 pro max" ind={2}/>
            <Product title="hp backlite keybord" ind={3}/>
        </div>
    )
}
export default ProductTab;