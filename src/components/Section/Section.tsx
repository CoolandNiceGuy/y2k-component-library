import React from 'react'
import './section.css'

interface SectionProps {
  /**
   * Text used to label section
   */
  title?: string,
  /**
   * Color used for label background and content border
   */
  mainColor?: string,
  /**
   * Color used for all text in section
   */
  textColor?: string,
  /**
   * Child components to render inside of section
   */
  children: React.ReactNode,
}

/**
 * UI Component used to house closely-related content
 */
function Section({title, mainColor, textColor, children}: SectionProps) {
  return (
    <div className="section">
      <div className="sectionTitle" style={{background: mainColor, color: textColor}}>
        <p className="sectionTitleText">{title}</p>
        <div className="parallelogram" style={{background: mainColor}}/>
      </div>
      <div className="sectionContent" style={{border: `solid ${mainColor} 5px`, color: textColor}}>
        {children}
      </div>
    </div>
  )
}

export default Section