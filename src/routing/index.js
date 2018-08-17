import { makeAsync } from '~/utilities'
import { Subscribe } from 'unstated'
import { AuthStore } from '~/stores'
import { Loading } from '~/components'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// pass loader as function to allow babel to parse the aliased import
const Feed = makeAsync(() => import('~/pages/Feed'))
Feed.preload()

const Evangelists = makeAsync(() => import('~/pages/Evangelists'))
Evangelists.preload()

const Account = makeAsync(() => import('~/pages/Account'))
Account.preload()

const FourOFour = makeAsync(() => import('~/pages/FourOFour'))
FourOFour.preload()

export default () => {

  return (
    <Subscribe to={[ AuthStore ]}>
      {({ state: { loading, loggedIn } }) => (
        loading
          ? (
            
            <Loading
              fullScreen
              message='loading'
            />

          ) : (
            <BrowserRouter>
              <Switch>

                <Route
                  exact
                  path='/'
                  component={ Feed }
                />

                <Route
                  path='/evangelists'
                  component={ Evangelists }
                />

                <Route
                  path='/account'
                  component={
                    loggedIn
                      ? Account
                      : () => <Redirect to='/' />
                  }
                />

                <Route component={ FourOFour } />

              </Switch>
            </BrowserRouter>
          )
      )}
    </Subscribe>
  )
}