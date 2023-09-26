'use client'
import { HeartIcon } from '@heroicons/react/24/solid'
import { Card, CardBody, CardFooter, CardHeader, IconButton } from "@material-tailwind/react";
import { Tooltip, Button, Typography  } from "@material-tailwind/react";


const CUSTOM_ANIMATION = {
    mount: { scale: 1 } ,
    unmount: { scale: 0.7 },  
  };




export default function Home() {
return(  
    <div className="container h-full font-sans lg:p-12 md:p-12 sm:p-0 mx-auto">
       <div className="lg:grid md:grid   lg:grid-cols-12 md:grid-cols-12 sm:col-span-12   h-full   ">
        <Card  className="lg:col-span-4  md:col-span-4   bg-transparent  bg-slate-400 rounded-md h-[85%]  my-auto  shadow-2xl shadow-[#a8a8a8]  ">
        <div className="h-full bg-center bg-cover bg-no-repeat   bg-[url(/avatar.png)] "/>


      <CardFooter className='w-full h-fit py-4   gap-12  bg-slate-300  flex flex-row  items-center justify-center'>
            
      <Tooltip
      animate={CUSTOM_ANIMATION}
            placement="top"
            content={
              <div className="w-fit p-1 bg-black rounded-lg">
             
                <Typography
                  variant="small"
                  color="white"
                  
             
                  className="font-normal  opacity-100"
                
                >
               @count_00
                </Typography>
              </div>
            }
          >
                          <IconButton className='hover:scale-95 group' href='#'>

        <svg className='w-6 h-6 text-gray-500 group-hover:text-indigo-600 transition-all duration-500' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
                    fill="currentColor"></path>
            </svg>
              </IconButton>
        
          </Tooltip>
        

            <Tooltip
            animate={CUSTOM_ANIMATION}
            
            content={
              <div className="w-fit p-1 bg-black rounded-lg ">
             
                <Typography
                  variant="small"
                  color="white"
             
                  className="font-normal opacity-100"
                
                >
               @count_00
                </Typography>
              </div>
            }
          >
             <IconButton className='hover:scale-95 group' href='#'>
        <svg className='w-6 h-6 text-gray-500  group-hover:text-indigo-600 transition-all duration-500' viewBox="0 0 48 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M15.1 39.5c18.1 0 28.02-15 28.02-28.02 0-.42-.01-.85-.03-1.27A20 20 0 0 0 48 5.1c-1.8.8-3.7 1.32-5.65 1.55a9.9 9.9 0 0 0 4.33-5.45 19.8 19.8 0 0 1-6.25 2.4 9.86 9.86 0 0 0-16.8 8.97A27.97 27.97 0 0 1 3.36 2.3a9.86 9.86 0 0 0 3.04 13.14 9.86 9.86 0 0 1-4.46-1.23v.12A9.84 9.84 0 0 0 9.83 24c-1.45.4-2.97.45-4.44.17a9.87 9.87 0 0 0 9.2 6.84A19.75 19.75 0 0 1 0 35.08c4.5 2.89 9.75 4.42 15.1 4.42Z"
                    fill="currentColor"></path>
            </svg>
          </IconButton>
              
          </Tooltip>
       
          
            <Tooltip
            animate={CUSTOM_ANIMATION}

      content={
        <div className="w-fit p-1 bg-black rounded-lg">
       
          <Typography
            variant="small"
            color="white"
       
            className="font-normal opacity-100"
          
          >
         @count_00
          </Typography>
        </div>
      }
    >
             <IconButton className='hover:scale-95 group' href='#'>
        <svg className='w-6 h-6 text-gray-500 group-hover:text-indigo-600 transition-all duration-500' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M48 24a24 24 0 1 0-27.75 23.7V30.95h-6.1V24h6.1v-5.29c0-6.01 3.58-9.34 9.07-9.34 2.62 0 5.37.47 5.37.47v5.91h-3.03c-2.98 0-3.91 1.85-3.91 3.75V24h6.66l-1.07 6.94h-5.59V47.7A24 24 0 0 0 48 24Z"
                    fill="currentColor"></path>
           
            </svg>
            </IconButton>
    </Tooltip>
       
                <Tooltip
                animate={CUSTOM_ANIMATION}
            
      content={
        <div className="w-fit p-1 bg-black rounded-lg">
       
          <Typography
            variant="small"
            color="white"
       
            className="font-normal opacity-100"
          
          >
         @count_00
          </Typography>
        </div>
      }
    >
             <IconButton variant={'outlined'}   className='hover:scale-95 group' href='#'  ripple={true}>
        <svg className='w-6 h-6 text-gray-500 group-hover:text-indigo-600 transition-all duration-500' viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M24 4.32c6.41 0 7.17.03 9.7.14 2.34.1 3.6.5 4.45.83 1.11.43 1.92.95 2.75 1.79a7.38 7.38 0 0 1 1.8 2.75c.32.85.72 2.12.82 4.46.11 2.53.14 3.29.14 9.7 0 6.4-.03 7.16-.14 9.68-.1 2.35-.5 3.61-.83 4.46a7.42 7.42 0 0 1-1.79 2.75 7.38 7.38 0 0 1-2.75 1.8c-.85.32-2.12.72-4.46.82-2.53.11-3.29.14-9.69.14-6.41 0-7.17-.03-9.7-.14-2.34-.1-3.6-.5-4.45-.83a7.42 7.42 0 0 1-2.75-1.79 7.38 7.38 0 0 1-1.8-2.75 13.2 13.2 0 0 1-.82-4.46c-.11-2.53-.14-3.29-.14-9.69 0-6.41.03-7.17.14-9.7.1-2.34.5-3.6.83-4.45A7.42 7.42 0 0 1 7.1 7.08a7.38 7.38 0 0 1 2.75-1.8 13.2 13.2 0 0 1 4.46-.82c2.52-.11 3.28-.14 9.69-.14ZM24 0c-6.52 0-7.33.03-9.9.14-2.54.11-4.3.53-5.81 1.12a11.71 11.71 0 0 0-4.26 2.77 11.76 11.76 0 0 0-2.77 4.25C.66 9.8.26 11.55.14 14.1A176.6 176.6 0 0 0 0 24c0 6.52.03 7.33.14 9.9.11 2.54.53 4.3 1.12 5.81a11.71 11.71 0 0 0 2.77 4.26 11.73 11.73 0 0 0 4.25 2.76c1.53.6 3.27 1 5.82 1.12 2.56.11 3.38.14 9.9.14 6.5 0 7.32-.03 9.88-.14 2.55-.11 4.3-.52 5.82-1.12 1.58-.6 2.92-1.43 4.25-2.76a11.73 11.73 0 0 0 2.77-4.25c.59-1.53 1-3.27 1.11-5.82.11-2.56.14-3.38.14-9.9 0-6.5-.03-7.32-.14-9.88-.11-2.55-.52-4.3-1.11-5.82-.6-1.6-1.41-2.94-2.75-4.27a11.73 11.73 0 0 0-4.25-2.76C38.2.67 36.45.27 33.9.15 31.33.03 30.52 0 24 0Z"
                    fill="currentColor"></path>
                <path
                    d="M24 11.67a12.33 12.33 0 1 0 0 24.66 12.33 12.33 0 0 0 0-24.66ZM24 32a8 8 0 1 1 0-16 8 8 0 0 1 0 16ZM39.7 11.18a2.88 2.88 0 1 1-5.76 0 2.88 2.88 0 0 1 5.75 0Z"
                    fill="currentColor"></path>
            </svg>
            </IconButton>
    </Tooltip>
           

       
       
           

       
            </CardFooter>
        </Card>
        
        <Card className="lg:col-span-7 md:col-span-7 sm:col-span-12  lg:px-8 md:px-8   mx-auto  h-full bg-transparent shadow-none">
            <CardHeader className='bg-transparent shadow-none '>   
            <Typography className="leading-10   my-12 text-5xl font-medium   "> About me</Typography> </CardHeader>
            <CardBody className='flex justify-center gap-2 flex-col '>
        
             
                <Typography variant='h5'  className="text-slate-700 font-normal my-2">My name is Matt, and I am a passionate and experienced web designer and product designer. </Typography>
              <Typography variant='h5'  className="text-slate-700 font-normal my-2">With a keen eye for aesthetics and a deep understanding of user experience, I strive to create digital experiences that are not only visually stunning but also highly functional and intuitive. </Typography>
              <Typography variant='h5'  className="text-slate-700 font-normal my-2">My journey in design began 7 years ago, and since then, I have had the privilege of working with a diverse range of clients, from startups to established businesses, helping them elevate their online presence and product offerings. </Typography>

</CardBody>
<CardFooter className='mt-14'>
   
            <button className="hover:-translate-y-1 transition-all duration-700 hover:shadow-lg hover:shadow-gray-400 bg-gradient-to-br from-indigo-400 from-15% via-indigo-500 via-50% to-indigo-600 to-80%  rounded-md text-xl text-white w-fit px-20 py-2  h-fit  mr-auto  ">
            Fale comigo
            </button>
            
          
           
        
            </CardFooter>
        </Card>
       </div>
       
    </div>
)
}