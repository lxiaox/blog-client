import blog from '@/api/blog'
import {mapGetters} from 'vuex'
export default {
  data(){
    return{
      total:0,
      page:1,
      blogs:[],
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  created(){
    this.page = parseInt(this.$route.query.page) || 1
    this.getUserBlogs(this.page)
  },
  methods:{
    getUserBlogs(page){
      blog.getBlogsByUserId(this.user.id,{page}).then(res=>{
        this.total = res.total
        this.page = res.page
        this.blogs = res.data
      })
    },
    onPageChange(newPage){
      this.getUserBlogs(newPage)
      this.$router.push({path:`/my`,query:{page:newPage}})
    },
    spliteDate(dateStr){
      let dateObj = typeof dateStr === 'Object' ? dateStr : new Date(dateStr)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear(),
      }
    },
    async onDelete(blogId){
      await this.$confirm('确定删除该博客?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        let res = await blog.deleteBlog({blogId})
        this.$message.success(res.msg)
        // this.getUserBlogs(this.page)      
        this.blogs = this.blogs.filter(blog=>blog.id!==blogId)
    }
  }

}