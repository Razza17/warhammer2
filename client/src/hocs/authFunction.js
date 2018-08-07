const fakeAuth = {
  isAuthenticated: false,
  authenticate(res) {
    res === "true" ? this.isAuthenticated = "true" : this.isAuthenticated = "false"
    return this.isAuthenticated;
  }
}

export default fakeAuth;
