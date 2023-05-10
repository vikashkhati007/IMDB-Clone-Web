"use client"
import { useEffect, useState } from "react";

const FeaturedToday = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function movies() {
      const getmovies = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&sort_by=vote_count.desc&vote_count.gte=10000');
      const { results } = await getmovies.json();
      setData(results);
    }
    movies();
  }, []);

  return (
    <>
      <div className="subtitlecontainer flex flex-col gap-3 justify-start w-full m-5">
        <h1 className="font-bold text-yellow-400 text-3xl">What to Watch</h1>
        <h2 className="font-bold border-l-4 rounded-sm border-yellow-400 px-2 text-2xl flex items-center gap-2 cursor-pointer">Top Picks <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg></span></h2>
        <span className="opacity-70">TV shows and movies just for you</span>
      </div>
      <div className="toppickscontainer w-full m-5 flex flex-row gap-14">

          {data.slice(0,4).map((d:any) => (
              <div key={d.title} className="showscontainer bg-[#1A1A1A] w-1/5 mb-20 rounded-b-md">
              <div className="imagecontainer">
               <div className="svgcontainer absolute">
               <svg className="absolute opacity-40" width="24px" height="34px" viewBox="0 0 24 34" xmlns="http://www.w3.org/2000/svg" role="presentation"><polygon fill="#000000" points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon><polygon points="24 0 0 0 0 32 12.2436611 26.2926049 24 31.7728343"></polygon><polygon points="24 31.7728343 24 33.7728343 12.2436611 28.2926049 0 34 0 32 12.2436611 26.2926049"></polygon></svg>
               <svg className="relative z-10" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>
             </div>
             <img className="" src={`https://image.tmdb.org/t/p/w500${d.poster_path}`} width={300} height={100}></img>
           </div>
           <div className="ratingcontainer flex items-center gap-5">
             <div className="rating flex gap-2 items-center m-2">
               <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" id="iconContext-star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation">
                 <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z" fill="yellow"></path>
               </svg>
               <p >{d.vote_average}</p>
             </div>
             <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" id="iconContext-star-border-inline" viewBox="0 0 24 24" fill="blue" role="presentation"><path d="M22.724 8.217l-6.786-.587-2.65-6.22c-.477-1.133-2.103-1.133-2.58 0l-2.65 6.234-6.772.573c-1.234.098-1.739 1.636-.8 2.446l5.146 4.446-1.542 6.598c-.28 1.202 1.023 2.153 2.09 1.51l5.818-3.495 5.819 3.509c1.065.643 2.37-.308 2.089-1.51l-1.542-6.612 5.145-4.446c.94-.81.45-2.348-.785-2.446zm-10.726 8.89l-5.272 3.174 1.402-5.983-4.655-4.026 6.141-.531 2.384-5.634 2.398 5.648 6.14.531-4.654 4.026 1.402 5.983-5.286-3.187z"></path></svg>   </div>
           <h2 className="mx-2 hover:underline cursor-pointer">{d.title}</h2>
           <button className=" w-11/12 mx-2 rounded-lg text-sm font-bold font-sans p-2 bg-gray-600 bg-opacity-20 my-5 brightness-200 text-blue-800 hover:underline">Watch Options</button>
           <div className="trailercontainer flex items-center justify-between w-full gap-5 my-1">
             <div className="trailercontainer flex items-center mx-5 hover:bg-white cursor-pointer p-1 rounded-md hover:bg-opacity-10">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="iconContext-play-arrow" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z"></path></svg>
               <span className="font-bold text-sm mr-1">Trailer</span>
             </div>
             <div className="infocontainer mx-10 hover:bg-white p-1 hover:bg-opacity-10 rounded-full cursor-pointer">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="iconContext-info" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
             </div>
           </div>
          </div>
          ))}
      </div>

    </>
  )
}

export default FeaturedToday
