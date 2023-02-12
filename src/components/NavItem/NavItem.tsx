import React from 'react'
import './navItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'


type Props = {
  /**
   * Supported FontAwesome Icons
   */
  iconName: 'house' | 'bars' | 'user' | 'code' | 'terminal' | 'gears' | 'facebook' | 'twitter' | 'github' | 'linkedin' | 'tiktok' | 'twitch'
  /**
   * Destinations to send user upon clicking the button
   */
  linkDestination: string,
  /**
   * Color of button (intended to be matched with color used in Nav Component)
   */
  color?: 'red' | 'blue' | 'green',
  /**
   * Orientation of button, this doesnt change anything but gradient direction
   */
  orientation?: 'vertical' | 'horizontal'
}

const SOCIALS = ['facebook', 'twitter', 'github', 'linkedin', 'tiktok', 'twitch'];

/**
 * Component to be used for populating nav bar. These buttons are used as links
 */
export default function NavItem({iconName, linkDestination, color = 'blue', orientation = 'vertical'}: Props) {

  const rotation = (orientation === 'vertical')? '90deg':'0deg';

  const COLORS = {
    green: 'linear-gradient(' + rotation + ', rgba(45,98,14,1) 0%, rgba(88,151,87,1) 100%)',
    red: 'linear-gradient(' + rotation + ', rgba(108,24,21,1) 0%, rgba(151,87,94,1) 100%)',
    blue: 'linear-gradient(' + rotation + ', rgba(44,53,78,1) 0%, rgba(87,106,151,1) 100%)'
  }
  const selectedIcon = findIconDefinition({prefix: (SOCIALS.includes(iconName))? 'fab':'fas', iconName: iconName})

  return (
    <a href={linkDestination}>
    <div className="navItem" style={{background: COLORS[color]}}>
      <FontAwesomeIcon icon={selectedIcon} className="navIcon"/>
    </div>
    </a>
  )
}