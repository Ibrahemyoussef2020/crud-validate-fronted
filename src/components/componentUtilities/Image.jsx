import React from 'react'

const Image = (
    {
    maxHeight = '100%',
    maxWidth = '100%',
    radius = '50%',
    src,
    alt = 'load image fieled'
}
) => {
  return <img
    style={{
        maxHeight:maxHeight,
        maxWidth:maxWidth,
        borderRadius:radius
    }}
  src={src} alt={alt} />
}

export default Image