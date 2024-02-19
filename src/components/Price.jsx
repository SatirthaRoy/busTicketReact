import React, { useContext } from 'react'
import { data } from '../App';

const Price = () => {
  const {seats, discount} = useContext(data)
  console.log(seats);
  return (
    <div>
      <div className="p-6 border-dashed border-[#03071233] border-b">
        <h3 className="text-[#030712] font-semibold text-2xl">Select Your Seat</h3>
      </div>
      <div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-dashed border-[#03071233]">
            <th className="p-4 text-[#030712] text-base font-medium">Seat <span id="seat-count" className="bg-[#1DD100]  text-white text-xs font-bold px-2 rounded-lg">{seats.length}</span></th>
            <th className="p-4 text-[#030712] text-base font-medium">class</th>
            <th className="p-4 text-[#030712] text-base font-medium">price</th>
          </tr>
        </thead>
        <tbody>
          {/* seat detail goes here */}
          {seats.map((seat,i)=> {
            return <tr key={i}>
            <th className="p-4 text-[#03071299] text-base font-normal">{seat}</th>
            <th className="p-4 text-[#03071299] text-base font-normal">Economy</th>
            <th className="p-4 text-[#03071299] text-base font-normal">550</th>
          </tr>
          })}
        </tbody>
      </table>
      </div>

      <div>
        <div className="flex justify-between *:text-[#030712] *:font-medium *:text-base">
          <h3>Total Price</h3>
          <h3>BDT <span id="total-price">{seats.length * 550}</span></h3>
        </div>

        {discount !== 0 && <div className="flex justify-between *:text-[#030712] *:font-medium *:text-base">
          <h3>Discount Price</h3>
          <h3>BDT <span id="total-price">{seats.length * 550 * discount}</span></h3>
        </div>}

        <div className="flex justify-between *:text-[#030712] *:font-medium *:text-base">
          <h3>Grand Price</h3>
          <h3>BDT <span id="grand-price">{seats.length * 550 - seats.length * 550 * discount}</span></h3>
        </div>
      </div>

    </div>
  )
}

export default Price