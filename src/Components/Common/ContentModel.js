import React from 'react'
import Modal from 'react-modal'
import '../Common/PlayingContent/Content.css'
import ImgTag from '../ImgTag';

const ContentModel


= ({ modalIsOpen}) => {


  const customStyles = {
    content: {
      top: '40%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    
    },
  };




  return (
    <div>
<Modal
        isOpen={modalIsOpen}
        className="commentModal"
        // overlayClassName="Overlay"
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={false}
      >

<div className='comment'>
  <div className='commentModalContainer'>
    <div className='commentPost'>
      <ImgTag />
    </div>
    <div className='commentList'>

      sgdfsgdfs
    </div>

  </div>








</div>


      </Modal>

      
    </div>
  )
}

export default ContentModel