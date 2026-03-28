import React from 'react'
import AihsforCard from './AihsforCard'

function Aihsfor() {
  return (
   <div className="w-full  mx-auto rounded-lg bg-gray-100 px-6 py-6 text-sm text-[#000000] shadow-md sm:px-2  md:px-20">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-2xl font-bold text-[#000000] sm:mr-30">Program Hghlights</h1>
                <p className="text-gray-500">Four days of intensive learning, debates, and networking opportunities.</p>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <AihsforCard/>
            </div>
   </div>
  )
}

export default Aihsfor