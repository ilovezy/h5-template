import './CONFIG'

let USER = {
  setToken(str) {
    localStorage.setItem(CONFIG.projectName + '-token', str)
  },
  getToken() {
    return localStorage.getItem(CONFIG.projectName + '-token')
  },
  isLogin() {
    return !!localStorage.getItem(CONFIG.projectName + '-token')
  },
  setLoginName(str) {
    localStorage.setItem(CONFIG.projectName + '-loginName', str)
  },

  getLoginName() {
    return localStorage.getItem(CONFIG.projectName + '-loginName')
  },

  logout() {
    localStorage.removeItem(CONFIG.projectName + '-token')
    localStorage.removeItem(CONFIG.projectName + '-loginName')
  }
}

export default USER
