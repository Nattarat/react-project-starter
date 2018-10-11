import React from 'react'
import {
  Link
} from 'react-router-dom'
import {
  Example
} from 'components'

export class HomeContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>Home</div>
        <Example>
          <Example.Children>Children</Example.Children>
        </Example>
        <Link to='/about'>
          <button>Go to About</button>
        </Link>
      </React.Fragment>
    )
  }
}
