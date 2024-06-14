import React from 'react'
const ControlBar = () => {
  const btnClass = `rounded-[10px] w-[130px] py-[5px] duration-[0.3s] btnCustom`
  return (
    <>
      <div className='flex flex-row items-center justify-center gap-2 pt-[50px]'>
        <button className={btnClass}>
          Form Control
        </button>
        <button className={btnClass}>
          Data Table
        </button>
      </div>
      
    </>
  )
}

export default ControlBar