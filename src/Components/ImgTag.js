import React from 'react'

const ImgTag = ({ src, id, width, handleClick }) => {
	return (
		<img src={src} id={id} width={width}
			alt="icon"
			onClick={handleClick}
		/>
	)
}

export default ImgTag