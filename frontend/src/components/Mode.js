import React from 'react'

const Mode = () => {
    const handleMode = () =>{
        const html = document.querySelector('html')
        if(html.classList.contains('dark')){
            html.classList.remove('dark')
        }else{
            html.classList.add('dark')
        }
    }
  return (
        <div className='absolute right-[10px] top-[10px]'>
            <button className='px-4 py-2 rounded-[8px] btnCustom font-medium'
            onClick={()=>{
                handleMode()
            }}>
                Mode
            </button>
        </div>
  )
}

export default Mode