import React from 'react'
import './snippet.css'

interface SnippetProps {
  /**
   * Title of the Snippet, used in top bar
   */
  title: string,
  /**
   * Image address to be used for Snippet image
   */
  imageUrl: string,
  /**
   * Text used to populate CTA Button
   */
  ctaText: string,
  /**
   * Link address where the CTA Button will take user
   */
  ctaDestination: string,
  /**
   * Text to be shown in body of component
   */
  bodyText: string,
  /**
   * Header to to above body text
   */
  headerText?: string,
  /**
   * Color of top bar and border of Snippet (must be in hex)
   */
  color?: string,
  /**
   * Whether or not Snippet should be transparent, color must ALSO be passed for hasBackground prop to work
   */
  hasBackground?: boolean,
}

function hexToRGB(hex: string, alpha: number) {
  var r = parseInt(hex.slice(1, 3), 16),
      g = parseInt(hex.slice(3, 5), 16),
      b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
      return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
      return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

/**
 * UI Component used to house brief information about linked webpage
 */
function Snippet({title, imageUrl, ctaText, ctaDestination, bodyText, color, headerText='', hasBackground=false}: SnippetProps) {
  return (
    <div className="snippet">
      <div className="snippetHeader" style={{background: color}}>
      <h1 className="snippetTitle">{title}</h1>
      </div>
      <div className="snippetContent" style={{border: `solid ${color} 3px`, background: (hasBackground && color)? hexToRGB(color, .2): 'transparent'}}>
        <img src={imageUrl} className="snippetImage"/>
        <div className="snippetText">
          {headerText.length > 0 &&
            <h2>{headerText}</h2>
          }
          <p>
            {bodyText}
          </p>
          <a href={ctaDestination}>
            <button>{"+" + ctaText}</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Snippet