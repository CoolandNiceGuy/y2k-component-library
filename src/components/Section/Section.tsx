import React from 'react'
import './section.css'

interface SectionProps {
  title?: string,
  children?: React.ReactNode,
  borderColor?: React.CSSProperties,
}

function Section({title, children, borderColor}: SectionProps) {
  return (
    <div className="section">
      <div className="title">
        <p className="titleText">{title}</p>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default Section