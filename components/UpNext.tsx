const UpNext = () => {
  return (
    <>
      <div className="upnextcontainer flex flex-col w-96 h-1/10 m-4">
      <h1 className="font-bold text-yellow-500 p-2 text-xl">Up - Next</h1>
      <div className="upnext h-full bg-gradient-to-b from-[#121212] to-[#000] ">
        <img></img>
        <svg className="cursor-pointer hover:bg-yellow-500 rounded-full hover:bg-opacity-20" width="24" height="24" xmlns="http://www.w3.org/2000/svg" class="ipc-icon ipc-icon--play-circle-outline-large-inline ipc-icon--inline sc-d4cb23a2-14 ejjmJF editorial-play-icon" id="iconContext-play-circle-outline-large-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M10.803 15.932l4.688-3.513a.498.498 0 0 0 0-.803l-4.688-3.514a.502.502 0 0 0-.803.402v7.026c0 .412.472.653.803.402z"></path><path d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z"></path></svg>
        <p>2:35</p>
        <h2>Hello</h2>
        <span>Watch me </span>
      </div>
      </div>
    </>
  )
}

export default UpNext
