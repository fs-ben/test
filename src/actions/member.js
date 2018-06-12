import api from '../api/member'

export const postSelfService = ({commit}, option = {}) => {
  return new Promise((resolve, reject) => {
    api.getMemberInfo(option).then(response => {
      if (response.ok) {
        resolve(response);
      }
    }, error => {
      reject(error);
    })
  })
}
