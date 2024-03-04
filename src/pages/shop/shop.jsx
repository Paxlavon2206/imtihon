import React from 'react'
import { MainLayout } from '../../layout/main-layout'
import { Banner } from '../../components/banner/banner'
import shopBg from "/shop-bg.png"
import { productData } from '../../data/data'
import { Button } from '../../components/button/button'
import btn_icon from "/btn-icon.svg";
import { Subscribe } from '../../components/subscribe/subscribe'
import { Link } from 'react-router-dom'

export const Shop = () => {
  return (
   <MainLayout>
    <div className='mb-[90px]'>
    <Banner img={shopBg} oddtitle='Shop'/>
    </div>
    <div className="pr-[20px] pl-[20px]">
          <div className="grid grid-cols-4 gap-4 mb-[122px]">
            {productData?.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`}>
              <ul >
                <li>
                  <div className="relative">
                    <img className="" src={item.img} alt="img" />
                    <Button className="absolute top-[15px] left-[15px] bg-btn text-white rounded-[8px] px-[12px]">{item.category}</Button>
                    <h3 className="absolute bottom-[60px] left-[30px] text-center justify-bottom text-secondary font-semibold text-[20px] leading-[23px] ">
                      {item.title}
                    </h3>
                    <div className="flex absolute bottom-[10px] left-[30px] items-center gap-[60px]">
                      <div className="flex gap-[7px] items-center text-[15px] leading-[20px]">
                        <h4 className="line-through text-line">
                          {item.price1}
                        </h4>
                        <h4 className="text-secondary text-[18px] font-bold leading-[25px]">
                          {item.price2}
                        </h4>
                      </div>
                      <div>
                        <img src={item.star} alt="icon" />
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              </Link>
            ))}
          </div>
         <div className='mb-[120px]'>
         <Subscribe/>
         </div>
        </div>
   </MainLayout>
  )
}
