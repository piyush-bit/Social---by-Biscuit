import React from 'react'

function ImageHolder({src,page}) {
  return (
    <div className="absolute h-full w-[420px] flex gap-0  "
      style={{transform : `translate(-${page*420}px,0px)`}}>
        
        {src.map((e,i) => (
          <img key={i} className="object-cover w-[42    0px]" src={e} alt="" />
        ))}
      </div>
  )
}

export default ImageHolder