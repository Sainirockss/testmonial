import React from 'react';
import {FaQuoteLeft,FaQuoteRight,FaGem} from 'react-icons/fa';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Card = (props) => {

    let reviews = props.reviews;

    return (
        <div className=' flex flex-col  md:relative '>
           <div className='absolute top-[-1rem] z-[10] mx-auto'>
           <img src={reviews.image} className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' alt="/" ></img>
           </div>
           <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-10px] z-[1] left-[10px]'></div>

           <div className='text-center mt-7'>
           <p className='font-bold text-2xl capitalize'>{reviews.name}</p> 
           </div>  

           <div className='text-center mt-7'>
            <p className='text-violet-300 uppercase text-sm'>{reviews.job}</p>
           </div>  

            <div className='text-violet-400 mx-auto mt-5' >
                <FaQuoteLeft/>
            </div>

            <div className='text-center mt-4 text-slate-500'>
               {reviews.text}
            </div>

            <div className='text-violet-400 mx-auto mt-5'>
                <FaQuoteRight/>
            </div>





        </div>
    );
}

export default Card;

