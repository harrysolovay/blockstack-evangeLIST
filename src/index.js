import '~/utilities/setGlobalStyles'
import { Component } from 'react'
import { Provider } from 'unstated'
import Router from '~/routing'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader'
import { registerServiceWorker } from '~/utilities'

class App extends Component {

  render() {
    return (
      <Provider>
        <Router />
      </Provider>
    )
  }

}

render(<App />, document.getElementById('root'))
export default hot(module)(App)
registerServiceWorker()