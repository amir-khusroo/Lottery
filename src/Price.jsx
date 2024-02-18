import './Price.css';
export default function ({oldPrice , newPrice}){
    return(
        <div id='price'>
            <span id='oldPrice'><sup>&#8377;</sup>{oldPrice}</span>
            &nbsp; &nbsp;
            <span> <sup>&#8377;</sup> {newPrice}</span>
        </div>
    );
}