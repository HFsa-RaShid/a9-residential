import { useEffect, useState } from "react";
import Card from "../card/Card";


const EstateCards = () => {
    const [cards,setCards]=useState([]);
    useEffect(()=>{
        fetch('residence.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    return (
        <div className="mx-5 lg:mx-20">
            <h1  className="mb-10 mt-10 text-[35px] text-center">REAL ESTATE LISTINGS</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>

            
        </div>
    );
};

export default EstateCards;