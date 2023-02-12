import React from 'react'
import './section.css'
import { hexToRGB, createGradientColor } from '../../helpers'

interface SectionProps {
  /**
   * Text used to label section
   */
  title?: string,
  /**
   * Color used for label background and content border
   */
  mainColor: string,
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
function Section({title, mainColor = "#b4b5c8", textColor, children}: SectionProps) {

  const color1 = hexToRGB(mainColor, 1);
  const color2 = createGradientColor(mainColor);

  const linearGradient = "linear-gradient(" + color1 + ", " + color2 + ")"

  return (
    <div className="section">
      <div className="sectionTitle" style={{background: linearGradient, color: textColor}}>
        <p className="sectionTitleText">{title}</p>
        <div className="parallelogram" style={{background: linearGradient}}/>
      </div>
      <div className="sectionContent" style={{border: `solid ${color2} 5px`, color: textColor, borderTop: `solid ${color2} 15px`}}>
        {children}
      </div>
    </div>
  )
}

export default Section