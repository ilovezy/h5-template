let USER = {
  setToken(str) {
    localStorage.setItem('iou-h5-token', str)
  },
  getToken() {
    return localStorage.getItem('iou-h5-token')
  },
  isLogin() {
    return !!localStorage.getItem('iou-h5-token')
  },
  setLoginName(str) {
    localStorage.setItem('iou-h5-loginName', str)
  },

  getLoginName() {
    return localStorage.getItem('iou-h5-loginName')
  },

  logout() {
    localStorage.removeItem('iou-h5-token')
    localStorage.removeItem('iou-h5-loginName')
  }
}

export default USER
