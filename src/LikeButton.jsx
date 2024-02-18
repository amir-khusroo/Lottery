import { useState } from "react";
import './LikeButton.css';
export default function LikeButton() {
    let [isLiked , setIsLiked]=useState(false);
    let [count , setCount]=useState(0);
    let cliked=()=>{
        setIsLiked(!isLiked);
        setCount(count+1);
    }
    return(
        <div id="like">
            <div>Like Button</div>
            <p onClick={cliked}>
                {
                    isLiked ? (<i className="fa-solid fa-heart" id="solidLike"></i>) : (<i className="fa-regular fa-heart"></i>)
                }
            </p>
            <p>{Math.ceil(count/2)}</p>
        </div>
    );
}