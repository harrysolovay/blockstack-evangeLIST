import { Container } from 'unstated'
import {
  redirectToSignIn,
  isUserSignedIn,
  isSignInPending,
  handlePendingSignIn,
  loadUserData,
  signUserOut
} from 'blockstack'

const DEFAULT_STATE = {
  loading: true,
  loggedIn: false,
  username: null,
  name: null,
  profilePicture: null,
  description: null,
}

export default class AuthProvider extends Container {
  
  state = DEFAULT_STATE

  constructor() {
    super()
    this.refresh()
  }

  info = ({
    username,
    profile: {
      name,
      image: {
        0: {
          contentUrl: profilePicture
        }
      },
      description
    }
  } = loadUserData()) => ({
    username,
    name,
    profilePicture,
    description,
    loggedIn: true,
  })

  logIn = () => {
    this.setState(state => ({ ...state, loading: true }))
    const origin = window.location.origin
    console.log(this.state)
    redirectToSignIn(origin, `${ origin }/manifest.json`, [ 'store_write', 'publish_data' ])
  }

  refresh =  async () => {
    if(isSignInPending()) {
      const user = await handlePendingSignIn()
      if(user) {
        this.setState(state => ({
          ...state,
          ...this.info(user),
          loading: false,
        }))
      }
    } else {
      if(isUserSignedIn()) {
        console.log('user signed in')
        this.setState(state => ({
          ...state,
          ...this.info(),
          loading: false,
        }))
      } else {
        console.log('user not signed in')
        this.setState(state => ({
          ...state,
          DEFAULT_STATE,
          loading: false,
        }))
      }
    }
  }

  logOut = () => {
    signUserOut(window.location.origin)
    this.setState(state => ({
      ...state,
      DEFAULT_STATE,
      loading: false
    }))
    window.location = `${ window.location.protocol }//${ window.location.host }`
  }

}