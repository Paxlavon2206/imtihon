import React from "react";
import { MainLayout } from "../../layout/main-layout";
import { Banner } from "../../components/banner/banner";
import believe1 from "/icon1.svg";
import believe2 from "/icon2.svg";
import believeImg from "../../assets/believe1.png";
import img from "../../assets/hero-bg.png";
import { hero2Data, productData } from "../../data/data";
import { Believe } from "../../components/believe/believe";
import { Button } from "../../components/button/button";
import btn_icon from "/btn-icon.svg";
import whatbg from "/what-bg.png";
import img2 from "/img2.svg";
import star from "/star.svg";
import count from "/counter.svg";
import icon from "/btn-icon.svg";
import food1 from "/food1.png";
import food2 from "/food2.png";
import eco from "/eco-bg.png";
import vector from "/vector.svg";
import triple1 from "/triple1.png";
import triple2 from "/triple2.png";
import triple3 from "/triple3.png";
import { What } from "../../components/what/what";
import { Offer } from "../../components/offer/offer";
import { Subscribe } from "../../components/subscribe/subscribe";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <MainLayout>
        <div className="mb-[140px]">
          <Banner
            img={img}
            isButton = {true}
            title="100% Natural Food"
            subtitle="Choose the best healthier way of life"
          />
        </div>
        <div className="flex p-6 gap-[30px] pb-[88px]">
          {hero2Data?.map((item, index) => (
            <ul className="relative" key={item.name}>
              <li>
                <img className="-z-10" src={item.img} alt="img" />
                <h3
                  className={`absolute z-10 top-[100px] left-[50px] text-xl font-bold ${
                    index % 2 === 0 ? "text-white" : "text-green-700"
                  }`}
                >
                  {item.name}
                </h3>
                <h2
                  className={`w-[260px] font-800 text-[40px] font-bold absolute z-10 top-[130px] left-[50px] tracking-normal leading-[47px] ${
                    index % 2 === 0 ? "text-white" : "text-secondary"
                  }`}
                >
                  {item.text}
                </h2>
              </li>
            </ul>
          ))}
        </div>
        <Believe
          img={believeImg}
          topTitle="About Us"
          title="We Believe in Working Accredited Farmers"
          text="Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
          icon={believe1}
          subtitle1="Organic Foods Only"
          subtext1="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
          icon2={believe2}
          subtitle2="Quality Standards"
          subtext2="Simply dummy text of the printing and typesetting industry. Lorem Ipsum"
        />
        <h3 className="text-center pt-10 text-green-700 font-bold text-[36px] leading-[49px] mb-[8px]">
          Categories{" "}
        </h3>
        <h2 className="text-center text-[50px] leading-[59px] font-extrabold text-secondary mb-[40px]">
          Our Products
        </h2>
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
              </ul></Link>
            ))}
          </div>
          <Button className="cursor-pointer bg-btn text-white flex gap-2 items-center text-[20px] leading-[23px] px-[39px] py-[28px] rounded-[16px] mr-[auto] ml-[auto] mb-[200px]">
            Load More
            <img src={btn_icon} alt="icon" />
          </Button>
        </div>
        <What
          img={whatbg}
          title="Testimonial"
          subtitle="What Our Customer Saying?"
          img2={img2}
          star={star}
          p="Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been."
          name="Sara Taylor"
          con="Consumer"
          img3={count}
        />
        <Offer />
        <div className="flex relative">
          <img className="w-[680px] -z-10 " src={eco} alt="img" />
          <div className="">
            <div className="absolute z-10 w-[640px] h-[570px] bg-white right-[40px] mt-[60px] pl-[60px]">
              <h3 className="text-start pt-10 text-green-700 font-normal text-[26px] leading-[49px]">
                Eco Friendly
              </h3>
              <h2 className="text-secondary text-[50px] font-extrabold leading-[59px] tracking-normal mb-[20px]">
                Econis is a Friendly Organic Store
              </h2>
              <h4 className="text-secondary text-[25px] font-medium leading-[29px]">
                Start with Our Company First
              </h4>
              <p className="text-colortext text-[18px] mb-[15px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
              <h4 className="text-secondary text-[25px] font-medium leading-[29px]">
                Learn How to Grow Yourself
              </h4>
              <p className="text-colortext text-[18px] mb-[15px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
              <h4 className="text-secondary text-[25px] font-medium leading-[29px]">
                Farming Strategies of Today
              </h4>
              <p className="text-colortext text-[18px] mb-[15px]">
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-tripleBg pt-[180px] pb-[180px] flex gap-[20px]">
          <div className="relative w-[425px] h-auto">
            <img src={triple1} alt="img" />
            <Button className="text-btn absolute top-[41%] right-[25%] bg-white pt-[23px] pb-[23px] pr-[53px] pl-[53px] rounded-[20px] ">
              Organic Juice
            </Button>
          </div>
          <div className="relative w-[425px] h-auto">
            <img src={triple2} alt="img" />
            <Button className="text-btn absolute top-[41%] right-[97px] bg-white pt-[23px] pb-[23px] pr-[53px] pl-[53px] rounded-[20px] ">
              Organic Food
            </Button>
          </div>
          <div className="relative w-[425px] h-auto">
            <img src={triple3} alt="img" />
            <Button className="text-btn absolute top-[41%] right-[97px] bg-white pt-[23px] pb-[23px] pr-[53px] pl-[53px] rounded-[20px] ">
              Nuts Cookis
            </Button>
          </div>
        </div>
        <div className="container pt-[170px] pb-[170px]">
          <h3 className="text-start pt-10 text-green-700 font-normal text-[26px] leading-[49px]">
            News
          </h3>
          <div className="flex items-center">
            <h2 className="text-secondary w-[700px] text-[50px] font-extrabold leading-[59px] tracking-normal mb-[40px]">
              Discover weekly content about organic food, & more
            </h2>
            <Button className="flex absolute right-[20px] items-center gap-2 rounded-[16px] border-solid h-[80px] border-btn font-bold pt-[28px] pb-[29px] pr-[40px] pl-[40px] border-2 text-btn">
              More News <img src={icon} alt="icon" />
            </Button>
          </div>
          <div className="flex gap-[40px]">
            <div className="w-[700px] relative ">
              <img className=" rounded-[20px]" src={food1} alt="img" />
              <div className="w-[500px] h-[300px] absolute -bottom-[20%] left-[50px] text-btn bg-white  border-2 rounded-[30px]">
                <div className="pt-[30px] pl-[25px]">
                  <div className="flex items-center gap-3 mb-[15px]">
                    <img src={vector} alt="icon" />
                    <h4>By Rachi Card</h4>
                  </div>
                  <h3 className="text-btn text-[20px] leading-[29px] font-bold mb-[5px]">
                    The Benefits of Vitamin D & How to Get It
                  </h3>
                  <p className="text-colortext w-[410px] mb-[15px]">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                  <Button className="cursor-pointer bg-yellow w-[220px] flex items-center justify-center h-[79px] rounded-[16px] gap-[5px] leading-[23px] font-bold text-secondary text-[20px]">
                    Read More
                    <img src={icon} alt="icon" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-[700px] relative">
              <img className="rounded-[20px]" src={food2} alt="img" />
              <div className="w-[500px] bg-white rounded-[30px] absolute pb-[60px] border-2 -bottom-[20%] left-[50px]">
                <div className="pt-[30px] pl-[25px]">
                  <div className="flex items-center gap-3 mb-[15px]">
                    <img src={vector} alt="icon" />
                    <h4>By Rachi Card</h4>
                  </div>
                  <h3 className="text-btn text-[20px] leading-[29px] font-bold mb-[5px]">
                    Our Favourite Summertime Tommeto
                  </h3>
                  <p className="text-colortext w-[410px] mb-[15px]">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum
                  </p>
                  <Button className="cursor-pointer bg-yellow w-[220px] flex items-center justify-center h-[79px] rounded-[16px] gap-[5px] leading-[23px] font-bold text-secondary text-[20px]">
                    Read More
                    <img src={icon} alt="icon" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Subscribe />
      </MainLayout>
    </>
  );
};
