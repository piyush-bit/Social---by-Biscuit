import React from 'react'

function PageIndicator({size,page,setPage}) {
    const onClickHandler = (e)=>{
        setPage(Number(e.target.id))
    }
  return (
    <div className="w-full flex gap-1 px-4 my-2">

        
        {Array.from({ length: size }).map((e,i) => (
          <div onClick={onClickHandler}
          key={i} id={i} className={`h-1 rounded-sm m n flex-grow ${i==page?'bg-gray-200':'bg-gray-700'}`}></div>
        ))}
      </div>
  )
}

export default PageIndicator