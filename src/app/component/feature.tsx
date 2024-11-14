
import Link from "next/link"
import Image from "next/image"
function FeatureCar() {
  return (
    <div>
        <div className="flex justify-between items-center bg-slate-100 w-full h-4 py-10">
            <h1 className="text-2xl mx-48 font-semibold">Featured New Cars</h1>
            <p className="mx-48 font-sm text-sm text-blue-400 hover:underline cursor-pointer">View All New Cars</p> 
        </div>
<div className=" bg-slate-100">
             <ul className="flex justify-self-start gap-6 mx-44 text-lg font-medium">
                <li className="hover:font-bold"><Link href="##">Popular</Link></li>
                <li className="hover:font-bold"><Link href="##">Upcoming</Link></li>
                <li className="hover:font-bold"><Link href="##">Newly Launched</Link></li>
            </ul>
            
</div>

        <div className=" bg-slate-100 flex justify-center items-center gap-3 h-80 w-full">
            <div className="bg-white h-60 w-60 rounded-lg"><Link href="/toyotacorola_car">
            <Image 
            src={"/corolla.jpg"} 
            alt="car" 
            width={600} 
            height={600} 
            /></Link>
            <h1 className="text-blue-700 hover:text-blue-500 font-semibold text-center cursor-pointer">Toyota Corolla</h1>
            <div className="text-center text-sm text-green-500">PKR 59.7 - 75.5 lacs</div>
            <div className="text-center"> 6228776 Reviews</div>
            </div>

            <div  className="bg-white h-60 w-60 rounded-lg overflow-hidden ">
            <Link href="/suzukicar_car"><Image src={"/Suzuki_Alto.png"} alt="car" width={600} height={600}/></Link>
            <h1 className="text-blue-700 hover:text-blue-500 font-semibold text-center cursor-pointer">Suzuki Alto</h1>
            <div className="text-center text-sm text-green-500">PKR 87.7 - 95.5 lacs</div>
            <div className="text-center"> 345656 Reviews</div>
            </div>

            <div className="bg-white h-60 w-60 rounded-lg">
            <Link href="/hondacity_car"><Image src={"/Honda_City.jpg"} alt="car" height={600} width={600} /></Link>
            <h1 className="text-blue-700 hover:text-blue-500 font-semibold text-center cursor-pointer">Honda City</h1>
            <div className="text-center text-sm text-green-500">PKR 54.5 - 85.5 lacs</div>
            <div className="text-center"> 995656 Reviews</div>
            </div>                       

            <div className="bg-white h-60 w-60 rounded-lg">
            <Link href="/kiapicanto_car"><Image src={"/Picanto.png"} alt="car" width={600} height={600} /></Link>
            <h1 className="text-blue-700 hover:text-blue-500 font-semibold text-center cursor-pointer">Picanto</h1>
            <div className="text-center text-sm text-green-500">PKR 76.7 - 85.5 lacs</div>
            <div className="text-center"> 34544 Reviews</div>
            </div>

        </div>
    </div>
  )
  };

export default FeatureCar