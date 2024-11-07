import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth } from "../Requests";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import Movie from "./Movie";




function Row({ title, fetchurl,rowId }) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);


  //  console.log(url)
  
  const options = {
    method: 'GET',
    url: `${fetchurl}`,
    headers: {
      accept: 'application/json',
      Authorization: `${auth}`
    }
  };

  console.log(title,options)
 
  useEffect(() => {
   
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.results)
        setMovies(response.data.results);
      })
      .catch(function (error) {
        setError(true);
      });
  },[fetchurl]);

  const sideleft =()=>{
    var slider = document.querySelector('#slider'+rowId)
    slider.scrollLeft-=500
    
  }
  const sideright =()=>{
    var slider = document.querySelector('#slider'+rowId)
    slider.scrollLeft+=500
  }

  return (
    <>
      <h6 className="text-white text-sm sm:text-lg md:text-xl p-3">
        {title.toUpperCase()}
      </h6>
      <div className="relative flex items-center group">
      <FaAngleLeft onClick={sideleft}  className="bg-white opacity-40 rounded-full absolute hover:opacity-80 hidden cursor-pointer z-10 g group-hover:block left-0" size={30} />
        <div id={"slider"+rowId} className="flex overflow-x-scroll scrollbar-hide w-full h-full">
        
          {movies.map(
            (item, id) => (
              <Movie key={item?.id} item={item}/>
            )
          )}
        </div>
        <FaAngleRight onClick={sideright} className="bg-white right-0 opacity-40 rounded-full absolute hidden hover:opacity-80 cursor-pointer z-10 group-hover:block" size={30} />
      </div>
    </>
  );
}

export default Row;
