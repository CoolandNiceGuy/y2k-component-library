import React from 'react'
import './image.css'

interface ImageProps {
  /**
   * src for the image (used the same way normal image component uses src props)
   */
  src: string,
  /**
   * alt text for the image
   */
  alt: string,
  /**
   * Shape the image will be cliped into
   */
  shape?: 'DEFAULT' | 'LEFT_CHEVRON' | 'RIGHT_CHEVRON'| 'PARALLELOGRAM'
}

const shapeStyles = {
  'DEFAULT': 'polygon(15% 0, 100% 0, 85% 92%, 38% 92%, 33% 100%, 0 100%)',
  'LEFT_CHEVRON': 'polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%)',
  'RIGHT_CHEVRON': 'polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)',
  'PARALLELOGRAM': 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)'
}


/**
 * Basic wrapper React's image component to give it some y2k-inspired shapes
 */
function Image({src, alt, shape='DEFAULT'}: ImageProps) {
  return (
    <div className="imageWrapper">
      <img
        src={src}
        alt={alt}
        className="y2kImage"
        style={{clipPath: shapeStyles[shape]}}
      />
    </div>
  )
}

export default Image