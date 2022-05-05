import users from '../store/users'
import global from '../store/global'

export default {
  setHeaders() {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${users.state().userToken}`
    }
  },
  headersForLogOut(token) {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  },
  errorHandler(response) {
    let color = 'grey'
    let message = response.statusText
    switch (response.status) {
      case 200:
        break
      case 404:
        color = 'warning'
        message = response.data.message ? response.data.message : message
        break
      case 422:
        color = 'info'
        message = response.data.message ? response.data.message : message
        break
      
      case 500:
        color = 'error'
        message = response.data.message ? response.data.message : message
        break
      
      default:
        color = 'grey'
        message = response.data.message ? response.data.message : message
        break
    }
    global.SET_SNACKBAR_DATA({
      show: true,
      color,
      message
    })
  }
}
