import Link from "next/link"
const signin = () => {
  return (
    <>
      <div className="signincontainer bg-gray-400 w-full h-screen flex justify-center">
        <div className="usersigincontainer bg-white w-3/4 h-3/4 shadow-md text-black flex justify-between">
          <div className="authcontainer text-black flex flex-col gap-2 m-10 ">
            <h1 className="text-black font-bold text-center text-2xl">Sign in</h1>
            <button className="border border-gray-300 rounded-sm font-bold text-gray-600 cursor-pointer w-60 py-1 flex items-center gap-5 p-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" aria-label="IMDb" viewBox="0 0 512 512" id="imdb"><rect width="512" height="512" fill="#f5c518" rx="15%"></rect><path d="M104 328V184H64v144zM189 184l-9 67-5-36-5-31h-50v144h34v-95l14 95h25l13-97v97h34V184zM256 328V184h62c15 0 26 11 26 25v94c0 14-11 25-26 25zm47-118l-9-1v94c5 0 9-1 10-3 2-2 2-8 2-18v-56-12l-3-4zM419 220h3c14 0 26 11 26 25v58c0 14-12 25-26 25h-3c-8 0-16-4-21-11l-2 9h-36V184h38v46c5-6 13-10 21-10zm-8 70v-34l-1-11c-1-2-4-3-6-3s-5 1-6 3v57c1 2 4 3 6 3s6-1 6-3l1-12z"></path></svg> Sign in with IMDb</button>
            <button className="border border-gray-300 rounded-sm font-bold text-gray-600 cursor-pointer w-60 py-1 flex items-center gap-5 p-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 48 48" id="amazon"><rect width="48" height="48" fill="#333" rx="24"></rect><path fill="#fff" d="M32.551 27.4557C31.8839 26.543 31.1683 25.8005 31.1683 24.1022V18.4647C31.1683 16.0753 31.3415 13.8819 29.561 12.2381 28.1595 10.9051 25.8313 10.4348 24.0508 10.4348 20.5685 10.4348 16.6838 11.7194 15.8691 15.9763 15.7829 16.4285 16.1149 16.6652 16.4159 16.7317L19.9618 17.1113C20.2939 17.0946 20.5337 16.7718 20.5979 16.4466 20.902 14.9797 22.144 14.275 23.5395 14.275 24.2921 14.275 25.1468 14.5473 25.5923 15.2149 26.1051 15.9582 26.0363 16.9797 26.0363 17.8379V18.3104C23.9155 18.5448 21.1411 18.7006 19.1548 19.5618 16.8638 20.5432 15.255 22.5401 15.255 25.4754 15.255 29.237 17.6489 31.1175 20.7311 31.1175 23.3323 31.1175 24.7558 30.5103 26.7625 28.487 27.4281 29.4412 27.6459 29.9009 28.8599 30.8997 29.1322 31.0434 29.4832 31.0297 29.7244 30.8136L29.7252 30.8128 29.7335 30.8218C30.4642 30.1792 31.7909 29.0389 32.5389 28.419 32.8377 28.1762 32.7847 27.7838 32.551 27.4557zM25.3518 25.83C24.771 26.8508 23.8459 27.4753 22.818 27.4753 21.4164 27.4753 20.5934 26.4167 20.5934 24.8508 20.5934 21.7681 23.3905 21.2086 26.0356 21.2086V21.9897H26.0363C26.0363 23.3998 26.0704 24.574 25.3518 25.83zM36.9242 33.6073C33.4216 36.1906 28.3422 37.5652 23.9677 37.5652 17.8391 37.5652 12.3187 35.3007 8.14148 31.5307 7.81382 31.2343 8.10628 30.8294 8.49993 31.0596 13.0074 33.6816 18.5806 35.2599 24.3366 35.2599 28.22 35.2599 32.4881 34.455 36.4153 32.7888 37.0077 32.5384 37.5042 33.18 36.9242 33.6073z"></path><path fill="#fff" d="M38.3817 31.9432C37.9341 31.3705 35.4194 31.6718 34.2917 31.808C33.9486 31.8478 33.8959 31.5502 34.2041 31.3318C36.2093 29.9239 39.4952 30.3313 39.8774 30.802C40.2625 31.2791 39.7769 34.5717 37.8972 36.1425C37.608 36.3849 37.3334 36.2573 37.4612 35.9374C37.8839 34.8805 38.8311 32.5169 38.3817 31.9432Z"></path></svg> Sign in with Amazon</button>
            <button className="border border-gray-300 rounded-sm font-bold text-gray-600 cursor-pointer w-60 py-1 flex items-center gap-5 p-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" preserveAspectRatio="xMidYMid" viewBox="0 0 256 262" id="google"><path fill="#4285F4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34A853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#FBBC05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path><path fill="#EB4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg> Sign in with Google</button>
            <button className="border border-gray-300 rounded-sm font-bold text-gray-600 cursor-pointer w-60 py-1 flex items-center gap-5 p-3"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 128 128" id="apple"><path d="M97.905 67.885c.174 18.8 16.494 25.057 16.674 25.137-.138.44-2.607 8.916-8.597 17.669-5.178 7.568-10.553 15.108-19.018 15.266-8.318.152-10.993-4.934-20.504-4.934-9.508 0-12.479 4.776-20.354 5.086-8.172.31-14.395-8.185-19.616-15.724-10.668-15.424-18.821-43.585-7.874-62.594 5.438-9.44 15.158-15.417 25.707-15.571 8.024-.153 15.598 5.398 20.503 5.398 4.902 0 14.106-6.676 23.782-5.696 4.051.169 15.421 1.636 22.722 12.324-.587.365-13.566 7.921-13.425 23.639m-15.633-46.166c4.338-5.251 7.258-12.563 6.462-19.836-6.254.251-13.816 4.167-18.301 9.416-4.02 4.647-7.54 12.087-6.591 19.216 6.971.54 14.091-3.542 18.43-8.796"></path></svg>Sign in with Apple</button>
            <p className="text-black text-center">or</p>
            <Link href={"/createnewaccount"}>
              <button className="border border-gray-300 rounded-md font-bold text-black cursor-pointer w-60 py-1 shadow-inner bg-yellow-500">Create a New Account</button>
            </Link>
          </div>
          <div className="border-l-2 h-1/2 mt-4">

          </div>
          <div className="detailscontainer m-10 flex gap-1 flex-col">
            <h1 className="text-black font-bold text-3xl">Benefits of your free IMDb account</h1>
            <h2 className="text-black font-bold">Personalized Recommendations</h2>
            <p className="text-black">Discover shows you&apos;ll love.</p>
            <h2 className="text-black font-bold">Your Watchlist</h2>
            <p className="text-black">Track everything you want to watch and receive e-mail when movies open in theaters.</p>
            <h2 className="text-black font-bold">Your Ratings</h2>
            <p className="text-black">Rate and remember everything you&apos;ve seen.</p>
            <h2 className="text-black font-bold">Contribute to IMDb</h2>
            <p className="text-black">Add data that will be seen by millions of people and get cool badges.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default signin
