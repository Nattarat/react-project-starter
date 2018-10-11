import React from 'react'
import {
  Example
} from 'components'
import {
  ROUTE_PATH,
  redirect
} from 'helpers'

export class HomeContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div>{ROUTE_PATH.HOME.TEXT}</div>
        <Example>
          <Example.Children>Children</Example.Children>
        </Example>
        <button
          onClick={() => {
            redirect(ROUTE_PATH.ABOUT.LINK)
          }}
        >
          Go to {ROUTE_PATH.ABOUT.TEXT}
        </button>
      </React.Fragment>
    )
  }
}
