import React, { useEffect, useState } from "react";
import { requrl,options} from "../Requests";
import axios from "axios";

function Main() {
  const [movies, setMovies] = useState([]);
  const [url, setUrl] = useState("");
 

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setMovies(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
    
  }, []);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  // console.log(movie);

  const trancatedText = (str,num)=>{
    if(str?.length>num){
      return str.slice(0,num) + "..."
    }
    else{
      return str
    }
  }

  return (
    <div className="w-full h-[400px]  sm:h-[550px] text-white shadow-sm shadow-slate-600">
      <div className="w-full h-full">
        <div className="absolute w-full h-[400px] sm:h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-content"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute top-[20%] p-4 md:p-8 ml-[5%]">
          <h1 className="mb-2 text-2xl">{movie?.title}</h1>
          <div className="flex">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 text-sm font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-lg shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none">
            <span className="px-5 transition-all ease-in duration-75  ">Play</span>
            
          </button>
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium  rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-4 sm:px-5 py-1 sm:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Watch Later
            </span>
          </button>
          </div>
          <p className="text-gray-600">Released : {movie?.release_date}</p>
          <p className="w-[100%] text-xs text-white sm:text-base sm:max-w-[85%] h-[100px] overflow-auto sm:h-full md:max-w-[70%] lg:max-w-[50%] xl:max-w[35%]">{trancatedText(movie?.overview,150)}</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
