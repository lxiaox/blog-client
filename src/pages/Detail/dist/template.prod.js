"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _marked=_interopRequireDefault(require("marked")),_blog=_interopRequireDefault(require("@/api/blog"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var _default={data:function(){return{user:{},content:"",title:"",createdAt:""}},computed:{markedContent:function(){return(0,_marked.default)(this.content)}},created:function(){var t=this,e=this.$route.params.blogId;_blog.default.getBlogDetail({blogId:e}).then(function(e){t.user=e.data.user,t.content=e.data.content,t.title=e.data.title,t.createdAt=e.data.createdAt})}};exports.default=_default;