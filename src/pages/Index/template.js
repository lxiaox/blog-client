import blog from '@/api/blog'

export default {
  data() {
    return {
      blogs: [],
      page:1,
      total:0,
    }
  },
  created() {
    this.page = parseInt(this.$route.query.page) || 1
    this.getBlogs(this.page)
  },
  methods: {
    getBlogs(page=1) { 
      blog.getIndexBlogs({page}).then(res => {
        this.blogs = res.data
        this.page = res.page
        this.total = res.total
      })
    },
    onPageChange(newPage) {
      this.getBlogs(newPage)
      this.$router.push({path:'/',query:{page:newPage}})
    }
  }
}