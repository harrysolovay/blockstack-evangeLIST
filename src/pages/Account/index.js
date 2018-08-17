import { Subscribe } from 'unstated'
import { AuthStore } from '~/stores'
import Container from './styles'
import { Page } from '~/components'
import { ProfileForm } from '~/components'

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

          <div
            className='avatar'
            style={{ backgroundImage: `url(${ avatar })` }}
          />

          <div className='details'>
            <h2
              children={ name }
              className='name'
            />
            <h3
              children={ username }
              className='username'
            />
            <p
              children={ description }
              className='description'
            />
          </div>

          <button
            onClick={ logOut }
            children='log out'
            className='log-out'
          />

          <hr />

          <ProfileForm />

        </Container>
      </Page>
    )}
  </Subscribe>
)
