<template>
  <div>
    <h2>vuex测试</h2>
    <p>vuex  : {{author}}</p>
    <input type="text" v-model="text.name">
    <br>
    子组件无法修改父组件的值,如果需要双向绑定则需要给子组件传递一个对象(tip:对象之间是引用关系)
    <br>
    <input type="button" @click="wit" value="数据提交">
    <input type="button" @click="den" value="对象提交">
    <input type="button" @click="gai" value="改变vuex中的数据">
    <hr>
    <router-link to="/name" tag="h2" active-class='asd'>{{msg}}</router-link>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: '首页',
      text: {
        name:''
      } 
    }
  },
  methods: {
    wit: function() {
      this.$store.commit('newAuthor', this.text.name)
    },
    den : function() {
      this.$store.state.author = this.text
    },
    gai : function() {
      this.$store.state.author.name = '123'
    }
  },
  computed: {
    author() {
      return this.$store.state.author
    }
  }
}
</script>
