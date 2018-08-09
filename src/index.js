import { Component } from 'react'
import { signUserOut } from 'blockstack'
import { render } from 'react-dom'
import { hot } from 'react-hot-loader'
import registerServiceWorker from '~/utilities/registerServiceWorker'

class App extends Component {

  render() {
    return (
      <div>
        some text
        {
          ['three', 'two', 'three'].map(element => <div>{ element }</div>)
        }
      </div>
    )
  }

  componentDidMount() {
    console.log(signUserOut)
  }

}

const HMRContainer = hot(module)(App)
render(<HMRContainer />, document.getElementById('root'))
registerServiceWorker()