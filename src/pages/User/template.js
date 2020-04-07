import blog from '@/api/blog'
export default {
  data(){
    return{
      total:0,
      page:1,
      blogs:[],
      user:{}
    }
  },
  created(){
    this.userId = this.$route.params.userId
    this.page = parseInt(this.$route.query.page) || 1
    this.getUserBlogs(this.page)
  },
  methods:{
    getUserBlogs(page){
      blog.getBlogsByUserId(this.userId,{page}).then(res=>{
        this.total = res.total
        this.page = res.page
        this.blogs = res.data
        if(res.data && res.data.length>0){
          this.user = res.data[0].user
        }
      })
    },
    onPageChange(newPage){
      this.getUserBlogs(newPage)
      this.$router.push({path:`/user/${this.userId}`,query:{page:newPage}})
    },
    spliteDate(dateStr){
      let dateObj = typeof dateStr === 'Object' ? dateStr : new Date(dateStr)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear(),
      }
    }
  }

}