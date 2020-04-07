<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"></el-input>
    <p class="msg">限30个字</p>
    <h3>内容简介</h3>
    <el-input v-model="description" type="textarea" rows="1"></el-input>
    <p class="msg">限30个字</p>
    <h3>文章内容</h3>
    <el-input v-model="content" type="textarea" rows="10"></el-input>
    <p class="msg">限30个字</p>
    <p>
      <label>展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66"></el-switch>
    </p>
    <el-button class="commit" @click="onCommit">保存</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
