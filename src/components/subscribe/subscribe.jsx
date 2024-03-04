import React from 'react'
import subscribe from "/subscribe-bg.png"
export const Subscribe = () => {
  return (
    <div className='container relative '> 
        <img src={subscribe} alt="img" />
        <h3 className='absolute text-white text-[50px] leading-[59px] font-bold w-[357px] left-[70px] top-[75px]'>Subscribe to our Newsletter</h3>
        <form className='absolute top-24 right-[70px]'>
            <input className='outline-none mr-[6px] pt-[28px] pr-[170px] pb-[30px] pl-[23px] rounded-[16px]' type="email"
            placeholder='Your Email Address'
             />
            <button className='rounded-[16px] bg-btn text-white py-[28px] px-[47px] text-[20px] leading-[23px] font-bold' type='submit'>Subscribe</button>
        </form>
    </div>
  )
}
