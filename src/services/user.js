import api from './instance'

export default class UserService {
  get(user) {
    return api.get(`/users/${user}`)
  }
}
