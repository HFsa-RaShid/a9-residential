import slider1 from '../../assets/image/slider1.jpg'
import slider2 from '../../assets/image/slider2.jpg'
import slider3 from '../../assets/image/slider3.jpg'
import slider4 from '../../assets/image/slider4.jpg'
const Banner = () => {
    return (
        <div className='relative'>
            <div className="carousel w-full h-[520px] mt-3 mb-8 rounded-2xl">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slider4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a> 
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slider3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a> 
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slider1} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a> 
                    <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div> 
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slider2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a> 
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='absolute top-20 w-[50%] ml-20'>
                <h1 className='text-[40px] w-[80%] p-10 bg-black bg-opacity-50 text-white rounded-xl'>Get the best real estate deals first,
                    before they hit the mass market!</h1>

            </div>
        </div>
        
    );
};

export default Banner;