"use client"
import { useEffect, useState } from "react";
import Link from "next/link";

const UpNext = () => {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchMovies() {
      const getmovies = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&page=${page}`);
      const { results } = await getmovies.json();
      setData(results);
    }
    fetchMovies();
  }, [page]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex(prevIndex => {
        if (prevIndex === 15) {
          setPage(prevPage => prevPage + 1);
          return 0;
        }
        return prevIndex + 3;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const sequence = data.slice(startIndex, startIndex + 3);

  return (
    <>
      <div className="upnextcontainer flex flex-col w-96 h-1/10 m-4">
        <h1 className="font-bold text-yellow-500 p-2 text-xl">Up - Next</h1>
        <div className="upnext h-full bg-gradient-to-b from-[#121212] to-[#000] p-3 flex flex-col gap-6">
          {sequence.map((d: any) => (
            <Link key={d.id} href={`/trailer?postId=${d.id}`}>
              <div key={d.id} className="uppercontainer flex gap-5">
                <img src={`https://image.tmdb.org/t/p/w500/${d.poster_path}`} width={80} height={80}></img>
                <div className="moviecontent flex flex-col gap-2">
                  <div className="flex gap-2">
                    <svg className="cursor-pointer rounded-full hover:bg-opacity-20" width="40" height="40" xmlns="http://www.w3.org/2000/svg" id="iconContext-play-circle-outline-large-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path></svg>
                    <span className="relative top-4 text-sm opacity-40">2:35</span>
                  </div>
                  <div className="">
                    <h2>{d.title}</h2>
                    <span className="text-sm opacity-40">Watch The Trailer</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
          <h1 className="font-bold text-lg hover:text-yellow-400 cursor-pointer">Browse Trailers {">"}</h1>
        </div>
      </div>
    </>
  );
};

export default UpNext;