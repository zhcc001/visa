import Vue from 'vue'

const vm = new Vue()

Vue.prototype.$$toast = (txt = '', type = 'error', time = 2000, mask = false) => {
  return vm.$createToast({
    type: type,
    mask: mask,
    time: time,
    txt: txt
  }).show()
}
