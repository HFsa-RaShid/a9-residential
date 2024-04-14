import { useEffect, useState } from "react";
import Bank from "./Bank";


const Banks = () => {
    const [banks,setBanks]=useState([]);
    useEffect(()=>{
        fetch('bank.json')
        .then(res => res.json())
        .then(data => setBanks(data))
    },[])
    return (
        <div className="mx-5 lg:mx-20">
            <h1  className="mb-10 mt-10 text-[35px] text-center">Banks</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    banks.map(bank => <Bank key={bank.id} bank={bank}></Bank>)
                }
            </div>
        </div>
    );
};

export default Banks;