<template>
  <div>
    <router-link to="/" tag="span">{{a}}</router-link>
    <button @click='asd'>this.$router.push方法</button>
    <button @click='$goRouter(c)'>{{b}}</button>
    <!--keep-alive测试-->
    <hr> keep-alive测试 : <input type="text">
    <button @click='asd'>测试</button>
    <!--axios测试 -->
    <hr> axios测试 : <input type="text" v-model="input"><input type="button" value="获取ajxa" @click="submitForm">
    <p>{{response}}</p>

    <hr>
    <transition name="com" mode="out-in">
      <component :is="com"></component>
    </transition>
    <button @click="tag1">切换1</button>
    <button @click="tag2">切换2</button>

    <hr>
    <router-link to='/name/solt' tag='h2'>vue插槽</router-link>
    <router-link to='/name' tag='h2'>过渡</router-link>
    <router-link to='/name/transition-group' tag='h2'>transition-group</router-link>

    <hr>
    <router-view>
      <h1 slot="header">这里可能是一个页面标题</h1>

      <p>主要内容的一个段落。</p>
      <p>另一个主要段落。</p>

      <p slot="footer">这里有一些联系信息</p>
    </router-view>
    <hr>
  </div>
</template>

<script>
import component1 from './component1'
import component2 from './component2'
export default {
  name: 'tao',
  data() {
    return {
      msg: '回到首页',
      a: 'router-link方法',
      b: '原型方法',
      c: '/',
      input: '',
      response: '',
      com: "com1"
    }
  },
  methods: {
    asd: function() {
      this.$router.push({ path: '/' })
    },
    tag1: function() {
      this.com = 'com1'
    },
    tag2: function() {
      this.com = 'com2'
    },
    submitForm: function() {
      this.$ajax({
        method: 'get',
        url: '/user',
        params: {
          name: this.input
        }
      }).catch(function(error) {
        this.response = '发送出去了,但是请求失败'
      }.bind(this));
    }
  },
  components: {
    com1: component1,
    com2: component2
  }
}
</script>

<style>
.com-enter {
  opacity: 0;
  transform: translateY(20px)
}

.com-leaver-to {
  opacity: 0;
  transform: translateY(-20px);
}

.com-leaver-active {
  transition: all 4s;
}

.com-enter-active {
  transition: all 2s;
}
</style>

