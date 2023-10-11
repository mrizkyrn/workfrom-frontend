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
               <img src="https://images.unsplash.com/photo-1696506473897-c9db767a3c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
            </SwiperSlide>
            <SwiperSlide>
               <img src="https://images.unsplash.com/photo-1695030306817-38c591d61885?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1842&q=80" />
            </SwiperSlide>
         </Swiper>
      </>
   );
}
