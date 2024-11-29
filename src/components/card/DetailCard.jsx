import React from 'react'

function DetailCard({title, text,small_text,detail_text}) {
  return (
    <div className='w-full flex justify-between items-center overflow-hidden capitalize p-3 md:p-4 border-b border-slate-200'>
        <p className='font-semibold'>{title}</p>
        <p className='text-right'>{text} <small className='block'>{small_text}</small>
        <small>{detail_text}</small>
        </p>
    </div>
  )
}

export default DetailCard