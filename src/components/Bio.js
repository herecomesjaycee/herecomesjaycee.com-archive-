import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2.5),
          textAlign: 'center',
        }}
      >
        <img
          src="https://pbs.twimg.com/profile_images/1078831932417421312/SbqMJ05y_400x400.jpg"
          alt={`Jaycee Cheong`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(4),
            height: rhythm(4),
            borderRadius: 100,
          }}
        />
        <p>
          • 💖 coffee is love ☕ • 😭 ramen is life 🍜 <br />• ⌨{' '}
          <a href="https://twitter.com/immersivelabsuk"> @immersivelabsuk</a>•
          👩🏻‍🏫 <a href="">@codefirstgirls</a> <br /> • 🎃 of all trades • 👩🏻‍🎨
          visual artist wannabe
        </p>
      </div>
    )
  }
}

export default Bio
