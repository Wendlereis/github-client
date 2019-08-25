import api from './instance'

export default class RepositoresService {
  get(user) {
    return api.get(`/users/${user}/repos`)
  }
}
