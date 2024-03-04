import React from "react";
import { MainLayout } from "../../layout/main-layout";
import { Banner } from "../../components/banner/banner";
import aboutBg from "../../assets/about-bg.png";
import createBg from "../../assets/create-bg.png";
import { Create } from "../../components/create/create";
import icon from "/btn-icon.svg";
import trackor from "/tracktor.svg";
import { Button } from "../../components/button/button";
import { FaRegCircle } from "react-icons/fa";
import buy from "../../assets/buy.png"
import { buyData, expertData } from "../../data/data";
import { Subscribe } from "../../components/subscribe/subscribe";
export const About = () => {
  return (
    <MainLayout>
      <Banner img={aboutBg} isbutton={false} oddtitle="About Us" />
      <Create className="pt-[150px] flex pb-[70px]">
        <div className="w-[900px]">
          <img src={createBg} alt="img" />
        </div>
        <div className="w-[675px]">
          <h3 className="text-green-700 font-bold text-[36px] leading-[49px] ">
            About Us
          </h3>
          <h2 className="text-[50px] w-[500px] leading-[59px]  text-secondary font-bold mb-[14px]">
            We do Creative Things for Success
          </h2>
          <p className="text-colortext text-[18px] mb-[46px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
            <br />
            <br />
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
          <div className="flex mb-[60px]">
            <div className="flex gap-[15px] items-center">
              <img src={trackor} alt="img" />
              <h3 className="mb-[9px] w-[292px] text-[25px] leading-[29px] text-secondary font-extrabold">
                Modern Agriculture Equipment
              </h3>
            </div>
            <div className="flex gap-[15px] items-center">
              <img src={trackor} alt="img" />
              <h3 className="mb-[9px] w-[292px] text-[25px] leading-[29px] text-secondary font-extrabold">
                No growth hormones are used
              </h3>
            </div>
          </div>
          <Button className="cursor-pointer bg-btn w-[220px] flex items-center justify-center h-[79px] rounded-[16px] gap-[5px] leading-[23px] font-bold text-white text-[20px]">
            Explore Now <img src={icon} alt="icon" />
          </Button>
        </div>
      </Create>
      <Create className="bg-product pt-[190px]  pb-[190px]">
        <div className="container flex gap-[40px] mb-[70px]">
          <div className="w-[570px]">
            <h3  className="text-green-700 font-bold text-[36px] leading-[49px] ">Why Choose us?</h3>
            <h2 className="text-[50px] w-[550px] leading-[59px]  text-secondary font-bold mb-[14px]">We do not buy from the open market & traders.</h2>
            <p className="text-colortext text-[18px] mb-[36px]">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard  the 1500s, when an unknown</p>
            <Button className="flex rounded-[49px] gap-[7px] bg-btnBG pt-[29px] pr-[90px] pb-[29px] pl-[29px] items-center mb-[15px] text-[20px] leading-[23px] text-btn"><FaRegCircle className="text-green-700 font-extrabold"/>100% Natural Product</Button>
            <p className="text-colortext w-[444px]  left-[50px] text-[18px] mb-[36px]">Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
            <Button className="flex rounded-[49px] gap-[7px] bg-btnBG pt-[29px] pr-[90px] pb-[29px] pl-[29px] items-center mb-[15px] text-[20px] leading-[23px] text-btn"><FaRegCircle className="text-green-700 font-extrabold"/> Increases resistance</Button>
            <p className="text-colortext w-[444px]  left-[50px] text-[18px] mb-[36px]">Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
          </div>
          <div className="w-[700px]">
            <img src={buy} alt="img" />
          </div>
          
        </div>
        <div className="flex container gap-[30px]">
            {buyData?.map((item)=> 
            <div key={item.title} className=" text-center bg-white pt-[50px] pr-[38px] pb-[49px] rounded-[30px] pl-[38px]">
              <img className="w-[95px] mb-[15px] mr-auto ml-auto" src={item.icon} alt="img" />
              <h3 className="mb-[12px]  text-[25px] font-extrabold leading-[29px] text-btn">{item.title}</h3>
              <p className="w-[184px] text-colortext text-[18px] font-normal leading-[165%]">{item.text}</p>
            </div>
            )}
          </div>
      </Create>
      <div className="pb-[200px]">
        <div className="container text-center pt-[177px]">
          <h4 className="text-green-700 font-bold text-[36px] leading-[49px] ">Team</h4>
          <h3 className="mb-[16px] text-[50px] leading-[59px]  text-secondary font-bold">Our Organic Experts</h3>
          <p className="w-[852px] mr-auto ml-auto mb-[50px] text-colortext text-[18px] font-normal leading-[165%]">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
          <div className="flex gap-[30px]">
            {expertData?.map((item) => 
            <div key={item.name} className="w-[449px]  bg-product">
              <img src={item.img} alt="img" />
              <div className="pt-[35px] pl-[28px] pb-[34px] ">
              <h3 className="text-start text-[25px] font-bold leading-[29p] text-btn">{item.name}</h3>
              <div className="flex">
              <p className="mr-[215px] text-[22px] font-normal leading-[30px] text-green-600">{item.job}</p>
              <img src={item.icon} alt="icon" />
              </div>
              </div>
            </div>
            )}
          </div>
        </div>
      </div>
      <div className="mb-[100px]">
      <Subscribe/>
      </div>
    </MainLayout>
  );
};
