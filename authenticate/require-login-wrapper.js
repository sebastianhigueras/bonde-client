export default redirectUrl => (nextState, replace) => {
  const { auth } = nextState
  if (!auth.user) replace(redirectUrl)
}
