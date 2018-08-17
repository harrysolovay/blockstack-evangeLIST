import Container from './styles'
import LoadingIcon from '~/assets/images/spinner.svg'

export default ({
  fullScreen,
  timedOut,
  error,
  retry,
  message,
}) => (
  <Container { ...{ fullScreen }}>
    {
      timedOut || error
        ? (
          <div>
            <span children={ `Failed to load. ` } />
            <button
              children='Click here to retry.'
              onClick={ retry }
            />
          </div>
        ) : (
          <div>
            <LoadingIcon />
            { message && <span children={ message } /> }
          </div>
        )
    }
  </Container>
)