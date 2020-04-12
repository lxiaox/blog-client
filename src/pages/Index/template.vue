<template>
  <div id="index">
    <section class="blog-posts">
      <div class="item" v-for="blog in blogs" :key="`${blog.id}`">
        <router-link :to="`/user/${blog.user.id}`">
          <figure class="avatar">
            <div class="img-wrapper">
              <img :src="blog.user.avatar" alt="blog.user.username" />
            </div>
            <figcaption>{{blog.user.username}}</figcaption>
          </figure>
        </router-link>

        <router-link :to="`/detail/${blog.id}`">
          <h3 class="title">
            {{blog.title}}
            <span>{{friendlyDate(blog.createdAt)}}</span>
          </h3>
          <p>{{blog.description}}</p>
        </router-link>
      </div>
    </section>
    <section class="pagination" v-show="total>0">
      <el-pagination
        layout="total,prev, pager, next, jumper"
        :total="total"
        @current-change="onPageChange"
        :current-page="page"
      ></el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>
