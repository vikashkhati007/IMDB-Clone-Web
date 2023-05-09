import Link from "next/link"
const UserAuthenticate = () => {
  return (
    <>
      <span className="text-sm font-bold">
        <Link href={"/signin"}>
        Sign-In
        </Link>
    </span>
    </>
  )
}

export default UserAuthenticate
