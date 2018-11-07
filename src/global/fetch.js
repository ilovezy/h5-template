/**
 * Created by ymjdev on 2017/9/20.
 */
import axios from 'axios';
import './CONFIG'
import USER from '../global/USER'
import Toast from 'muse-ui-toast';

import 'muse-ui-progress/dist/muse-ui-progress.css';
import NProgress from 'muse-ui-progress';

Toast.config({
  position: 'top-start',               // 弹出的位置
  time: 2000,                       // 显示的时长
  closeIcon: 'close',               // 关闭的图标
  close: true,                      // 是否显示关闭按钮
})
NProgress.config( {
  zIndex: 2000,          // progress z-index
  top: 0,                // position fixed top
  speed: 10,            // progress speed
  color: 'primary',      // color
  size: 3,               // progress size
  className: 'position-fixed'          // progress custom class
})

import VConsole from 'vconsole' //import vconsole
//全局API
let env = process.env.NODE_ENV
let ajaxUrl = CONFIG.serviceUrl[env]

if (env == 'development' && CONFIG.openVconsole) {
  let vConsole = new VConsole() // 初始化
}

let instance = axios.create({
  baseURL: ajaxUrl,
  timeout: 50000,
  withCredentials: true
})

instance.interceptors.request.use(config => {
  NProgress.start();

  let clientName = CONFIG.serviceParam.clientName
  let clientSecret = CONFIG.serviceParam.clientSecret
  //
  // if (config.data) {
  //   config.data.clientName = clientName
  //   config.data.clientSecret = clientSecret
  // } else {
  //   config.data = {
  //     clientName,
  //     clientSecret
  //   }
  // }

  let token = USER.getToken()
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config
})

instance.interceptors.response.use(res => {
  // NProgress.done();
  let data = res.data || {}
  if (data.success) {
    return data.result || {}
  } else {
    if (data.errorDescription) {
      Toast.message(data.errorDescription);
    }
    return Promise.reject(data);
  }
}, err => {
  // debugger
  // NProgress.done();
  if (err.response) {
    let response = err.response || {}
    let data = response.data || {}
    if (data.status == 404) {Toast.message('404错误，后台没找到');
    } else {
      if (data.error == 'ERROR_ACCESS_NEED_AUTH') {
        // // TODO 调到登录页面去
        Toast.message('请登录');
        // USER.logout()
        // // setTimeout(() => {
        // //   location.href = '/login';
        // // }, 2000)
        // return Promise.reject()
      } else {
        Toast.message(data.errorDescription)
        return Promise.reject(data);
      }
    }
  } else {
    Toast.message('登录信息过期，请登录')
    // USER.logout()
    // setTimeout(() => {
    //   location.href = '/#/login'
    // }, 2000)
    return Promise.reject(err)
  }
})

const postRequest = (url, params) => {
  if (url) {
    return instance({
      method: 'post',
      url,
      data: params,
      transformRequest: [function (data) {
        let ret = '';
        for (let item in data) {
          ret += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&';
        }
        return ret;
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
  } else {
    Toast.message('请求地址为空')
  }
}

const uploadFileRequest = (url, params) => {
  return instance({
    method: 'post',
    url,
    data: params,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}

const putRequest = (url, params) => {
  return instance({
    method: 'put',
    url,
    data: params,
    transformRequest: [function (data) {
      let ret = '';
      for (let item in data) {
        ret += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&';
      }
      return ret;
    }],
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}

const deleteRequest = (url) => {
  return instance({
    method: 'delete',
    url
  })
}

const getRequest = (url) => {
  return instance({
    method: 'get',
    url
  })
}

let AXIOS = {
  post: postRequest,
  uploadFile: uploadFileRequest,
  put: putRequest,
  delete: deleteRequest,
  get: getRequest
}

export default AXIOS;

