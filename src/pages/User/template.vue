<template>
  <div id="user">
    <section class="user-info">
      <img :src="user.avatar" :alt="user.username" class="avatar">
      <h3>{{user.username}}</h3>
    </section>
    <section>
      <router-link :to="`/detail/${blog.id}`" class="item" v-for="blog in blogs" :key="blog.id">
        <div class="date">
          <span class="day">{{spliteDate(blog.createdAt).date}}</span>
          <span class="month">{{spliteDate(blog.createdAt).month}}</span>
          <span class="year">{{spliteDate(blog.createdAt).year}}</span>
        </div>
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
      </router-link>
    </section>
    <section class="pagination" v-show="total>0">
      <el-pagination layout="total,prev, pager, next, jumper" :total="total" @current-change="onPageChange" :current-page="page"></el-pagination>
    </section>
  </div>
</template>

<script src="./template.js"></script>

<style src="../My/template.less" lang="less"></style>
