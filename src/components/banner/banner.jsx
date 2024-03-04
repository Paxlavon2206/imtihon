import React from 'react'
import icon from '/btn-icon.svg'

import { Button } from '../button/button'
export const Banner = ({img, isButton, title="",subtitle="", img2, star,p,name,nav, img3, oddtitle=""}) => {
  return (
    <>
    <div className='relative'>
  <img className='w-full' src={img} alt="img" />
  <div className='absolute top-0 left-0 w-full h-full flex flex-col'>
    <h2 className='text-xl text-green-700 font-bold z-10 pt-[100px] leading-[49px] pl-[40px]'>{title}</h2>
    <h2 className='text-center text-[70px] font-extrabold leading-[82px] text-btn'>{oddtitle}</h2>
    <h3 className='w-[530px] h-[276px] z-10 text-[70px] leading-[82px] pl-[40px] text-secondary font-bold'>{subtitle}</h3>
    <img src={img2} alt="" />
    <img src={star} alt="" />
    <p>{p}</p>
    <h3>{name}</h3>
    <img src={nav} alt="" />
    {isButton ?
   <Button className="cursor-pointer bg-yellow w-[220px] flex items-center justify-center h-[79px] rounded-[16px] gap-[5px] ml-[40px] leading-[23px] font-bold text-secondary text-[20px]">Explore Now <img src={icon} alt="icon" /></Button> : <></>}
  </div>
  <img src={img3} alt="" />
</div>
    </>
  )
}
