import React from 'react'

const ImgTag = ({ src, id, width,height, handleClick }) => {
	return (
		<img src={src} id={id} width={width} height={height}
			alt="icon"
			onClick={handleClick}
		/>
	)
}

export default ImgTag