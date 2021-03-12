<template>
  <header :class="{ login: isLogin, 'no-login': !isLogin }">
    <template v-if="isLogin">
      <router-link to="/" class="logo">BLOG SHARE</router-link>
      <div class="right">
        <router-link class="active" to="/">首页</router-link>
        <router-link to="/create">
          <i class="edit el-icon-edit"></i>
          写文章
        </router-link>
        <div class="avatar">
          <!-- <img class="avatar" src="../assets/images/avatar.jpeg" alt :title="user.username" /> -->
          <div class="img-wrapper">
            <img
              :src="user.avatar"
              :alt="user.username"
              :title="user.username"
            />
          </div>
          <ul>
            <li><router-link to="/my">我的</router-link></li>
            <li><a link="#" @click="onLogout">注销</a></li>
          </ul>
        </div>
      </div>
    </template>
    <template v-if="!isLogin">
      <h1>Let's share</h1>
      <p>show your ideas</p>
      <div class="btns">
        <router-link to="/login"><el-button>立即登录</el-button></router-link>
        <router-link to="/register"
          ><el-button>注册账号</el-button></router-link
        >
      </div>
    </template>
  </header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Header',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['user', 'isLogin']),
  },
  methods: {
    ...mapActions(['logout', 'checkLogin']),
    onLogout() {
      this.logout()
      localStorage.removeItem('token')
    },
  },
  created() {
    this.checkLogin()
  },
}
</script>

<style lang="less">
@import '../assets/style/base.less';

header.login {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  color: @textThemeColor;
  border-bottom: 1px solid @borderGrayColor;
  .logo {
    width: 65%;
    font-size: 20px;
    font-weight: 700;
    padding-left: 12px;
    text-transform: uppercase;
    margin-left: 100px;
    color: @textThemeColor;
  }
  .right {
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-right: 60px;
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      .img-wrapper {
        width: 40px;
        height: 40px;
      }
      ul {
        list-style: none;
        display: none;
        text-align: center;
      }
      &:hover {
        ul {
          display: block;
        }
      }
    }
    a {
      color: @textLighterColor;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      &:hover,
      &.active {
        color: @textThemeColor;
      }
    }
  }
}
header.no-login {
  background: url(../assets/images/b2.jpg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 30px 30px 10px;
  color: white;
  // height: 350px;
  h1 {
    text-transform: uppercase;
    font-size: 40px;
    margin: 40px 0 20px;
  }
  p {
    font-size: 18px;
  }
  .btns {
    margin: 60px 0 30px;
    .el-button {
      margin: 0 15px;
      font-size: 14px;
      // background-color: #ffffffdd;
    }
  }
}
</style>