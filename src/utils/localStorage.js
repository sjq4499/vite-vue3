/*
 * @Descripttion:
 * @Author: sjq
 * @Date: 2022-03-04 09:34:42
 * @LastEditors: sjq
 * @LastEditTime: 2022-03-04 09:34:42
 */
export function getlocalStorage(key) {
  return window.localStorage.getItem(key);
}
export function setlocalStorage(key, val) {
  return window.localStorage.setItem(key, val);
}
export function removelocalStorage(key) {
  return window.localStorage.removeItem(key);
}
