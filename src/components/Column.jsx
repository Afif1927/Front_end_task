import React from 'react'
import Card from './card';

const Column = ({title,number}) => {
  return (
    <div className='min-w-72 flex flex-col gap-4 bg-gray-200 rounded'>
        <div className='flex justify-between text-[20px] px-5 py-1'>
        <span>{title}</span>
        <span>{number}</span>
       </div> 
       <div className='flex flex-col overflow-y-auto gap-4 p-2 rounded h-[80vh]'>
        {Array.from({length:20}).map((_, index) => (
          <Card key={index}/>
        ))}
       </div>
    </div>
  )
}

export default Column;


