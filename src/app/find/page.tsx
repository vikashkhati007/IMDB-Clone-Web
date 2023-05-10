"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Page = (e: any) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function getdata() {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=98325a9d3ed3ec225e41ccc4d360c817&language=en-US&query=${e.searchParams.query}`
            );
            const { results } = await response.json();
            setData(results);
        }

        getdata();
    }, [e.searchParams.query]);
    return (
        <>
            <div className="bg-white h-screen flex flex-col ">
                <h1 className="text-4xl text-black m-5 font-medium">Search <span className="text-md text-black">{'"'}{e.searchParams.query}{'"'}</span> </h1>
                <div className="subtitlecontainer flex gap-3 justify-between w-full m-5 max-w-3xl">
                    <h2 className="font-bold border-l-4 rounded-sm border-yellow-400 px-2 text-3xl flex items-center gap-2 cursor-pointer text-black">Titles</h2>
                    <div className="flex items-center">
                        <p className="text-black opacity-50">Exact Matches</p>
                        <span><svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="grey" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg></span>
                    </div>
                </div>
                <div className="border max-w-3xl h-96 m-5 flex flex-col gap-3 overflow-y-scroll p-5">
                    {data.map((d:any) => (
                                <Link key={d.id} href={`/posts?postId=${d.id}`}>
                        <div  className="flex cursor-pointer">
                                <img src={`https://image.tmdb.org/t/p/w500${d.poster_path}`} width={80} height={80} />
                                <div className="mx-5">
                                    <h1 className="text-black font-semibold hover:underline">{d.title}</h1>
                                    <p className="text-black opacity-60 text-sm">{d.overview.substring(0,100)}{"...?"}</p>
                                </div>
                            </div>
                            </Link>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Page
