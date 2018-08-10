import { Subscribe } from 'unstated'
import { AuthStore } from '~/stores'
import { Page } from '~/components'
import Container from './styles'

export default () => (
  <Subscribe to={[ AuthStore ]}>
    {({ state: { loggedIn }, logOut, refresh }) => (
      <Page>
        <Container>
          Account
          <button
            onClick={ logOut }
            children='log out'
          />
        </Container>
      </Page>
    )}
  </Subscribe>
)