import config from './CONFIG'

let USER = {
  setToken(str) {
    localStorage.setItem(config.projectName + '-token', str)
  },
  getToken() {
    return localStorage.getItem(config.projectName + '-token')
  },
  isLogin() {
    return !!localStorage.getItem(config.projectName + '-token')
  },
  setLoginName(str) {
    localStorage.setItem(config.projectName + '-loginName', str)
  },

  getLoginName() {
    return localStorage.getItem(config.projectName + '-loginName')
  },

  logout() {
    localStorage.removeItem(config.projectName + '-token')
    localStorage.removeItem(config.projectName + '-loginName')
  }
}

export default USER
