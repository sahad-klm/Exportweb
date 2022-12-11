import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";
import { motion } from "framer-motion";
import { textVariant } from "utils/motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Icon } from "constants/icon";
import { homeComponentBig } from "constants/data";
import { Key } from "react";

const HomeComponent = (): any => {
  return (
    <div
     
      className=" md:pt-12 px-4 flex justify-center items-center overflow-hidden relative md:h-[540px] h-ofHome  z-10"
    >
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        style={{width:'100%', height:'100%'}}
      >
        {homeComponentBig.map(
          (item: {
            id: Key;
            title: string;
            picture: any;
            subtitle: string;
          }) => (
            <SwiperSlide key={item.id} style={{width:'100%', height:'100%'}} >
              <div
                
                className="relative rounded-3xl overflow-hidden h-full z-auto grid content-center md:pl-20 sm:p-10 p-4"
              >
                <img
                  className="-z-10 h-full w-full object-cover absolute top-0 left-0"
                  src={item.picture}
                  alt="wallpaper"
                />
                <motion.h1
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  variants={textVariant(0.2, 1)}
                  className="md:text-7xl text-[42px] font-body font-bold text-gray-800 leading-10 max-w-[580px]"
                >
                  {item.title}
                </motion.h1>
                <motion.h6
                  variants={textVariant(0.5, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className="md:text-h4 text-h6 font-head leading-9 mt-2 text-gray-700"
                >
                  {item.subtitle}
                </motion.h6>
                <motion.form
                  variants={textVariant(0.5, 1)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className="flex flex-row bg-white sm:max-w-[50%] overflow-hidden  rounded-full h-14 items-center mt-10 relative"
                >
                  <Icon className="h-4 md:ml-6 ml-1 md:mr-4 mr-2 fill-gray-700" />
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="h-full outline-none font-body text-sm tracking-wide text-gray-700"
                  />
                  <button className="absolute -right-1 h-full md:px-10 px-5 bg-emerald-500 rounded-full hover:bg-emerald-600 transition text-white font-body text-sm tracking-wider">
                    Subscribe
                  </button>
                </motion.form>
              </div>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </div>
  );
};

export default HomeComponent;
