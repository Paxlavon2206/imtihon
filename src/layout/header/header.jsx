import React from 'react'
import logo from '/header-logo.svg'
import { headerLink } from '../../data/data'
import search from "/search.svg"
import korzinka from "/icon.png"

export const Header = () => {
  return (
    <div className='container'>
    <div className='pt-[60px] pb-[60px] flex items-center'>
        <div className='w-[190px] mr-[50px]'>
            <img src={logo} alt="logo" />
        </div>
        <div className='flex gap-x-[30px] mr-[30px]'>
        {headerLink?.map((item)=> <ul key={item.name}>
          <li>
            <a className='text-customBlue text-[20px] font-bold' href={item.path}>{item.name}</a>
          </li>
        </ul>)}
        </div>
        <div>
          <form className='bg-primary w-[330px] font-custom flex justify-end items-end rounded-[36px] p-[5px] mr-[10px]'>
            <img className='items-end' src={search} alt="search" />
          </form>
        </div>
        <button className=' border-2 rounded-[36px] flex items-center p-[6px] gap-[3px]'>
            <img src={korzinka} alt="icon" />
            <h3 className='text-[18px]'>Cart (0)</h3>
          </button>
    </div>
    </div>
  )
}
