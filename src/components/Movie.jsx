import React from 'react'
import { useState } from 'react';
import { IoHeartCircleOutline } from "react-icons/io5";
import { IoHeartCircle } from "react-icons/io5";


function Movie({item}) {
  return (
    <div>
       <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
                {/* <img src="" alt="" /> */}
                <img className="w-full h-auto block"
                  src={`https://image.tmdb.org/t/p/original${item?.backdrop_path}`}
                  alt={item?.title}
                />
                <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                  <p className="whitespace-normal h-full text-xs md:text-sm font-bold flex justify-center items-center">{item.title}</p>
                  <p className="rounded-sm">
                    {like?<IoHeartCircleOutline className="absolute left-5 top-5 rounded-md" style={{color:'red'}}/>:<IoHeartCircle className="absolute left-5 rounded-md top-5"  style={{backgroundColor:'red',scale:"1.5"}}/>}
                  </p>
                  
                </div>
           
              </div>
    </div>
  )
}

export default Movie
