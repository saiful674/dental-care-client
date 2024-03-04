"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// banner image
import BannerImg1 from "../../assets/banner/banner-1.jpg";
import BannerImg2 from "../../assets/banner/banner-2.jpg";
import BannerImg3 from "../../assets/banner/banner-3.jpg";

import BannerIcon1 from "../../assets/banner/d1.png";
import BannerIcon2 from "../../assets/banner/d2.png";
import BannerIcon3 from "../../assets/banner/d3.png";
import BannerIcon4 from "../../assets/banner/d5.png";
import BannerIcon5 from "../../assets/banner/d6.png";
import BannerIcon6 from "../../assets/banner/d7.png";
// import required modules
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
const Banner = () => {
  const bannerList = [
    { icon: BannerIcon1, text: "Oral Examination" },
    { icon: BannerIcon3, text: "Dentures & Repeairs" },
    { icon: BannerIcon4, text: "Root Cleans" },
    { icon: BannerIcon2, text: "Braces & Bondiq" },
    { icon: BannerIcon5, text: "Crowns & Caps" },
    { icon: BannerIcon6, text: "Extrections & Gum Surgerey" },
  ];
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide className="relative">
        <Image
          src={BannerImg2}
          alt="Banner Image"
          className="min-h-screen w-full"
        />
        {/* <div className="overlay absolute inset-0 bg-black opacity-65 z-0"></div> */}
        <div className=" max-w-7xl mx-auto px-5 absolute top-[50%] -translate-y-[50%] lg:left-[55%] ">
          <h2 className="text-7xl font-medium">
            Make Your <br />
            <span className="font-semibold text-blue-500">Smile Shine</span>
          </h2>
          <p className="text-5xl mb-2">Expreience A Lot Brighter</p>
          <p>With best Facilities and best equipments, you are in safe hands</p>
          <div className="flex gap-5 mt-5 ">
            <Button variant="bordered" radius="none" className="font-medium">
              Consult A Dentist
            </Button>
            <Button
              radius="none"
              color="primary"
              variant="bordered"
              className="font-medium"
            >
              Book An Appointment
            </Button>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className=" max-w-7xl mx-auto px-5 absolute top-[50%] -translate-y-[50%] lg:left-[50%] ">
          <h2 className="text-6xl font-medium">
            Expertise In Major <br />
            <span className="font-semibold text-blue-500">
              Dental Procedures
            </span>
            <div className="space-y- mt-5">
              {bannerList.map((item, index) => (
                <div key={index} className="flex gap-5 text-xl items-center">
                  <Image src={item.icon} alt="Banner Icon" />
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </h2>
        </div>
        <Image
          src={BannerImg3}
          alt="Banner Image"
          className="min-h-screen w-full"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src={BannerImg1}
          alt="Banner Image"
          className="min-h-screen w-full"
        />
        <div className=" max-w-7xl mx-auto px-5 absolute top-[50%] -translate-y-[50%] lg:right-[50%] ">
          <h2 className="text-7xl font-medium">
            Get Your <br />
            <span className="font-semibold text-blue-500">Dream Smile</span>
          </h2>
          <p className="text-5xl mb-2">Transform Your Smile Today</p>
          <p>With our expert team and advanced technology</p>
          <div className="flex gap-5 mt-5">
            <Button variant="bordered" radius="none">
              Learn About Our Services
            </Button>
            <Button radius="none" color="primary" variant="bordered">
              Contact Us
            </Button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
