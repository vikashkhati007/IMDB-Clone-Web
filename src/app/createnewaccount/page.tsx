import Image from "next/image"
import Link from "next/link"
const page = () => {
    return (
        <div className="w-full h-screen bg-white text-black">
            <div className="createaccountcontainer flex justify-center pt-5 flex-col items-center gap-5">
                <div>
                    <Link href={"/"}>
                    <Image className="border-2 border-black rounded-lg cursor-pointer" src={"/imdb_.png"} width={100} height={100} alt="imdblogo" />
                    </Link>
                </div>
                <div className="usercreatecontainer text-black border border-gray-200 w-96 p-5 flex flex-col gap-5 shadow-md rounded-md">
                    <h1 className="text-black text-2xl font-medium">Create Account</h1>
                    <div>
                        <h4 className="text-sm font-bold text-black">Your name</h4>
                        <input className="text-black border border-gray-400 rounded-sm w-full" type="text" ></input>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-black">Email</h4>
                        <input className="text-black border border-gray-400 rounded-sm w-full" type="email"></input>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-black">Password</h4>
                        <input className="text-black border border-gray-400 rounded-sm w-full" type="password"></input>
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-black">Re-enter password</h4>
                        <input className="text-black border border-gray-400 rounded-sm w-full" type="password"></input>
                    </div>
                    <div>
                        <button className="text-black text-sm border bg-gradient-to-t from-yellow-500 to-yellow-200 w-full h-8 rounded-sm border-black">Create Your Imdb Account</button>
                    </div>

                    <p className="text-black text-sm">Already Have an Account?<Link href={"/signin"}> <a className="text-blue-800">Signin</a></Link></p>
                </div>
            </div>
        </div>
    )
}

export default page
