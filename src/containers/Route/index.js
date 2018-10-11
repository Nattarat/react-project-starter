import React from 'react'
import {
  Route
} from 'react-router-dom'
import {
  MainLayoutContainer,
  HomeContainer,
  AboutContainer
} from 'containers'
import {
  context
} from 'context'

export class RouteContainer extends React.Component {
  constructor(props){
    super(props)
    context.setContext({
      routeHistory: this.props.history
    })
  }

  render() {
    return (
      <MainLayoutContainer>
        {/* Use props 'exact' for match single container(not share container) */}
        <Route exact path='/' component={HomeContainer} />
        <Route exact path='/about' component={AboutContainer} />
      </MainLayoutContainer>
    )
  }
}