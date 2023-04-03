import React from 'react'

const AnchorTag = ( {href,className,id,text, fontIcon}) => {
  return (
   <>
   <a  href={href} className={className} id={id}>{ fontIcon} {text}  </a>
   </>
  )
}

export default AnchorTag