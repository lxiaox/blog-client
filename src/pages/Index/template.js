import request from '@/helpers/request'
import auth from '@/api/auth'
import blog from '@/api/blog'

window.request = request
window.auth = auth
window.blog = blog

export default {
   name:'Index',
   data(){
       return {

       }
   },
   methods:{

   }
}