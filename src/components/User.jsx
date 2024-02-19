import React, { useContext, useState } from 'react'
import { data } from '../App';

const User = () => {
  let {seats} = useContext(data);
  let [info, setInfo] = useState({name: '', number: '', email: ''});
  let buttClass = info.number.length !== 0 ? "bg-[#1DD100] text-white font-extrabold text-xl py-5 rounded-xl" : "bg-gray-400 text-white font-extrabold text-xl py-5 rounded-xl";

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (<>
    <form action="" className="space-y-6" onSubmit={handleSubmit}>
      <label for="name" className="flex flex-col justify-stretch text-[#030712] font-semibold text-base space-y-4">
        Passenger Name* <br/>
        <input type="text" placeholder="Enter your name" className="border border-[#0307121A] text-sm font-normal text-[#03071266] p-5 rounded-xl" onChange={e=>setInfo({...info, name: e.target.value}) } value={info.name}/>
      </label>
      <label for="number" className="flex flex-col justify-stretch text-[#030712] font-semibold text-base space-y-4">
        Phone Number* <br/>
        <input id="phone" type="number" placeholder="Enter your phone number" className="border border-[#0307121A] text-sm font-normal text-[#03071266] p-5 rounded-xl" onChange={e=>setInfo({...info, number: e.target.value}) } value={info.number}/>
      </label>
      <label for="name" className="flex flex-col justify-stretch text-[#030712] font-semibold text-base space-y-4">
        Email ID <br/>
        <input type="email" placeholder="Enter your email id" className="border border-[#0307121A] text-sm font-normal text-[#03071266] p-5 rounded-xl" onChange={e=>setInfo({...info, email: e.target.value}) } value={info.email}/>
      </label>
      <label for="name" className="flex flex-col justify-stretch text-[#030712] font-semibold text-base space-y-4">
        <button id="submit-button" className={buttClass} onClick={()=>document.getElementById('my_modal_1').showModal()} disabled={(info.number.length === 0 || seats.length === 0)}>Next</button>
      </label>
    </form>


    <dialog id="my_modal_1" class="modal roboto">
      <div class="modal-box flex flex-col gap-4 justify-center items-center p-16">
        <h3 class="font-bold text-2xl text-[#27AE60] text-center">SUCCESS</h3>
        <p class="py-4 text-[#4A4A4A] text-lg font-light text-center">
          <span class="font-medium">Thank you for Booking Our Bus Seats. 
            We are working hard to find the best service and deals for you.</span> <br/>
          Shortly you will find a confirmation in your email.
        </p>
        <div class="modal-action">
          <form method="dialog">
            <button class="btn bg-[#27AE60] rounded-full px-20 text-white font-semibold text-lg hover:bg-[#299c59]">Continue</button>
          </form>
        </div>
      </div>
    </dialog>
    </>)
}

export default User