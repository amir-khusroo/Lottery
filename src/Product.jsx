import Price from './Price';
import './Product.css'
function Product({title, ind}) {
    let oldPrice=["1,29,999" , "2,199", "70,999","1,999"];
    let newPrice=["1,19,999" , "1,899", "68,999","1,399"];
    let dis=["8000 DPI", "Bluetooth connectivity", "premium Design","Wireless"]

    return(
        <div id="Product">

            <div id='title'><h3>{title}</h3></div>
            <div id='dis'><p>{dis[ind]}</p></div>
            <div id='price'><Price oldPrice={oldPrice[ind]} newPrice={newPrice[ind]}/></div>
        </div>
    );
}
export default Product;