import { Subscribe } from 'unstated'
import { AuthStore } from '~/stores'
import Container from './styles'
import { Page } from '~/components'

export default () => (
  <Subscribe to={[ AuthStore ]}>
    {({
      state: {
        username,
        name,
        avatar,
        description
      },
      logOut
    }) => (
      <Page>
        <Container>

          <img
            alt='profile'
            src={ avatar }
          />

          <span
            children={ username }
            className='username'
          />

          <span
            children={ name }
            className='name'
          />

          <span
            children={ description }
            className='description'
          />

          <button
            onClick={ logOut }
            children='log out'
          />

        </Container>
      </Page>
    )}
  </Subscribe>
)
