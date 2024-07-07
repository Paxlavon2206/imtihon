import React from 'react'
import { useParams } from 'react-router-dom'
import { productData } from '../../data/data'
import { MainLayout } from '../../layout/main-layout'
import { Banner } from '../banner/banner'
import shopSingle from "/shop-single.png"
import { Button } from '../button/button'
import btn_icon from '/btn-icon.svg'
import { Subscribe } from '../subscribe/subscribe'

export const ProductDetail = () => {
    const [count, setCount] = React.useState(0);
    const Counter = () => {
     setCount(count + 1)
    }
    const params = useParams();
    const result = productData.find((obj)=> obj.id == +params.slug)
    const filteredSameData = productData.filter((item) => result.category == item.category)
  return (
    <MainLayout>
        <div className='mb-[114px]'>
        <Banner img={shopSingle} isbutton={false} oddtitle="Shop Single" />
        </div>
        <div className='container'>
        <div className=' flex items-center'>
        <div className='mb-[70px] relative'>
            <img src={result.img} alt="img" />
            <Button className="absolute top-[15px] left-[15px] bg-btn text-white rounded-[8px] px-[12px]">{result.category}</Button>
        </div>
        <div className='w-[600px] ml-[83px]'>
            <h3 className='text-btn text-[40px] font-semibold leading-[47px] mb-2'>{result.title}</h3>
            <img className='mb-[9px]' src={result.star} alt="icon" />
            <div className='flex gap-[9px] mb-[27px]'>
            <h4 className='line-through text-line'>{result.price1}</h4>
            <h4 className="text-secondary text-[18px] font-bold leading-[25px]">{result.price2}</h4>
            </div>
            <p className='w-[550px] text-colortext text-[18px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            <div className='flex items-center mt-[35px] gap-[22px]'>
                <p className='text-btn text-[20px] font-bold leading-[23px]'>Quantity :</p>
                <button onClick={Counter} className='text-btn border-solid border-2 px-[61px] py-[29px] rounded-[16px]'>{count}</button>
                <Button className="cursor-pointer bg-btn text-white flex gap-2 items-center px-[39px] py-[28px] rounded-[16px]">Add To Cart<img src={btn_icon} alt="icon" /></Button>
               
            </div>
            
        </div>
        
        </div>
        <div className='flex gap-[20px] mr-auto ml-auto w-[700px] mb-[27px]'>
                <Button className="cursor-pointer bg-btn text-white flex gap-2 items-center px-[57px] py-[28px] rounded-[16px] text-[25px] font-bold">Product Description</Button>
                <Button className="cursor-pointer bg-detailBtn text-btn flex gap-2 items-center px-[80px] py-[28px] text-[25px] rounded-[16px] leading-[34px] font-bold">Additional Info</Button>
                </div>
                <p className='text-center w-[990px] mr-auto ml-auto pb-[140px]  text-colortext text-[18px]'>Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.</p>
        </div>
        <div className='container'>
            <h2 className='text-btn text-center text-[50px] font-extrabold leading-[59px] mb-[40px]'>Related Products</h2>
           <div className='flex justify-evenly mb-[100px]'>
           {filteredSameData.map((item)=>
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
          </ul>)}
           </div>
           <Subscribe/>
        </div>
       
      
    </MainLayout>
  )
}
