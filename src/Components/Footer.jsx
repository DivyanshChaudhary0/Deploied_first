import React from 'react'

const Footer = () => {
  return (
    <div className=' w-full bg-black text-white py-10'>
        <div className=' w-[70%] mx-auto grid grid-cols-2 items-center justify-items-center	md:grid-cols-5 gap-20 '>

            <div>
                <p className=' text-2xl'>Yummy<span className=" text-yellow-400">Food</span></p>
                <p>© 2024 Bundl Technologies Pvt. Ltd</p>
            </div>

            <div>
                <ul>
                    <li className=' text-xl font-bold py-2'>Company</li>
                    <li className=' text-gray-400 py-2'>About</li>
                    <li className=' text-gray-400 py-2' >Career</li>
                    <li className=' text-gray-400 py-2'>Team</li>
                    <li className=' text-gray-400 py-2'>Yummy One</li>
                    <li className=' text-gray-400 py-2'>Yummy Instamart</li>
                    <li className=' text-gray-400 py-2'>Yummy Genie</li>
                </ul>
            </div>

           
           <div>
           <div> 
                <ul>
                    <li className=' text-xl font-bold py-2'>Contact US</li>
                    <li className=' text-gray-400 py-2'>Help And Support</li>
                    <li className=' text-gray-400 py-2'>Partner with us</li>
                    <li className=' text-gray-400 py-2'>Ride with us</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li className=' text-xl font-bold py-2'>Legal</li>
                    <li className=' text-gray-400 py-2'>Terms and Conditions</li>
                    <li className=' text-gray-400 py-2' >Cookie Policy</li>
                    <li className=' text-gray-400 py-2'>Privacy Policy</li>
                </ul>
            </div>
           </div>
           

            <div>
                <ul>
                    <li className=' text-xl font-bold py-2'>We deliver to:</li>
                    <li className=' text-gray-400 py-2'>Banglore</li>
                    <li className=' text-gray-400 py-2' >Noida</li>
                    <li className=' text-gray-400 py-2'>Delhi</li>
                    <li className=' text-gray-400 py-2'>Aligarh</li>
                    <li className=' text-gray-400 py-2'>Khair</li>
                    <li className=' text-gray-400 py-2'>Khera Sattu</li>
                </ul>
            </div>

        </div>
    </div>
  )
}

export default Footer