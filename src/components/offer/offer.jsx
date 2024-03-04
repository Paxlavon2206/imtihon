import React from 'react'
import { offerData } from '../../data/data'
import { Button } from '../button/button'
import icon from '/btn-icon.svg'
export const Offer = ({title="", subtile="",btn,img}) => {
  return (
    <div className='bg-btn pt-[200px] pb-[200px]'>
        <div className='pr-[20px] pl-[20px]'>
        <h3 className='text-start pt-10 text-green-700 font-normal text-[26px] leading-[49px]'>Offer</h3>
       <div className='flex'>
      <div>
      <h2 className='text-center text-[50px] leading-[59px] font-extrabold text-white mb-[50px]'>We Offer Organic For You</h2>
      </div>
      <div className='ml-[445px]'>
      <Button className="cursor-pointer bg-yellow w-[220px] flex items-center justify-center h-[79px] rounded-[16px] gap-[5px] leading-[23px] font-bold text-secondary text-[20px]">View All Product<img src={icon} alt="icon" /></Button>
      </div>
       <Button/>
       </div>
    <div className='flex gap-4 '>
    {offerData?.map((item)=> (
        <ul key={item.img}>
            <li>
                <img src={item.img} alt="img" />
            </li>
        </ul>
    ))}
    </div>
        </div>
    </div>
  )
}
