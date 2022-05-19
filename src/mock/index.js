import Mock from 'mockjs'
const Random = Mock.Random
const avatarAPI = 'https://api.liitk.com/s/sjtx/api.php'
const baseURL = 'https://blog.com'
const dateMock = Random.datetime()
const userMock = {
  id: '@id', //博客所属用户 id,
  username: '@first',
  avatar: avatarAPI,
}
const blogMsgMock = {
  id: '@id', //博客 id
  title: '@ctitle',
  description: Random.csentence(30, 500),
  content: Random.csentence(200, 2000),
  user: userMock,
  createdAt: dateMock,
  updatedAt: dateMock,
}

const requests = {
  REGISTER: {
    url: '/auth/register',
    method: 'post',
    data: {
      status: 'ok',
      msg: '注册成功',
      data: {
        id: '@id',
        username: '@first',
        avatar: avatarAPI,
      },
    },
  },
  LOGIN: {
    url: '/auth/login',
    method: 'post',
    data: {
      status: 'ok',
      msg: '登录成功',
      data: {
        id: '@id',
        username: '@first',
        avatar: avatarAPI,
      },
    },
  },
  LOGOUT: {
    url: '/auth/logout',
    method: 'get',
    data: {
      status: 'ok',
      isLogin: false,
    },
  },
  GET_INFO: {
    url: '/auth',
    methid: 'get',
    data: {
      status: 'ok',
      isLogin: true,
      data: {
        id: '@id',
        avatar: avatarAPI,
        username: '@first',
      },
    },
  },
  CREATE: {
    url: '/blog/create',
    methos: 'post',
    data: {
      status: 'ok',
      msg: '创建成功',
      data: blogMsgMock,
    },
  },
  UPDATA: {
    url: '/blog/update',
    methos: 'patch',
    data: blogMsgMock,
  },
  DELETE: {
    url: /\/blog\/delete\/[^]+/,
    methos: 'delete',
    data: { status: 'ok', msg: '删除成功' },
  },
  GET_LIST: {
    url: '/blog/list',
    methos: 'get',
    data: {
      status: 'ok',
      msg: '获取成功',
      total: 200, //全部博客的总数
      page: 1, //当前页数
      totalPage: 10, // 总页数
      'data|10': [blogMsgMock],
    },
  },
  GET_DETAIL: {
    url: '/blog/detail',
    methos: 'get',
    data: {
      status: 'ok',
      msg: '获取成功',
      data: blogMsgMock,
    },
  },
}
function getMockData({ url, method, data }) {
  Mock.mock(RegExp(`${baseURL}${url}.*`), method, data)
}
Object.keys(requests).forEach((key) => {
  getMockData(requests[key])
})

//  Mock.mock('https://blog.com/auth/login', 'post', {
//     status: 'ok',
//     msg: '登录成功',
//     data: {
//       id: 1,
//       username: 'xxx',
//       avatar: avatarAPI,
//       createdAt: '2017-12-27T07:40:09.697Z',
//       updatedAt: '2017-12-27T07:40:09.697Z',
//     },
//   })
