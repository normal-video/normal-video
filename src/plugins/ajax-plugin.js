import Axios from 'axios'

export default {
  install (Vue, instance = Axios.create()) {
    Vue.prototype.$http = instance
    Vue.http = instance
  }
}
