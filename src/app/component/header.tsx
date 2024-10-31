import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <div>
      <header className="flex  bg-black text-slate-100 h-24 text-lg w-full ">
        <div className="flex justify-evenly items-center mx-20 w-40 font-medium cursor-pointer">
        <Image src={"/logo.png"} alt="logo" height={450} width={450}/>
          
        </div>

        <div className="flex justify-center items-center gap-5 mx-12 ">
          <div className=" hover:text-red-700 hover:underline">
            <Link href="##">Used Cars</Link>
          </div>
          <div className=" hover:text-red-700 hover:underline">
            <Link href="##">New Cars</Link>
          </div>
          <div className=" hover:text-red-700 hover:underline">
            <Link href="##">Bikes</Link>
          </div>
          <div className=" hover:text-red-700 hover:underline">
            <Link href="##">Auto Store</Link>
          </div>
          <div className=" hover:text-red-700 hover:underline">
            <Link href="##">Videos</Link>
          </div>
          <div className=" hover:text-red-700 hover:underline">
            <Link href="##">Forums</Link>
          </div>
          <div className=" hover:text-red-700 hover:underline">
            <Link href="##">Blog</Link>
          </div>
          <div className=" hover:text-red-700 hover:underline">
            <Link href="##">More</Link>
          </div>
          <button className=" bg-red-600 hover:bg-red-700 rounded-md py-2 px-6 mx-6">
            Post an Ad
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
