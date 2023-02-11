import React from 'react';
import NavItem from '../NavItem';
import './nav.css';

interface navItem {
  /**
   * Where to send user upon click
   */
  linkDestination: string,
  /**
   * Icon to display on nav button
   */
  icon: 'house' | 'bars' | 'user' | 'code' | 'terminal' | 'gears' | 'facebook' | 'twitter' | 'github' | 'linkedin' | 'tiktok' | 'twitch',
}

interface NavProps {
  /**
   * Which color to make nav-bar
   */
  color: 'red' | 'blue' | 'green'
  /**
   * Array of navItem components to be rendered in Nav bar
   */
  buttons: navItem[],
  /**
   * Orientation of nav bar
   */
  direction: 'horizontal' | 'vertical'
}
/**
 * Component used to house navigation features for a website
 */
function Nav({color, buttons, direction = 'vertical'}: NavProps) {
  const COLORS = {
    'red': {
            horizontal: 'linear-gradient(0deg, #38070d 0%,#532a35 33%,#532a35 66%,#38070d 100%)',
            vertical: 'linear-gradient(90deg, #38070d 0%,#532a35 33%,#532a35 66%,#38070d 100%)'
          },
    'blue': {
            horizontal: 'linear-gradient(0deg, #0f182b 0%,#2a3b53 33%,#2a3b53 66%,#0f182b 100%)',
            vertical: 'linear-gradient(90deg, #0f182b 0%,#2a3b53 33%,#2a3b53 66%,#0f182b 100%)'
          },
    'green': {
            horizontal: 'linear-gradient(0deg, #0f3013 0%,#2a533b 33%,#2a533b 66%,#0f3013 100%)',
            vertical: 'linear-gradient(90deg, #0f3013 0%,#2a533b 33%,#2a533b 66%,#0f3013 100%)'
          }
  }

  const STYLES = {
    horizontal: {flexDirection: 'row', width: '100vh', height: '110px'},
    vertical: {flexDirection: 'column', width: '220px', height: '100vh'}
  }

  const {flexDirection, width, height} = STYLES[direction]


  return (
    // @ts-ignore: weird typing coersion bug for flexDirection and js string
    <div className="navBar" style={{backgroundImage: COLORS[color][direction], flexDirection: flexDirection, width: width, height: height, justifyContent: (direction === 'horizontal')? 'center':''}}>
      {buttons.map((navItem) => {
        return (
          <div className="navItemContainer" style={{marginTop: (direction === 'horizontal')? '0px': '25px', marginRight: (direction === 'horizontal')? '25px':'0px'}}>
            <NavItem
              color={color}
              linkDestination={navItem.linkDestination}
              iconName={navItem.icon}
              orientation={direction}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Nav