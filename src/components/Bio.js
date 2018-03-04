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
        }}
      >
        <img
          src="https://pbs.twimg.com/profile_images/894290552560267264/tMqiAGFw_400x400.jpg"
          alt={`Jaycee Cheong`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(5),
            height: rhythm(5),
            borderRadius: 100,
          }}
        />
        <p>
          • 💖 coffee is love ☕ • 😭 ramen is life 🍜 <br />
          • ⌨ <a href="https://twitter.com/immersivelabsuk">@immersivelabsuk</a>
          • 👩🏻‍🏫 <a href="">@codefirstgirls</a> <br /> • 🎃 of all trades • 👩🏻‍🎨
          visual artist wannabe
        </p>
      </div>
    )
  }
}

export default Bio
