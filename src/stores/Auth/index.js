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
  avatar: null,
  description: null,
}

export default class AuthProvider extends Container {
  
  state = DEFAULT_STATE

  constructor() {
    super()
    this.refresh()
  }

  setLoading = () => {
    this.setState(state => ({ ...state, loading: true }))
  }

  info = ({
    username,
    profile: {
      name,
      image: {
        0: {
          contentUrl: avatar
        }
      },
      description,
    }
  } = loadUserData()) => ({
    username,
    name,
    avatar,
    description,
    loggedIn: true,
  })

  logIn = () => {
    this.setLoading()
    const origin = window.location.origin
    redirectToSignIn(origin, `${ origin }/manifest.json`, [ 'store_write', 'publish_data' ])
  }

  refresh = async () => {
    this.setLoading()
    if(isSignInPending()) {
      try {
        const user = await handlePendingSignIn()
        if(user) {
          this.setState(state => ({
            ...state,
            ...this.info(user),
            loading: false,
          }))
        }
      } catch(error) {
        console.error(`handlePendingSignIn handling error: ${ error }`)
      }
    } else {
      if(isUserSignedIn()) {
        this.setState(state => ({
          ...state,
          ...this.info(),
          loading: false,
        }))
      } else {
        if(window.location.pathname.indexOf('account') >= 0) {
          window.location = `${ window.location.protocol }//${ window.location.host }`
        }
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
  }

}