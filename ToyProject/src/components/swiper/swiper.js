import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./swiperStyle.css";

import { Navigation, Pagination } from "swiper";

function SwiperSlider({ userList }) {
    return (
        <>
            <Swiper
                navigation={true}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >
                {userList.Post_img.map((e) => (
                    <SwiperSlide>
                        <img src={e} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
export default SwiperSlider;
