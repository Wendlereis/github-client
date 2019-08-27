import api from './instance'

export default class CommitsService {
  get(user, repository) {
    return api.get(`/repos/${user}/${repository}/commits`)
  }
}
