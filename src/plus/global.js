/**
 * 全局通用方法或者命令（请注意命名规范）
 * localstorage，H5，本地存储工具类，H5的localstorage大小只有5M，要珍惜使用~！！！
 */

/** 系统常量 */
export const TOKEN_NAME = "token" //系统token变量名
export const SERVER_URL = window.location.hostname + ":" + window.location.port
export const IS_PRODUCTION_ENV = (process.env.NODE_ENV === 'production') && (SERVER_URL === 'www.oupuvc.net:' || SERVER_URL === '120.78.16.237:' || SERVER_URL === 'www.opyun.com:' || SERVER_URL === 'opyun.com:')
export const PIC_URL = IS_PRODUCTION_ENV ? 'https://img01.opsteel.cn' : 'http://tsimg.opsteel.net'
export const FILE_URL = IS_PRODUCTION_ENV ? '' : ''
export const WEBSOCKET_URL = IS_PRODUCTION_ENV ? 'https://www.opyun.com/' : 'https://www.opyun.com:8443/'
export const API_ROOT = (process.env.NODE_ENV === 'production') ? '/' : 'http://10.9.17.46:8080/'

/** token类操作 */
//获取token
export const getToken = function () {
  return getKey(global.TOKEN_NAME)
}

//设置token
export const setToken = function (token) {
  setKey(global.TOKEN_NAME, token)
}

//清除token
export const clearToken = function () {
  removeKey(global.TOKEN_NAME)
}

//获取本地存储类内容
export const getKey = function (key) {
  let value = localStorage.getItem(key)
  return value ? value : ''
}

//设置本地存储类内容
export const setKey = function (key, value) {
  localStorage.setItem(key, value)
}

//清除本地存储类内容
export const removeKey = function (key) {
  localStorage.setItem(key, '')
}
