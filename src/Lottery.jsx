import { useState } from "react";
import {genTicket , sum} from "./lotteryHelper";
export default function(){
    let [ticket, setTicket]=useState(genTicket(3));
    function newticket(){
       setTicket(genTicket(3)); 
    }
    let isSum= sum(ticket)===15;
    return (
        <div style={{textAlign:"center"}}>
            <h1>Lottery Ticket</h1>
            <br />
            <div>
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <br />
            <button onClick={newticket}>Buy New Ticket</button>
            <br />
            <h2 style={{color:"green"}}>{isSum && "Congretulation you have won!"}</h2>
        </div>
    );
}