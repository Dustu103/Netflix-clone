import React, {  useState } from "react";
import Signin from "../pages/Signin";
import { Link } from "react-router-dom";
import Signup from "../pages/Signup";


function Navbar() {
  const[modal,showModal]=useState(false)
  const [upmodal,setUpmodal]=useState(false)
  // const 
  return (
    
    <div className="text-white flex justify-between md:px-[200px] px-[20px] py-4 w-full absolute z-[100]">
      <Link to="/"><h1 className="text-red-600 text-2xl sm:text-5xl font-bold cursor-default">
        Netflix
      </h1>
      </Link>
      
      <div>
        {/* <Link to ="/login"></Link> */}
      <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-2 sm:px-5 py-1 sm:py-2.5 text-center me-2 mb-2 mx-4" onClick={()=>{showModal(true)}}>Sign In</button>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
          <span className="relative px-2 sm:px-5 py-1 sm:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0" onClick={()=>{setUpmodal(true)}}>
            Sign Up
          </span>
        </button>
      </div>
      <Signin isVisible={modal} onClose={()=>{showModal(false)}}/>
      <Signup isVisible={upmodal} onClose={()=>{setUpmodal(false)}}/>
    </div>
    
  );
}

export default Navbar;
