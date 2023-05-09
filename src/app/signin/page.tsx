import Header from "../../../components/header"
import Footer from "../../../components/footer"
const signin = () => {
  return (
    <>
    <Header/>
      <div className="signincontainer bg-gray-400 w-full h-screen flex justify-center">
        <div className="usersigincontainer bg-white w-3/4 h-3/4 shadow-md text-black flex justify-between">
          <div className="authcontainer text-black flex flex-col gap-2 m-10">
          <h1 className="text-black font-bold text-center text-2xl">Sign in</h1>
          <button className="border border-gray-300 rounded-sm font-bold text-gray-600 cursor-pointer w-60 py-1">Sign in with IMDB</button>
          <button className="border border-gray-300 rounded-sm font-bold text-gray-600 cursor-pointer w-60 py-1">Sign in with Amazon</button>
          <button className="border border-gray-300 rounded-sm font-bold text-gray-600 cursor-pointer w-60 py-1">Sign in with Google</button>
          <button className="border border-gray-300 rounded-sm font-bold text-gray-600 cursor-pointer w-60 py-1">Sign in with Apple</button>
          <p className="text-black text-center">or</p>
          <button className="border border-gray-300 rounded-md font-bold text-black cursor-pointer w-60 py-1 bg-yellow-500">Create a New Account</button>
          
          </div>
          <div className="border-l-2 h-1/2 mt-4">

          </div>
          <div className="detailscontainer m-10 flex gap-1 flex-col">
          <h1 className="text-black font-bold text-3xl">Benefits of your free IMDb account</h1>
          <h2 className="text-black font-bold">Personalized Recommendations</h2>
          <p className="text-black">Discover shows you'll love.</p>
          <h2 className="text-black font-bold">Your Watchlist</h2>
          <p className="text-black">Track everything you want to watch and receive e-mail when movies open in theaters.</p>
          <h2 className="text-black font-bold">Your Ratings</h2>
          <p className="text-black">Rate and remember everything you've seen.</p>
          <h2 className="text-black font-bold">Contribute to IMDb</h2>
          <p className="text-black">Add data that will be seen by millions of people and get cool badges.</p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default signin
