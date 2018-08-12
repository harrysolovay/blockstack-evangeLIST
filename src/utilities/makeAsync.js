import Loadable from 'react-loadable'
import { Loading } from '~/components'

export default (loader) => {
  return Loadable({
    loader,
    loading: Loading
  })
}