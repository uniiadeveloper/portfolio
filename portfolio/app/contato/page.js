import React from 'react';
import {ChatBubbleBottomCenterIcon} from '@heroicons/react/24/solid'

export default function Home() {
    return(
        <div className="w-full h-screen px-12 gap-4    flex flex-row items-center justify-center  ">
            <div className=' w-[35%] mx-auto h-full flex items-center justify-center  '>
            <div className='w-full py-8 h-fit px-12  flex gap-y-6 flex-col  bg-[#8075ff] '>
                <span className='w-full '>
                    <h1 className='text-5xl font-semibold  text-black  text-center'>
                    Get in touch
                    </h1>
                    <h2 className='text-sm  font-semibold text-neutral-900 my-4  text-center'>
                    We're thrilled that you're considering collaborating with us! If you're ready to take your digital presence to new heights, let's get the ball rolling.
                    </h2>
                </span>
                <form className='flex flex-col w-full items-center justify-center my-auto  gap-4'>  
                  
                    <input type='name' placeholder=' Name' className='w-full h-12 pl-6' />
                   
                 
                    <input type='name' placeholder=' Name'  className='w-full h-12 pl-6' />
                
                 
                    <textarea className='w-full h-20 pl-6 py-4'  placeholder='Menssagem'/>
                  
                    <>
                    <button className='w-full h-12 text-lg  rounded-sm bg-white text-[#8075ff]'>
                        Enviar
                    </button>
                    </>
                </form>
                <div className='w-full py-8'>
                    <h1 className='text-gray-300 text-sm'>
                        or find me on:
                    </h1>
                    <div className='flex flex-row   gap-2'>
                    <ChatBubbleBottomCenterIcon className='w-6 h-6 fill-gray-300'/>
                  <ChatBubbleBottomCenterIcon className='w-6 h-6 fill-gray-300'/>
                  <ChatBubbleBottomCenterIcon className='w-6 h-6 fill-gray-300'/>
                </div>
                </div>
            </div>
            </div>
            <div className='flex    h-full '>
         
                <img   src='/avatar.png' className='bg-center object-container mx-auto  '/>
            </div>
         
      
        </div>
    )
}