"use client"
import {useState} from "react";

export default function Home() {
    const [data, setData] = useState([]);

    async function getdata() {
        const data = await fetch(
            "https://imdb-api.projects.thetuhin.com/search?query=rrr"
        );
        const newdata = await data.json();
        setData(newdata.results);
        
    }
    getdata();


    return (
        <>
            
        </>
    );
}


