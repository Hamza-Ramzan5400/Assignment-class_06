
import Link from "next/link"
function PaymentDetails() {
  return (
    <div className="bg-gray-300 h-screen w-full"> 

        <h1 className="text-center text-5xl py-10 italic underline font-semibold">Enter Your Details</h1>
        
    <div>
        <form className="flex flex-col border justify-center items-center">
            <input className="p-2  m-2 rounded-2xl w-2/5 border border-red-600  hover:border-cyan-400" type="email" placeholder="enter your email"/>
            <input className="p-2 m-2 rounded-2xl w-2/5 border border-red-600 hover:border-cyan-400" type="password" placeholder="enter your password"/>
            <input className="p-2 m-2 rounded-2xl w-2/5 border border-red-600 hover:border-cyan-400" type="number" placeholder="enter your phone number"/>
            <input className="p-2 m-2 rounded-2xl w-2/5 border border-red-600 hover:border-cyan-400" type="adress" placeholder="enter your Adress"/>
            <button className="bg-green-600 hover:bg-green-700 p-2 m-2 rounded-2xl w-2/5"><Link href="/thankyou">place your order</Link></button>
        </form>
    </div>

    </div>
  )
}

export default PaymentDetails