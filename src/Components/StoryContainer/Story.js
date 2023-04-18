import React, { useState } from 'react'
import './Story.css'
import ImgTag from '../ImgTag'
const Story = () => {

// const [storyList,setStoryList]=useState([])

const storyList=[
  {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"

  }, {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"
    
  }, {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"
    
  }, {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"
    
  }, {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"
    
  }, {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"
    
  },{
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"

  }, {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"
    
  }, {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"
    
  }, {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"
    
  }, {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"
    
  }, {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"
    
  },
  {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"

  }, {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"
    
  }, {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"
    
  }, {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"
    
  }, {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"
    
  }, {
    "profilePic":"../images/inputIcons/profile.png",
    "username":"name"
    
  },
]







  return (
    <div className='storyList'>

{
  storyList.map((item,index)=>{

return (
<div className='userStory' key={index}>
<ImgTag  src={item.profilePic} width={60} height={60}/>
<span> {item.username} </span>
</div>
)


  })
}



    </div>
  )
}

export default Story