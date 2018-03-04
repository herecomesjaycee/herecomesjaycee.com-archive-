import React from 'react'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

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
        <p>
          <strong>Holla at me:</strong>
          <ul>
            <li>
              <a href="https://twitter.com/herecomesjaycee">Twitter</a>
            </li>
            <li>
              <a href="https://twitter.com/herecomesjaycee">Email</a>
            </li>
          </ul>
        </p>
      </div>
    )
  }
}

export default Bio
