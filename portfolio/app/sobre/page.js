'use client'
import { HeartIcon } from '@heroicons/react/24/solid'
import { IconButton } from "@material-tailwind/react";

export default function Home() {
return(
    <div className="w-full h-screen bg-white font-sans">
       <div className="flex flex-row w-full h-full items-center justify-center gap-6">
        <div className=" flex items-center justify-center w-1/3 h-full ">
            <img src='https://framerusercontent.com/images/NQizOOD0QdxRke3QITlfs0h5wM.png?scale-down-to=1024' className="absolute  w-[30%] h-[85%]      "/>
        <div className="flex w-full h-full items-end justify-center">
            <div className="w-full h-1/6 bg-indigo-600 bg-opacity-90  my-6 ">

            </div>
        </div>
        </div>
        
        <div className=" px-8  h-fit  ">
          <span className="max-w-2xl gap-y-4 flex font-light text-left  font-sans  flex-col justify-center items-center">
                <p className="text-6xl text-black  font-semibold pb-10  mr-auto"> About me.</p>
                <p className="text-slate-700 text-xl">My name is Matt, and I am a passionate and experienced web designer and product designer.. </p>
                <p className="text-slate-700 text-xl">With a keen eye for aesthetics and a deep understanding of user experience, I strive to create digital experiences that are not only visually stunning but also highly functional and intuitive. </p>
                <p className="text-slate-700 text-xl">My journey in design began 7 years ago, and since then, I have had the privilege of working with a diverse range of clients, from startups to established businesses, helping them elevate their online presence and product offerings. </p>
</span>
<div className="w-full   flex flex-col  ">

            <button className="hover:-translate-y-1 transition-all duration-700 hover:shadow-lg hover:shadow-gray-400 bg-gradient-to-br from-indigo-300 from-15% via-indigo-500 via-50% to-indigo-700 to-80%  rounded-md text-xl text-white w-fit px-20 py-2  h-fit mt-6 mr-auto  ">
asas
            </button>
          
            <div className='flex text-base flex-row gap-2 py-6 font-light items-center w-fit '>
               
                designs you’ll
              
                <HeartIcon className='w-5 h-5 fill-red-600 '/>
              
                 guaranteed
               
            </div>
            <div className=''>
                <h1 className='text-slate-800 text-lg'>
            or find me on:
            </h1>
           
            </div>
        
        </div>
        </div>
       </div>
       
    </div>
)
}