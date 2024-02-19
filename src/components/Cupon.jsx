import React, { useContext, useState } from 'react'
import { data } from '../App'

const Cupon = () => {
  const cupons = ['NEW15', 'Couple 20'];
  let [cuponIn, setCuponIn] = useState('');
  let [cuponSuccess, setCuponSuccess] = useState(2);
  const {seats, discount, setDiscount} = useContext(data);
  let buttonClass = seats.length !== 4 ? "bg-gray-400 rounded-lg text-base font-semibold text-white px-5 py-3" : "bg-[#1DD100] rounded-lg text-base font-semibold text-white px-5 py-3";
  return (
    <div>
      <div>
        {(discount === 0) && <>
          <input type="text" placeholder="Have any copupon?" className="text-sm font-normal text-[#03071266] p-5 rounded-xl" onChange={(e)=> setCuponIn(e.target.value)} value={cuponIn}/>
        <button disabled={seats.length !== 4} className={buttonClass} onClick={()=>{
          setCuponSuccess(()=> {
            if(cupons.includes(cuponIn)){
              if(cuponIn === 'NEW15') {
                setDiscount(0.15);
              } else {
                setDiscount(0.2)
              }
              return 1;
            }
            return 0;
          });
        }}>Apply</button>
        </>}
        
      </div>
      {cuponSuccess === 0 && <small id="invalid" className="pl-3 text-sm text-red-500 font-normal inter">Invalid cupon</small>}
    </div>
  )
}

export default Cupon