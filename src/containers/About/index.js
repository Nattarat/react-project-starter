import React from 'react'
import {
  Link
} from 'react-router-dom'

export class AboutContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>About</div>
        <Link to='/'>
          <button>Go to Home</button>
        </Link>
      </React.Fragment>
    )
  }
}
