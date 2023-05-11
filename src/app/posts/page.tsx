"use client"
import { useEffect, useState } from "react";
import Image from "next/image";

const Page = (e: any) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getMovies() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${e.searchParams.postId}?api_key=98325a9d3ed3ec225e41ccc4d360c817`);
      const results = await response.json();
      setData(results);
    }
    getMovies();
  }, [e.searchParams.postId]);


  return (
    <div className="divcontainer w-full h-screen bg-white flex justify-center items-center">
      <div className="postcontainer shadow-lg border border-opacity-20 w-3/4 h-3/4 overflow-hidden">
        <div className="itemscontainer flex m-10 gap-10 ">
        <div className="w-3/4 h-96 overflow-hidden drop-shadow-xl">
  <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt="image not available" className="w-full h-full object-cover" />
</div>
          <div className="informationcontainer flex flex-col gap-2">
            <h1 className="text-black font-bold text-3xl">Title : {data.title}</h1>
            <p className="text-black"><span className="font-bold text-black">Description: </span><span className="text-sm text-black">{data.overview}</span></p>
            <p className="text-black"><span className="font-bold text-black">Status: </span>{data.status}</p>
            <p className="text-black"><span className="font-bold text-black">Release Date: </span>{data.release_date}</p>
            <p className="text-black flex gap-1"><span className="font-bold text-black">Budget: {"$"}</span>{data.budget === 0 ? <p className="text-black opacity-30">Not Available</p> : data.budget}</p>
            <p className="text-black flex gap-1"><span className="font-bold text-black">Revenue: {"$"}</span>{data.revenue === 0 ? <p className="text-black opacity-30">Not Available</p> : data.revenue}</p>
            <p className="text-black flex items-center gap-2"><span className="font-bold text-black">Popularity: </span>{data.popularity} <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" id="iconContext-star-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z" fill="yellow"></path></svg></p>
            <p className="text-black"><span className="font-bold text-black">Runtime: </span>{data.runtime} Minutes</p>
            <p className="text-black flex gap-1"><span className="font-bold text-black">Website: </span>
            {data.homepage === ""?<p className="text-black opacity-30">Not Available</p> :<a className="text-blue-500" href={data.homepage}>Visit</a>}
            </p>
            <div className="buttoncontainer">
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page