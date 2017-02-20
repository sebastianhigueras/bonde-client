export default (state, props) => ({
  isLoaded: () => state.auth.isLoaded,
  getCredentials: () => state.auth.credentials,
  getUser: () => state.auth.user
})
