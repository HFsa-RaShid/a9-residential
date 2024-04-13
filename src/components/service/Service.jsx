
import parking from '../../assets/image/parking.jpg'
import greenSpace from '../../assets/image/green-space.jpg'
import  safety from '../../assets/image/safety.jpg'
import kindergarten from '../../assets/image/kindergarten.jpg'
import sport from '../../assets/image/sport-court.jpg'
import commercial from '../../assets/image/Modern-Commercial-Building.jpg'
import { useState } from 'react';
const Service = () => {
    const [showAll, setShowAll] = useState(false);
    return (
        <div>
            <h2 className='text-center text-[40px] font-bold my-10'>Our Services</h2>
            {/* 1 */}
            <div className='flex gap-10 mb-10 h-[300px] '>
                <div className='w-[60%] mt-20  '>
                    <h2 className='text-[30px] font-bold mb-3'>Well ordered car parking</h2>
                    <p className='text-[18px]'>Complex territory provides as on-ground, so underground car parking. For comfort of residents, each dwelling house will have an isolated underground parking. And in total complex will have 160 parking places.</p>

                </div>
                <div className='w-[40%] '>
                    <img src={parking} className='h-full w-full' />

                </div>

            </div>
            {/* 2 */}
            <div className='flex gap-10 mb-10 h-[300px]'>
            <div className='w-[40%] '>
                    <img src={greenSpace} className='h-full w-full' />

                </div>
                <div className='w-[60%] mt-20  '>
                    <h2 className='text-[30px] font-bold mb-3'>Recreation and green spaces</h2>
                    <p className='text-[18px]'>The most important element of Sweet Home territory, by which it meets the concept of modern district, is large number of green spaces. Territory has trees-plants counted for 4 seasons, and recreation spaces, what creates additional comfort to complex residents.</p>

                </div>
                

            </div>

            {/* 3 */}
            <div className='flex gap-10 mb-10 h-[300px]'>
                <div className='w-[60%] mt-20  '>
                    <h2 className='text-[30px] font-bold mb-3'>Safety 24/7</h2>
                    <p className='text-[18px]'>For the safety of residents of Sweet Homes, complex territory has 24 hours security service and video monitoring.</p>

                </div>
                <div className='w-[40%] '>
                    <img src={safety} className='h-full w-full' />

                </div>

            </div>
            {showAll && (
                <>
                    {/* 4 */}
                    <div className='flex gap-10 mb-10 h-[300px]'>
                        <div className='w-[40%] '>
                            <img src={kindergarten} className='h-full w-full' alt="Green Space" />
                        </div>
                        <div className='w-[60%] mt-20 '>
                            <h2 className='text-[30px] font-bold mb-3'>Kindergarten</h2>
                            <p className='text-[18px]'>There is a kindergarten functioning on the territory of Sweet Homes, thus making the complex attractive for parents of minor children.</p>
                        </div>
                    </div>

                    {/* 5 */}
                    <div className='flex gap-10 mb-10 h-[300px] '>
                        <div className='w-[60%] mt-10  '>
                            <h2 className='text-[30px] font-bold mb-3'>Sport spaces</h2>
                            <p className='text-[18px]'>Dwelling complex is counted for comfort of those who follows healthy lifestyle. On the territory of Sweet Homes there will be placed as tennis -court, so sport spaces, where sportsmen will be able to spend their free time. While projecting the complex, we also thought of spaces for children. On the 1000 sq.m. area there will be arranged a playground for children which will meet all standards necessary for safety of children.</p>
                        </div>
                        <div className='w-[40%] '>
                            <img src={sport} className='h-full w-full' />
                        </div>
                    </div>

                    {/* 6 */}
                    <div className='flex gap-10 mb-10 h-[300px] '>
                        <div className='w-[40%] '>
                            <img src={commercial} className='h-full w-full'  />
                        </div>
                        <div className='w-[60%] mt-20 '>
                            <h2 className='text-[30px] font-bold mb-3'>Commercial areas</h2>
                            <p className='text-[18px]'>In the new district, which will be created in Old Tbilisi, there will be placed many commercial objects in one space. Complex will have supermarket, cafe and drugstore, enabling the residents of Sweet Home to access needed services in one space.</p>
                        </div>
                    </div>
                </>
            )}

            {/* "See All" button */}
            {!showAll &&
            <button onClick={() => setShowAll(true)} className='py-2 px-20 rounded-2xl bg-black text-white  flex mx-auto text-center'>See All</button> 
            }
            
        </div>
    );
};

export default Service;