import React from 'react'


export const What = ({img,title="",subtitle="", img2, star,p="",con="",name="",nav, img3}) => {
  return (
    <>
    <div className='relative'>
  <img className='w-full' src={img} alt="img" />
  <div className='absolute top-0 left-0 w-full h-full flex flex-col'>
    <h2 className='text-center text-xl text-green-700 font-bold z-10 pt-[100px] leading-[49px] pl-[40px]'>{title}</h2>
    <h3 className='text-center z-10 text-[50px] leading-[59px] pl-[40px] text-secondary font-extrabold mb-[51px]'>{subtitle}</h3>
    <div className='w-[110px] mr-[auto] ml-[auto]'>
    <img className='w-[115px] h-[125px] items-center ml-[20px] mb-[20px]' src={img2} alt="" />
    <img className='ml-[35px] mb-[25px]' src={star} alt="" />
    </div>
    <p className='w-[780px] text-center mr-auto ml-auto text-colortext text-[18px] leading-[165%] mb-[20px]'>{p}</p>
    <h3 className='text-center pl-[40px] text-secondary text-[25px] leading-[29px]'>{name}</h3>
    <p className='text-center text-secondary font-normal pl-[40px] text-[15px] leading-[165%] mb-[50px]'>{con}</p>
   <div className='w-[800px] mr-auto ml-auto pl-[40px]'>
   <img src={img3} alt="" />
   </div>
 
  </div>
  
</div>
    </>
  )
}
