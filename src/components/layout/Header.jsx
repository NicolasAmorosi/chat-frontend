import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export function Header({contacto}){
  const [isopen,setIsopen] = useState(false)
    return(
    <div className=" bg-zinc-700 mt-0   h-12 flex items-center  justify-between text-slate-50 text-left text-xl p-8">
        <div className=' flex items-center cursor-pointer' onClick={()=>setIsopen(true)}>
            <img className=" bg-white h-11 w-11 rounded-full mr-4" />
            {contacto}
        </div>
        <div className='flex items-center justify-center p-1 rounded-full cursor-pointer'>
          <MoreVertIcon className='!h-7 !w-7  '/>
        </div>
        {
          isopen && (
            <div className='fixed inset-0  flex justify-end'>
              <div className=' bg-zinc-900 w-1/4  flex flex-col gap-3 items-center relative'>
                  <button className=' absolute top-3 left-4' onClick={()=> setIsopen(false)}><CloseIcon className='!h-7 !w-7'/></button>
                  <div className=' bg-zinc-800 w-full p-1 flex flex-col gap-3 items-center rounded-sm '>
                  <img className="bg-white h-60 w-60 rounded-full mt-28" url=""/>
                  {contacto}
                  <span>3437037084</span>
                  </div>
                 
                  <div className=' bg-zinc-800 w-full p-1 flex flex-col gap-3 items-center h-44 rounded-sm '>
                  <h1>Informacion</h1>
                  <p>Blablabla</p>
                  </div>
                  
                  
              </div>

            </div>
          )
        }
    </div>  
    )
}