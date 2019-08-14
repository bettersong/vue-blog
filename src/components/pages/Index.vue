<!---->
<template>
<div class='index'>
<!--lunbo start-->
   <div class="lubo">
     <transition-group tag="ul" class="lubo_box" enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutUp">
         <li v-for="(list,index) in lunboList" :key="list.id" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go">
          <a :href="list.clickUrl" rel="external nofollow" >
             <img :src="list.url" :alt="list.id">
          </a>
         </li>
     </transition-group>
     <div class="carousel-items">
   <span class="dot" v-for="(item,index) in lunboList.length" :key=index :class="{'active':index===currentIndex}" @click="change(index)">

   </span>
  </div>
  
</div>
<div class="lubo_btn">
     <span class="left_btn" @click="prevHandel" @mouseover="stop" @mouseleave="go">&lt;</span>
     <span class="right_btn" @click="nextHandel" @mouseover="stop" @mouseleave="go">&gt;</span>
  </div>
  <!-- lunbo end -->
  <MainContent></MainContent>
</div>

</template>

<script>
import MainContent from '../bases/MainContent';
export default {
//import引入的组件需要注入到对象中才能使用
name: 'index',
components: {
   MainContent
},
created(){
   
   this.go();
},
data() {
//这里存放数据
return {
      lunboList:[
         {id:1, url:'./static/images/shutter_1.jpg'},
         {id:2, url:'./static/images/shutter_2.jpg'},
         {id:3, url:'./static/images/shutter_3.png'},
         {id:4, url:'./static/images/shutter_4.jpg'},
         {id:5, url:'./static/images/shutter_5.jpg'},
         {id:6, url:'./static/images/shutter_6.jpg'}
      ],
      currentIndex:0,
      timer:''
};
},
methods: {
  go() {
   this.timer = setInterval(() => {
    this.autoPlay()
   },4000)
  },
  stop() {
   clearInterval(this.timer)
   this.timer = null
  },
  change(index) {
   this.currentIndex = index
  },
  autoPlay() {
   this.currentIndex++
   if (this.currentIndex > this.lunboList.length - 1) {
    this.currentIndex = 0
   }
  },
  prevHandel(){
     this.currentIndex--;
     if(this.currentIndex < 0){
        this.currentIndex = this.lunboList.length - 1;
     }

  },
  nextHandel(){
     this.autoPlay();
  }
     }
}

</script>
<style lan="css" scoped>
.index{position: relative;}
  .lubo{ width: 90%;clear: both; position: relative; height:300px;top:100px;margin:0 auto;}
  .lubo_box{ position: relative; width: 100%; height:100%;list-style: none; }
  .lubo_box li{ float: left;position: absolute; top: 0; left: 0; width: 100%; height:100%; filter:alpha(opacity=0);}
  .lubo_box li a{ display: block;width: 100%;  height: 100%;}
  .lubo_box li img{ width: 100%; height: 100%;}

  /*圆点*/
  .carousel-items {
 position: absolute;
 z-index: 10;
 top: 275px;
 width: 100%;
 margin: 0 auto;
 text-align: center;
 font-size: 0;
  }
  .carousel-items span {
  display: inline-block;
  height: 6px;
  width: 30px;
  margin: 0 3px;
  background-color: #b2b2b2;
  cursor: pointer;
 }
 .carousel-items span:hover{
    background:yellow;
 }
 .active {
  background-color: #66ccff !important;
 }
.list-enter-active {
 transition: all 1s ease;
 transform: translateX(0)
}

.list-leave-active {
 transition: all 1s ease;
 transform: translateX(-100%)
}

.list-enter {
 transform: translateX(100%)
}

.list-leave {
 transform: translateX(0)
}
  /*按钮*/
  .lubo_btn{ position: absolute; width: 100%; top: 200px;}
  .left_btn:hover, .right_btn:hover{background:#fff;transition: all 1s ease;color:#888;}
  .left_btn, .right_btn{ width: 40px; height: 80px; background: #3cd4c9;opacity: 0.8;filter:alpha(opacity=80); cursor: pointer; color: #fff; line-height: 80px; font-size: 30px; text-align: center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}
  .left_btn{ float: left;box-shadow: -4px 7px 6px #ccc;}
  .right_btn{ float: right;box-shadow: 7px 4px 6px #ccc;}
  @media (max-width: 1320px) {
     .lubo{
        width:100% !important;
        top:75px;
        height: 255px;
     }
     .carousel-items{
        top:220px;
     }
     .lubo_btn{
        top:170px;
     }
  }
</style>