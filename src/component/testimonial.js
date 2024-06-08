import React, { useState } from 'react';
import Card from './Card';
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";


const Testimonial = (props) => {
    
    
    let reviews = props.reviews;
   const[index,SetIndex] = useState(0);
    function leftshifthandler(){
       if(index -1 <0){
        SetIndex(reviews.length-1);
       }
       else{
        SetIndex(index-1);
       }
    }

    function rightshifthandler(){
        if(index +1 >= reviews.length){
            SetIndex(0);
        }
        else{
            SetIndex(index +1); 
        }
    }


    function Surpisehandler(){
      let random =  Math.floor(Math.random()* reviews.length);
      SetIndex(random);
    }

    return (
        <div className=' w-[85vw] md:w-[700px] bg-white  flex flex-col justify-center items-center mt-10 p-10 transition-all duratopm-700 shadow-xl'>
            <Card reviews={reviews[index]}/>


            
            <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto ' >
                <button onClick={leftshifthandler}><FiChevronLeft/></button>
                <button onClick={rightshifthandler}><FiChevronRight/></button>
                
            </div>

            <div className='mx-auto' >
                <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded font-bold text-white text-lg' onClick={Surpisehandler}>
                    Surpise me
                </button>
            </div>
        </div>
    );
}

export default Testimonial;
