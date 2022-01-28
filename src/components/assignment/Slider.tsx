import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"

import "./style.css";

// import Swiper core and required modules
import SwiperCore, {
    Pagination
} from 'swiper';
import { IReportImage } from "../../interafaces/IReport";

// install Swiper modules
SwiperCore.use([Pagination]);

interface Props {
    images: IReportImage[]
}

const style = {
    swiperContainer: {
        height: "70%",
        width: "80%",
        borderRadius: "6%"
    }
}
const Slider: React.FC<Props> = function Slider({ images }) {
    return (
        <Swiper style={style.swiperContainer} pagination={true} className="mySwiper">
            {
                images.map((image, index) => {
                    return (
                        <div key={index}>
                            <SwiperSlide key={image.id}>
                                < img src="https://picsum.photos/200/300" alt="" />
                            </SwiperSlide>
                            .
                        </div>
                    )
                })
            }
        </Swiper>
    )
}
export default Slider