

import React from 'react'
import Button from '../../Button';

const CommentModal = ( {isOpen,onClose,children }) => {
if(!isOpen){
  return null;
}

  return (
    <div className='commentModalContiner'>
      <div className='commentModal'>
        <Button text={"X"} onclick={onClose} />
        {
          children
        }
      </div>

    </div>
  )
}

export default CommentModal