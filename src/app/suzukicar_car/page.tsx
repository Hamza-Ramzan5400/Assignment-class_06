import Image from "next/image"
import Link from "next/link"
function ToyotaCorolla() {
    return (
      <div>
  
  <div className=" bg-slate-50 h-screen w-full">     
  <h1 className="text-center text-3xl font-bold underline ">Toyota Corolla 2024 Price in Pakistan,Images,Reviews & Spaces</h1>
  
  <div className="flex justify-center items-center py-6">
      <div className="bg-slate-500 h-fit w-72"><Image src={"/Suzuki_Alto.png"} alt="car" height={450} width={450}/></div>
  </div>
  
      <div className="flex flex-col justify-center items-center">
          <p className="text-center text-sm text-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa molestiae voluptatum deleniti fugit cum veritatis accusantium <br/>excepturi quae temporibus quod exercitationem, eius hic aliquam obcaecati earum, voluptate ab eos accusamus.<br/>
          Minus sunt iure nulla omnis quasi minima suscipit incidunt itaque commodi voluptates nihil ea molestias <br/> enim impedit tempora inventore, eum delectus quisquam consectetur tenetur. Atque omnis consequatur voluptatum quaerat aliquam.</p>
          <h1 className="text-2xl text-green-600 font-medium text-center py-6">PKR 50,000,000</h1>
  
          <button className="bg-blue-800 text-balance text-slate-100 text-sm py-3 px-6 rounded-lg"><Link href="/payment">Make Payment</Link></button>
  
      </div>
  
  
  </div>
  
      </div>
    )
  }
  
  export default ToyotaCorolla
  