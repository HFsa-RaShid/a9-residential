
import slider1 from '../../assets/image/slider1.jpg'
import slider2 from '../../assets/image/slider2.jpg'
import slider3 from '../../assets/image/slider3.jpg'
import slider4 from '../../assets/image/slider4.jpg'

import { A11y, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {

    return (
        
        <Swiper
        modules={[  A11y, Autoplay]} 
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 2500 }} 
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide  style={{ height: "500px" }}>
        <div className=" absolute top-[45%] w-[800px] rounded-xl left-[23%] bg-black opacity-50 px-8 py-5">
                <h1 className="text-white text-2xl lg:text-[36px] mb-10 font-bold text-center">Get the best real estate deals first,
                    </h1>
                    <h1 className="text-white text-2xl lg:text-[36px]  font-bold text-center">before they hit the mass market!</h1>
                    
                </div>
            <img src={slider4} alt="Slide 1" /></SwiperSlide>
        <SwiperSlide  style={{ height: "500px" }}>
        <div className=" absolute top-[45%] w-[800px] rounded-xl left-[23%] bg-black opacity-50 px-8 py-5 ">
                <h1 className="text-white text-2xl lg:text-[36px] mb-10 font-bold text-center">Get the best real estate deals first,
                    </h1>
                    <h1 className="text-white text-2xl lg:text-[36px]  font-bold text-center">before they hit the mass market!</h1>
                    
                </div>
            <img src={slider2} alt="Slide 2" /></SwiperSlide>
        <SwiperSlide  style={{ height: "500px" }}>
        <div className=" absolute top-[45%] w-[800px] rounded-xl left-[23%] bg-black opacity-50 px-8 py-5 ">
                <h1 className="text-white text-2xl lg:text-[36px] mb-10 font-bold text-center">Get the best real estate deals first,
                    </h1>
                    <h1 className="text-white text-2xl lg:text-[36px]  font-bold text-center">before they hit the mass market!</h1>
                    
                </div>
            <img src={slider3} alt="Slide 3" /></SwiperSlide>
        <SwiperSlide  style={{ height: "500px" }}>
        <div className=" absolute top-[45%] w-[800px] rounded-xl left-[23%] bg-black opacity-50 px-8 py-5">
                <h1 className="text-white text-2xl lg:text-[36px] mb-10 font-bold text-center">Get the best real estate deals first,
                    </h1>
                    <h1 className="text-white text-2xl lg:text-[36px]  font-bold text-center">before they hit the mass market!</h1>
                    
                </div>
            <img src={slider1} alt="Slide 3" /></SwiperSlide>
      </Swiper>
     
    );
};

export default Banner;