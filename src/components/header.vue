<template>
  <header :class="{'login':isLogin,'no-login':!isLogin}">
    <template v-if="isLogin">
      <h1>BLOG SHARE</h1>
      <div class="right">
        <a class="active">首页</a>
        <a href>
          <i class="edit el-icon-edit"></i>
          写文章
        </a>
        <div class="avatar">
          <img class="avatar" src="../assets/images/avatar.jpeg" alt />
        </div>
      </div>
    </template>
    <template v-if="!isLogin">
      <h1>Let's share</h1>
      <p>show your ideas</p>
      <div class="btns">
        <el-button @click="isLogin=true;">立即登录</el-button>
        <el-button>注册账号</el-button>
      </div>
    </template>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isLogin: false
    };
  }
};
</script>

<style lang="less">
@import "../assets/style/base.less";

header.login {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  color: @textThemeColor;
  border-bottom: 1px solid @borderGrayColor;
  h1{
    width: 65%;
    font-size: 20px;
    padding-left: 12px;
    text-transform: uppercase;
    margin-left: 100px;
  }
  .right{
    width:30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 60px;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    a{
      color: @textLighterColor;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      &:hover,&.active{
        color: @textThemeColor;
      }
    }
  }

}
header.no-login{
  background: url(../assets/images/b2.jpg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px 30px 10px;
  color: white;
  // height: 350px;
  h1{
    text-transform: uppercase;
    font-size: 40px;
    margin: 40px 0 20px;
  }
  p{
    font-size: 18px;
  }
  .btns{
    margin: 60px 0 30px;
    .el-button{
      margin: 0 15px;
      font-size: 14px;
      // background-color: #ffffffdd;
    }
  }
}
</style>