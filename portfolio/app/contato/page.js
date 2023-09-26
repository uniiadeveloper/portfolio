'use client'
import React from 'react';
import {ChatBubbleBottomCenterIcon} from '@heroicons/react/24/solid'
import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';

export default function Home() {
    return(
    
        <div className="grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1  my-auto h-full">
           
            <Card className='h-[90%] w-[80%] mx-auto my-auto flex justify-center  col-span-5  gap-y-14  bg-gradient-to-br from-slate-800 via-slate-700 to-slate-600 rounded-lg shadow-2xl shadow-stone-500  '>
               <CardHeader   className='shadow-none bg-transparent w-full '>
                
                    <Typography  className='text-lightGray text-5xl  font-medium text-center'>
                    Contato
                    </Typography>
                  
                </CardHeader>
                <CardBody className=' w-full  flex flex-col gap-y-8 px-12 '>  
              
                  
                    <input type='email' placeholder=' Seu e-mail' className='w-full rounded-md h-14 pl-6' />
                   
                 
                    <input type='text' placeholder=' Assunto'  className='w-full rounded-md h-14 pl-6' />
                
                 
                    <textarea className='w-full h-24 pl-6 py-4 rounded-md'  placeholder='Menssagem'/>
                  
                 
                    <button className='w-full py-3 rounded-md text-lg   bg-white text-[#8075ff]'>
                        Enviar
                    </button>
                  
                    
                </CardBody>
                <CardFooter className='h-fit px-12'>
               
                    <Typography  variant='lead'  className='text-lightGray py-2  '>
                       Ou contate-me:
                    </Typography >
                    <div className='flex flex-row gap-4 '>
                    <a className='hover:scale-95 group' href='#'>
        <svg className='w-6 h-6 text-lightGray group-hover:text-indigo-600 transition-all duration-500' viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.1 39.5c18.1 0 28.02-15 28.02-28.02 0-.42-.01-.85-.03-1.27A20 20 0 0 0 48 5.1c-1.8.8-3.7 1.32-5.65 1.55a9.9 9.9 0 0 0 4.33-5.45 19.8 19.8 0 0 1-6.25 2.4 9.86 9.86 0 0 0-16.8 8.97A27.97 27.97 0 0 1 3.36 2.3a9.86 9.86 0 0 0 3.04 13.14 9.86 9.86 0 0 1-4.46-1.23v.12A9.84 9.84 0 0 0 9.83 24c-1.45.4-2.97.45-4.44.17a9.87 9.87 0 0 0 9.2 6.84A19.75 19.75 0 0 1 0 35.08c4.5 2.89 9.75 4.42 15.1 4.42Z"
                    fill="currentColor"></path>
            </svg>
          </a>
                    <a className='hover:scale-95 group' href='#'>
        <svg className='w-6 h-6 text-lightGray group-hover:text-indigo-600 transition-all duration-500' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M48 24a24 24 0 1 0-27.75 23.7V30.95h-6.1V24h6.1v-5.29c0-6.01 3.58-9.34 9.07-9.34 2.62 0 5.37.47 5.37.47v5.91h-3.03c-2.98 0-3.91 1.85-3.91 3.75V24h6.66l-1.07 6.94h-5.59V47.7A24 24 0 0 0 48 24Z"
                    fill="currentColor"></path>
           
            </svg>
            </a>
                  <a className='hover:scale-95 group' href='#'>
        <svg className='w-6 h-6 text-lightGray group-hover:text-indigo-600 transition-all duration-500' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24 4.32c6.41 0 7.17.03 9.7.14 2.34.1 3.6.5 4.45.83 1.11.43 1.92.95 2.75 1.79a7.38 7.38 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.11 2.53.14 3.29.14 9.7 0 6.4-.03 7.16-.14 9.68-.1 2.35-.5 3.61-.83 4.46a7.42 7.42 0 0 1-1.79 2.75 7.38 7.38 0 0 1-2.75 1.8c-.85.32-2.12.72-4.46.82-2.53.11-3.29.14-9.69.14-6.41 0-7.17-.03-9.7-.14-2.34-.1-3.6-.5-4.45-.83a7.42 7.42 0 0 1-2.75-1.79 7.38 7.38 0 0 1-1.8-2.75 13.2 13.2 0 0 1-.82-4.46c-.11-2.53-.14-3.29-.14-9.69 0-6.41.03-7.17.14-9.7.1-2.34.5-3.6.83-4.45A7.42 7.42 0 0 1 7.1 7.08a7.38 7.38 0 0 1 2.75-1.8 13.2 13.2 0 0 1 4.46-.82c2.52-.11 3.28-.14 9.69-.14ZM24 0c-6.52 0-7.33.03-9.9.14-2.54.11-4.3.53-5.81 1.12a11.71 11.71 0 0 0-4.26 2.77 11.76 11.76 0 0 0-2.77 4.25C.66 9.8.26 11.55.14 14.1A176.6 176.6 0 0 0 0 24c0 6.52.03 7.33.14 9.9.11 2.54.53 4.3 1.12 5.81a11.71 11.71 0 0 0 2.77 4.26 11.73 11.73 0 0 0 4.25 2.76c1.53.6 3.27 1 5.82 1.12 2.56.11 3.38.14 9.9.14 6.5 0 7.32-.03 9.88-.14 2.55-.11 4.3-.52 5.82-1.12 1.58-.6 2.92-1.43 4.25-2.76a11.73 11.73 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.82.11-2.56.14-3.38.14-9.9 0-6.5-.03-7.32-.14-9.88-.11-2.55-.52-4.3-1.11-5.82-.6-1.6-1.41-2.94-2.75-4.27a11.73 11.73 0 0 0-4.25-2.76C38.2.67 36.45.27 33.9.15 31.33.03 30.52 0 24 0Z"
                    fill="currentColor"></path>
                <path
                    d="M24 11.67a12.33 12.33 0 1 0 0 24.66 12.33 12.33 0 0 0 0-24.66ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM39.7 11.18a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.75 0Z"
                    fill="currentColor"></path>
            </svg>
            </a>
                </div>
                
                </CardFooter>
            </Card>
           
            <div className='col-span-7 w-full mx-auto bg-[url(/avatar.png)] bg-right bg-no-repeat  bg-contain lg:flex md:flex sm:hidden  '/>
         
            </div>
     
    )
}