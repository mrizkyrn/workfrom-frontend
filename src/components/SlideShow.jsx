// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function SlideShow() {
   return (
      <>
         <Swiper navigation={true} modules={[Navigation]} className="mySwiper h-full w-full">
            <SwiperSlide>
               <img src="/image-2.png" alt="building image" className="w-full" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="/image-3.png" alt="building image" className="w-full" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="/image-2.png" alt="building image" className="w-full" />
            </SwiperSlide>
         </Swiper>
      </>
   );
}
