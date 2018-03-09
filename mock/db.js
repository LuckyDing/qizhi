
const Mock = require('mockjs')
const Random = Mock.Random

module.exports = () => {
    let data = {
      users: {},
      getAuthor: {}
    }
    const users = Mock.mock({
      'list|1-10': [{
        'id|+1': 0
      }]
    })
    data.users = users
    
    let getAuthor = Mock.mock({
      author: {
        token: Random.string( 31 ),
        time: '123123234'
      }
    })
    data.getAuthor =  getAuthor
    return data
}
