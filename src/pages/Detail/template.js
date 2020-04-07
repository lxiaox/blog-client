import marked from 'marked'
import blog from '@/api/blog'
export default {
  data(){
    return {
      user:{},
      content:'',
      title:'',
      createdAt:'',
    }
  },
  computed:{
    markedContent(){
      return marked(this.content)
    }
  },
  created(){
    let blogId = this.$route.params.blogId
    blog.getBlogDetail({blogId}).then(res=>{
      this.user = res.data.user
      this.content = res.data.content
      this.title = res.data.title
      this.createdAt = res.data.createdAt
    })
  }
}