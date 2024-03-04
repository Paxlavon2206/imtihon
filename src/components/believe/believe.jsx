import React from 'react'
import { Button } from '../button/button'
import btn_icon from '/btn-icon.svg'

export const Believe = ({img={}, topTitle="", title="", text="", icon={},icon2={}, subtitle1="", subtitle2="", subtext1="", subtext2="", isButton}) => {
  return (
    <div className='relative bg-believe pb-[200px] mb-[20px]'>
    <div className=''>
        <img src={img} alt="img" />
    </div>
    <div className='absolute w-[600px] top-[120px] right-[30px]'>
        <h3 className='text-green-700 font-bold text-[36px] leading-[49px] '>{topTitle}</h3>
        <h2 className='text-[50px] leading-[59px]  text-secondary font-bold mb-[14px]'>{title}</h2>
        <p className='text-colortext text-[18px] mb-[46px]'>{text}</p>
        <div className='flex mb-[30px] gap-[20px]'>
            <img src={icon} alt="icon" />
            <div>
            <h4 className='mb-[9px] text-[25px] leading-[29px] text-secondary font-extrabold'>{subtitle1}</h4>
            <p className='text-colortext text-[18px] mb-[46px]'>{subtext1}</p>
            </div>
        </div>
        <div className='flex gap-[20px] mb-[20px]'>
            <img src={icon2} alt="icon" />
           <div>
           <h4 className='mb-[9px] text-[25px] leading-[29px] text-secondary font-extrabold'>{subtitle2}</h4>
            <p className='text-colortext text-[18px] mb-[46px]'>{subtext2}</p>
           </div>
        </div>
       {isButton?  <Button className="cursor-pointer bg-btn text-white flex gap-2 items-center px-[39px] py-[28px] rounded-[16px]">Shop Now<img src={btn_icon} alt="icon" /></Button> : ""}
    </div>
    </div>
  )
}
