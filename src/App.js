import { createContext, useContext, useState } from "react";
import Price from "./components/Price";
import Cupon from "./components/Cupon";

export const data = createContext();
// tickets component
function Tickets() {
  const {clickHandler} = useContext(data);
  const seatArr = 'ABCDEFGHIJ'.split('');
  return <>
    {seatArr.map((seat, index)=> {
    return <div key={index} className="grid grid-cols-4 gap-4">
      <button onClick={(e)=> {
        clickHandler(e,`${seat}1`);
    
      }} class="font-medium text-lg text-[#03071280] bg-[#F7F8F8] px-5 py-3 lg:px-10 lg:py-5 rounded-xl cursor-pointer">{seat}1</button>
      <button onClick={(e)=> {
        clickHandler(e,`${seat}2`);
    
      }} class="font-medium text-lg text-[#03071280] bg-[#F7F8F8] px-5 py-3 lg:px-10 lg:py-5 rounded-xl cursor-pointer">{seat}2</button>
      <button onClick={(e)=> {
        clickHandler(e,`${seat}3`);
    
      }} class="font-medium text-lg text-[#03071280] bg-[#F7F8F8] px-5 py-3 lg:px-10 lg:py-5 rounded-xl cursor-pointer">{seat}3</button>
      <button onClick={(e)=> {
        clickHandler(e,`${seat}4`);
    
      }} class="font-medium text-lg text-[#03071280] bg-[#F7F8F8] px-5 py-3 lg:px-10 lg:py-5 rounded-xl cursor-pointer">{seat}4</button>
    </div>
  })}
  </>
}

// ticket price and details
function Details () {
 
  return <div className="lg:w-[30%]">
      <Price/>
      <Cupon/>
  </div>
}

function App() {
  let [seats, setSeats] = useState([]);
  let[discount, setDiscount] = useState(0);
  const clickHandler = (e,seat) => {
    if(seats.includes(seat)){
      setSeats(seats.filter(s => seat !== s));
      e.target.classList.toggle('bg-green-400');
      e.target.classList.toggle('text-white');
      if(seats.length <= 4) {
        console.log('setting 0');
        setDiscount(0);
      }
    } else {
      if(seats.length < 4) {
        setSeats([...seats, seat]);
        e.target.classList.toggle('bg-green-400');
        e.target.classList.toggle('text-white');
      }
    } 
  }
 
  return <div className="w-full flex justify-between gap-6">
    <div className="w-[70%] grid grid-rows-10 gap-4">
      <data.Provider value={{clickHandler}}>
        <Tickets/>
      </data.Provider>
    </div>
  {/* ticekts detail price show */}
    <data.Provider value={{seats, discount, setDiscount}}>
      <Details/>
    </data.Provider>
  </div>
}

export default App;
