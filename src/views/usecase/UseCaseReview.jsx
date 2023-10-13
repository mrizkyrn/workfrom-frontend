import ReviewCard from "../../components/cards/ReviewCard";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const UseCaseReview = () => {
   return (
    <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><ReviewCard /></SwiperSlide>
        <SwiperSlide><ReviewCard /></SwiperSlide>
        <SwiperSlide><ReviewCard /></SwiperSlide>
        <SwiperSlide><ReviewCard /></SwiperSlide>
        <SwiperSlide><ReviewCard /></SwiperSlide>
        <SwiperSlide><ReviewCard /></SwiperSlide>
      </Swiper>
   );
};

export default UseCaseReview;
