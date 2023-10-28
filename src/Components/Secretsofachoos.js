import Header from "../Header/Header";
import React, { useState } from 'react';
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import Blouse from "./Blouse";
import Skirts from "./Skirts";
import Tops from "./Tops";
function Saveadate(){

  const [activeSection, setActiveSection] = useState('tops');
  const [type, setType] = useState(0);
  const [types, setTypes] = useState(0);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleTypeClick = (value) => {
    setType(value);
  };

  const handleTypesClick = (value) => {
    setTypes(value);
  };
    

      
    return(
 <div>

            <Header/>
            <div className="flex justify-between mt-10">
                <img className="w-[300px] h-[200px]" src="prime1.png" alt=""/>
                <div className="  h-14 rounded-full  ">
                <input
                type="search"
                className=" pl-2 pr-4 bg-violet-300 w-[600px] text-center border rounded-full sm:py-4 py-2  px-10  text-sm outline-none"
                placeholder="Customise your favourite" 
              />
                </div>
                <img className="w-[300px] h-[200px]" src="prime.png" alt=""/>
            </div>
        <p className="text-6xl font-semibold text-center">Customise Your Barbie </p>


<div className="flex justify-center  mt-20">
    <div>
        <img className="w-[300px] h-[400px]" src="design.png" alt=""/>
    </div>

        <div className=" ">
            <div className="  w-[500px] flex justify-center ml-20 items-center gap-8 rounded-full py-4 bg-violet-300">
            <button
            className={`bg-white text-black px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none ${
              activeSection === 'tops' ? 'bg-purple-700' : ''
            }`}
            onClick={() => handleSectionChange('tops')}
          >
            Tops
          </button>

            <button
            className={`bg-white text-black px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none ${
              activeSection === 'skirts' ? 'bg-purple-700' : ''
            }`}
            onClick={() => handleSectionChange('skirts')}
          >
            Skirts
          </button>

            <button
            className={`bg-white text-black px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none ${
              activeSection === 'blouse' ? 'bg-purple-700' : ''
            }`}
            onClick={() => handleSectionChange('blouse')}
          >
            Blouse
          </button>

            <button class="bg-white text-black px-4 py-2 rounded-full transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none">
            Click me
            </button>
                
         </div>
       
         <div className="flex">
      <div className=" ">
        
      </div>

      <div>
        {activeSection === 'blouse' && <Blouse />}
        {activeSection === 'skirts' && <Skirts />}
        {activeSection === 'tops' && <Tops />}
      </div>
    </div>


   </div>



</div>

<div className="pt-40">

<div className=" absolute  ml-80 mt-10  ">
        <img className="w-[600px] h-[200px]" src="loadmore.png" alt=""/>
      </div>
</div>

      <div>

      <div className="   h-[100px] bg-purple-400   relative  mt-48 ">
            <div className=" ">
              <div  className="sm:h-[300px] h-[200px] w-full bg-purple-400 rounded-b-full"
              style={{
                borderBottomLeftRadius: "100%",
                borderBottomRightRadius: "100%",
              }}>

                <div className="flex justify-between">
                <div className=" mt-8  w-[400px] h-[160px] ml-10 bg-white text-center">
                  <h2 className=" ">Track Your Order</h2>
                  <div className="  mt-4 text-blue-400">
                  <input
                type="search"
                className=" pl-2 pr-4 bg-white border-black mt-4  text-center border rounded-full sm:py-auto  py-2  px-10  text-sm outline-none"
                placeholder="Order number" 
              />
                  </div>
                  <div className="  mt-4">
                    <div className="  inset-y-0 left-0 flex items-center pl-3  "></div>
                    <input
                type="search"
                className=" pl-2 pr-4 bg-white border-black   text-center border rounded-full sm: py-2  px-10  text-sm outline-none"
                placeholder="Phone number" 
              />
                  </div>

                  
                </div>
                
              <div className="    sm:w-auto w-80     mt-4 mr-2 ">
                  <h4 className="font-bold sm:text-xl text-sm">Visit The Shop</h4>
                  <p className="sm:text-xl text-sm">
                    No 14/16, Gurunathan Street,
                  </p>
                  <p className="sm:text-xl text-sm">Pattabiraman Saalai Road,</p>
                  <p className="sm:text-xl text-sm">
                    Opp to srinivasa Perumal Koil, Tennur
                  </p>
                  <p className="sm:text-xl text-sm">Trichy – 620017.</p>
                </div>
                </div>
                <div className="flex justify-center mt-8 ">
              <p>
                <AiOutlineYoutube className=" text-white w-14 h-14 border rounded-full bg-black px-2 py-2" />
              </p>
              <p>
                <AiOutlineInstagram className=" text-white w-14 h-14 ml-4 border rounded-full bg-black px-2 py-2" />
              </p>
              <p>
                <IoLogoWhatsapp className="text-white w-14 h-14 ml-4 border rounded-full bg-black px-2 py-2" />
              </p>
            </div>
              </div>
              <div className="  flex justify-center  mt-4  ">
                                <div className="overflow-hidden shadow-lg border border-black rounded-lg  ">
                                    <input
                                    type="text"
                                    className="pl-6 pr-4 py-2 border rounded-lg py-3 text-sm  focus:outline-none sm:w-96 w-20 "
                                    placeholder="Email"
                                    />
                                </div>
                    
                                <button
                                    class="ml-4 bg-purple-500 text-white px-4 py-2 rounded-lg transition duration-200 ease-in-out hover:bg-purple-700 active:bg-purple-900 focus:outline-none"
                                    >
                                    Subscribe
                                    </button>
                  </div>
           
           
            </div>
            
            <hr className="  border-2 border-black mt-12" />
        <div className="flex justify-between items-center    ">
              <div className="   m-auto  ">
                <img className="w-[400px] h-[150px]  ml-40 " src="rose2.png" alt=""/>
              </div>
              <div className="">
                  <p className="sm:text-xl font-bold text-lg   mt-10   ">
                    *Terms And Conditions
                  </p>
              </div>
         
        </div>

        </div>
      </div>


</div>
    )
}

export default Saveadate