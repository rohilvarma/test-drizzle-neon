import Link from "next/link"

const Navbar = () => {
  return <nav className="border-b border-b-slate-600 py-4">
    <div className="container">
      <h1 className="font-bold text-3xl">
        <Link href={'/'}>
          <span className="text-violet-800">R</span><span className="">Blog</span>
        </Link>
      </h1>
    </div>
  </nav>
}

export default Navbar