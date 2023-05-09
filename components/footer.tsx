const Footer = () => {
  return (
    <div className="bg-black w-full h-20 flex justify-center items-center">
      <button className="rounded-md bg-yellow-500 text-black text-sm px-5 py-2">Sigin for more access</button>
      <div className="socialmediacontainer">
      <img src={"twitter.svg"} width={50} height={50} className="bg-white"/>
      </div>
    </div>
  )
}

export default Footer
