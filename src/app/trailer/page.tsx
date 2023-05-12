"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Page = ({ searchParams: { postId } }) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${postId}?api_key=98325a9d3ed3ec225e41ccc4d360c817`);
      const movieData = await response.json();
      setMovie(movieData);
      setLoading(false);
    }
    fetchMovie();
  }, [postId]);

  return (
    <div className="divcontainer w-full h-screen bg-black bg-opacity-50 flex justify-center items-center">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <>
          <div className="postcontainer bg-white border border-opacity-20 w-3/4 h-3/4 overflow-hidden bg-opacity-60 shadow-slate-50 shadow-sm rounded-sm">
            <div className="itemscontainer flex flex-col m-10 overflow-hidden">
              <div className="overflow-hidden drop-shadow-xl w-fit">
                <Link href={`https://www.imdb.com/title/${movie.imdb_id}`}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                    alt="image not available"
                    className="object-fill rounded-md border border-opacity-10"
                    width={350}
                    height={306}
                  />
                  <svg
                    className="cursor-pointer rounded-full hover:bg-opacity-20 -translate-y-14 translate-x-2 shadow-md bg-black bg-opacity-25"
                    width="40"
                    height="40"
                    xmlns="http://www.w3.org/2000/svg"
                    id="iconContext-play-circle-outline-large-inline"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    role="presentation"
                  >
                    <path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path>
                    <path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path>
                  </svg>
                </Link>
              </div>
              <div className="informationcontainer gap-3 flex flex-col">
                <h1 className="text-black font-bold text-3xl">Title : {movie.title}</h1>
                <p className="text-black">
                  <span className="font-bold text-black">Description: </span>
                  <span className="text-sm text-black">{movie.overview}</span>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page;