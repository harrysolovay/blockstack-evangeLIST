import { Component } from 'react'
import Container from './styles'
import { Nav } from '~/components'

export default class extends Component {

  render() {
    return (
      <Container>
        <Nav />
        { this.props.children }
      </Container>
    )
  }

}