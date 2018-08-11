export default (props) => {
  if(props.isLoading) {
    if(props.timedOut) {
      return <div>loader timed out</div>
    } else if(props.pastDelay) {
      return <div>Loading...</div>
    } else {
      return null
    }
  } else if(props.error) {
    return <div>Component failed to load</div>
  } else {
    return null
  }
}