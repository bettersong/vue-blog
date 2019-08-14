<template>
  <div id="app">
    <Head></Head>
    <transition enter-active-class="animated slideInLeft">
      <router-view/>
    </transition>
    <RightTag></RightTag>
    <BackTop></BackTop>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from './components/bases/Head'
import Foot from './components/bases/Foot'
import BackTop from './components/bases/BackTop'
import RightTag from './components/bases/RightTag'
import '../static/js/star.js';
export default { 
  name: 'App',
  components:{
    Head,
    Foot,
    RightTag,
    BackTop
  },
  watch:{
    '$route':function(to,from){
          document.body.scrollTo = 0;
          document.documentElement.scrollTop = 0;
    }
  }
}
</script>

<style scope>
html,body{
  margin:0;
  padding:0;
  width:100%;
  height:100%;
}
.alert{
    position: fixed;
    bottom: 50px;
    width: 58%;
    left: 0;
    right: 0;
    margin: 0 auto;
}
.animated {
  animation-duration: 0.5s;
}
body{
  background-color: #f5f5f5 !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
.pageDetail img{
  max-width: 100%;
  height: auto;
}
</style>
