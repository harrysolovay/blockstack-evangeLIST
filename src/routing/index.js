import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { makeAsync } from '~/utilities'

// pass loader as function as to allow babel to parse the aliased import
const Feed = makeAsync(() => import('~/pages/Feed'))
const Evangelists = makeAsync(() => import('~/pages/Evangelists'))
const Account = makeAsync(() => import('~/pages/Account'))

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ Feed } />
      <Route path='/evangelists' component={ Evangelists } />
      <Route path='/account' component={ Account } />
    </Switch>
  </BrowserRouter>
)