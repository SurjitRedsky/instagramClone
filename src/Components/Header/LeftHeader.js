import React from 'react'
import AnchorTag from '../AnchorTag'
import ImgTag from '../ImgTag'
import './LeftHeader.css'

const LeftHeader = () => {
  const headerLinks=[
    {
      "url": "*",
      "name": "Home"
    },
    {
      "url": "https://about.meta.com/",
      "name": "Search"
    },{
      "url": "https://about.meta.com/",
      "name": "Explore"
    },{
      "url": "https://about.meta.com/",
      "name": "Reels"
    },{
      "url": "https://about.meta.com/",
      "name": "Messages"
    },{
      "url": "https://about.meta.com/",
      "name": "Notifications"
    },{
      "url": "https://about.meta.com/",
      "name": "Create"
    },{
      "url": "https://about.meta.com/",
      "name": "Profile"
    },
  ]
  
  
  
  
  return (
    <div className='leftHeader'>
  <div className='leftHeaderIcon'>
<ImgTag src={"/images/binstalogo.png"} width={102}/>
    </div>    
<div className='leftHeaderLinks'>
{
  headerLinks.map((item,index)=>{
    return (
      <AnchorTag src={item.url} text={item.name} key={index}/>
      )
    })
}
    </div>
    </div>
  )
}

export default LeftHeader