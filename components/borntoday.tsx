import Image from "next/image"
const Borntoday = () => {
  return (
    <div className="subtitlecontainer flex flex-col gap-3 justify-start w-full mx-5 my-10">
    <h2 className="font-bold border-l-4 rounded-sm border-yellow-400 px-2 text-2xl flex items-center gap-2 cursor-pointer">Celebrity <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" id="iconContext-chevron-right-inline" viewBox="0 0 24 24" fill="currentColor" role="presentation"><path d="M5.622.631A2.153 2.153 0 0 0 5 2.147c0 .568.224 1.113.622 1.515l8.249 8.34-8.25 8.34a2.16 2.16 0 0 0-.548 2.07c.196.74.768 1.317 1.499 1.515a2.104 2.104 0 0 0 2.048-.555l9.758-9.866a2.153 2.153 0 0 0 0-3.03L8.62.61C7.812-.207 6.45-.207 5.622.63z"></path></svg></span></h2>
    <span className="opacity-70">Popular Worldwide with massive fan following</span>
    <div className="imagecontainer flex gap-5 w-full">
      <div className="flex flex-col gap-1 justify-center items-center cursor-pointer hover:bg-black hover:opacity-80">
      <Image className="rounded-full" src={"/celebrity/selenagomez.jpg"} width={190} height={190} alt="selena"></Image>
      <p>Selena Gomez</p>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center cursor-pointer hover:bg-black hover:opacity-80">
      <Image className="rounded-full" src={"/celebrity/justinebieber.jpg"} width={190} height={190} alt="justine"></Image>
      <p>Justine Bieber</p>
      </div>
      <div className="flex flex-col gap-1 justify-center items-center cursor-pointer hover:bg-black hover:opacity-80">
      <Image className="rounded-full" src={"/celebrity/dualipa.jpg"} width={190} height={190} alt="dualipa"></Image>
      <p>Dua Lipa</p>
      </div>   
      <div className="flex flex-col gap-1 justify-center items-center cursor-pointer hover:bg-black hover:opacity-80">
      <Image className="rounded-full" src={"/celebrity/ZaynMalik.jpg"} width={190} height={190} alt="dualipa"></Image>
      <p>Zayn Malik</p>
      </div>  
      <div className="flex flex-col gap-1 justify-center items-center cursor-pointer hover:bg-black hover:opacity-80">
      <Image className="rounded-full" src={"/celebrity/oliviarodrigo.jpg"} width={190} height={190} alt="dualipa"></Image>
      <p>Olivia Rodrigo</p>
      </div> 
      <div className="flex flex-col gap-1 justify-center items-center cursor-pointer hover:bg-black hover:opacity-80">
      <Image className="rounded-full" src={"/celebrity/lisa.jpg"} width={190} height={190} alt="dualipa"></Image>
      <p>Lisa</p>
      </div> 
    </div>
  </div>
  )
}

export default Borntoday
