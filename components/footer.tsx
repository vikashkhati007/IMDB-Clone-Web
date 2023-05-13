import {FaTwitter, FaTiktok, FaYoutube, FaFacebook, FaInstagram} from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-20 flex justify-center flex-col gap-7 mt-32 mb-24 bg-black items-center z-10 relative">
      <Link href={"/signin"}>
      <button className="rounded-md bg-yellow-500 text-black text-sm px-5 py-2 font-bold tracking-wider">Sigin for more access</button>
      </Link>
      <div className="socialmediacontainer flex flex-row gap-10">
      <div className="iconsdiv rounded-full hover:bg-white hover:bg-opacity-10 cursor-pointer p-4">
      <FaTiktok className="text-white text-xl"/>
      </div>
      <div className="iconsdiv rounded-full hover:bg-white hover:bg-opacity-10 cursor-pointer p-4">
      <FaInstagram className="text-white text-xl"/>
      </div>
      <div className="iconsdiv rounded-full hover:bg-white hover:bg-opacity-10 cursor-pointer p-4">
      <FaTwitter className="text-white text-xl"/>
      </div>
      <div className="iconsdiv rounded-full hover:bg-white hover:bg-opacity-10 cursor-pointer p-4">
      <FaYoutube className="text-white text-xl"/>
      </div>
      <div className="iconsdiv rounded-full hover:bg-white hover:bg-opacity-10 cursor-pointer p-4">
      <FaFacebook className="text-white text-xl"/>
      </div>
      </div>
      <div className="linkcontainerdiv flex gap-10">
        <h2 className="flex items-center gap-1 hover:underline cursor-pointer"> Get The Imdb App  <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg> </h2>
        <h2 className="flex items-center gap-1 hover:underline cursor-pointer"> Help  <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg> </h2>
        <h2 className="flex items-center gap-1 hover:underline cursor-pointer"> Site Index  <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg> </h2>
        <h2 className="flex items-center gap-1 hover:underline cursor-pointer"> IMDb Pro  <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg> </h2>
        <h2 className="flex items-center gap-1 hover:underline cursor-pointer"> Box Office Mojo <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg> </h2>
        <h2 className="flex items-center gap-1 hover:underline cursor-pointer"> IMDb Developer <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg> </h2>
      </div>
      <div className="linkcontainerdiv2 flex gap-10">
        <h2 className="flex items-center gap-1 hover:underline cursor-pointer"> Press Room </h2>
        <h2 className="flex items-center gap-1 hover:underline cursor-pointer"> Advertising <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></h2>
        <h2 className="flex items-center gap-1 hover:underline cursor-pointer"> Jobs <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></h2>
        <h2 className="flex items-center gap-1 hover:underline cursor-pointer"> Conditions of Use </h2>
        <h2 className="flex items-center gap-1 hover:underline cursor-pointer"> Privacy Policy </h2>
        <h2 className="flex items-center gap-1 hover:underline cursor-pointer"> Your Ads Privacy Choice <svg width="10" height="10" xmlns="http://www.w3.org/2000/svg" id="iconContext-launch-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M21.6 21.6H2.4V2.4h7.2V0H0v24h24v-9.6h-2.4v7.2zM14.4 0v2.4h4.8L7.195 14.49l2.4 2.4L21.6 4.8v4.8H24V0h-9.6z"></path></svg></h2>
      </div>
      <div className="copyright">
        <p className="text-sm opacity-60">© 2023-2030 by Vikash Khati . Follow Me on @vikashkhati007</p>
      </div>
    </div>
  )
}

export default Footer
