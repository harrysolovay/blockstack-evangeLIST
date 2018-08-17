import Loadable from 'react-loadable'
import { Loading } from '~/components'

export default (loader) => (
  Loadable({
    loader,
    loading: Loading
  })
)