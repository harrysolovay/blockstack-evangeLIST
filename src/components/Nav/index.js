import { Subscribe } from 'unstated'
import { AuthStore } from '~/stores'
import Container from './styles'
import { ExternalLink } from '~/components'
import { NavLink } from 'react-router-dom'
import BlockstackLogo from '~/assets/images/blockstack-logo.svg'

export default () => (
  <Subscribe to={[ AuthStore ]}>
    {({ state: { loggedIn }, logIn, refresh }) => (
      <Container>
        <div>

          <ExternalLink
            href={
              loggedIn
                ? "http://localhost:8888"
                : 'https://blockstack.org'
            }
            children={ <BlockstackLogo /> }
            className='blockstack-link'
          />

          <NavLink
            exact
            to='/'
            children='Feed'
          />

          <NavLink
            to='/evangelists'
            children='Evangelists'
          />

          <div className='separation' />

          {
            loggedIn
              ? (
                <NavLink
                  to='/account'
                  children='Account'
                />
              ) : (
                <button
                  onClick={ logIn }
                  children='Log In'
                  className='active'
                />
              )
          }

        </div>
      </Container>
    )}
  </Subscribe>
)