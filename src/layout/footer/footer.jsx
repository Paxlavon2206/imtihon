import React from 'react'
import logo from '/header-logo.svg'
import media from '/follow.svg'
export const Footer = () => {
  return (
   <footer className='container'>
    <div className='flex border-t-2 pt-[150px] pb-[40px] border-t-dashed border-b-2 border-b-solid'>
      <div className=' text-end w-[235px] mr-[50px]'>
        <h3 className='text-customBlue text-[30px] font-bold mb-[30px]'>Contact Us</h3>
        <p className='text-customBlue text-[18px] font-bold'>Email</p>
        <p className='mb-[25px] text-colortext text-[18px] '>needhelp@Organia.com</p>
        <p className='text-customBlue text-[18px] font-bold'>Phone</p>
        <p className='mb-[25px] text-colortext text-[18px]'>666 888 888</p>
        <p className='text-customBlue text-[18px] font-bold'>Address</p>
        <p className='text-colortext  text-[18px] '>88 road, borklyn street, USA</p>
      </div>
      <span className='w-[1px] bg-fithary'></span>
      <div className='w-[540px] ml-[40px] mr-[40px]
      '>
        <div>
          <img className='mr-auto ml-auto mb-[23px]' src={logo} alt="logo" />
          <p className='text-colortext text-[18px] text-center mb-[49px]'>Simply dummy text of the printing and typesetting industry.
Lorem Ipsum simply dummy text of the printing </p>
<img className='mr-auto ml-auto' src={media} alt="media" />
        </div>
      </div>
      <span className='w-[1px] bg-fithary'></span>
      <div className=' text w-[235px] ml-[50px]'>
        <h3 className='text-customBlue text-[30px] font-bold mb-[30px]'>Utility Pages</h3>
        <p className='mb-[25px] text-colortext text-[18px]'>Style Guide</p>
        <p className='mb-[25px] text-colortext text-[18px] '>404 Not Found</p>
        <p className='mb-[25px] text-colortext text-[18px]'>Password Protected</p>
        <p className='mb-[25px] text-colortext text-[18px]'>Licences</p>
        <p className='mb-[25px] text-colortext text-[18px]'>Changelog</p>
      </div>
    </div>
    <p className='text-center pt-[17px] pb-[17px]'>Copyright © Organick | Designed by VictorFlow Templates - Powered by Webflow</p>
   </footer>
  )
}

