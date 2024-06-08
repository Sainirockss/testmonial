import React from "react";
import Testimonial from "./component/testimonial";
import reviews from "./data";
const App = () => {



  return(
  

  <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
  <div>
    <div className="text-4xl font-bold" ><h1>Our Testimonials</h1></div>;
    <div className="bg-violet-400 h-[4px] w-1/7 mx-auto"></div>
  </div>

  <div>
    <Testimonial   reviews={reviews}/>
  </div>  

  </div>


  )

};

export default App;

