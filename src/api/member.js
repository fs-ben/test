import {commonResource} from '../plus/resources'

export default {
  getMemberInfo: function (data) {
    return commonResource.save({id: 'member', controller: 'index'}, data)
  }
}
