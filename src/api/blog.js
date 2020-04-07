// 博客相关接口

import request from '@/helpers/request.js'

const URL = {
  CREATE: '/blog',
  UPDATA: '/blog/:blogId',
  DELETE: '/blog/:blogId',
  GET_LIST: '/blog',
  GET_DETAIL: '/blog/:blogId',
}

export default {
  createBlog({ title = '', content = '', description = '', atIndex = false } = { title: '', content: '', description: '', atIndex: false }) {
    return request(URL.CREATE, 'POST', { title, content, description, atIndex })
  },
  updateBlog(blogId, { title, content, description, atIndex}) {
    return request(URL.UPDATA.replace(':blogId', blogId), 'PATCH', { title, content, description, atIndex })
  },

  deleteBlog({ blogId }) {
    return request(URL.DELETE.replace(':blogId', blogId), 'DELETE')
  },
  /* page不传默认为1，
   * userId不传返回所有用户博客，
   * atIndex不传返回所有，传true为显示在首页的，传false为不限时在首页的
  */
  getBlogs({ page = 1, userId, atIndex } = { page: 1 }) {
    return request(URL.GET_LIST, 'GET', { page, userId, atIndex })
  },
  getBlogsByUserId(userId, { page = 1, atIndex } = { page: 1 }) {
    return this.getBlogs({ page, userId, atIndex })
  },
  getIndexBlogs({ page = 1 } = { page: 1 }) {
    return this.getBlogs({ page, atIndex: true })
  },
  getBlogDetail({ blogId }) {
    return request(URL.GET_DETAIL.replace(':blogId', blogId), 'GET')
  }
}