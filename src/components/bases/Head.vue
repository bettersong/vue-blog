<!-- head -->
<template>
<div class='head'>
<div class='head-top'>
    <div class="head-line"></div>
   <div class="container">
   <div class='row'>
      <div class=" logo">
         <img src="../../../static/images/logo.png" width="115px" height="100%"/>
         <h4 class="blogName">  <span>逐</span>  <span>梦</span>  <span>博</span>  <span>客</span>   </h4>
         <img src="../../../static/images/zhankai.png" class="zhankai" width="32px" height="32px" style="display:none;" @click="showMenu"/>
      </div>
    <div class="col-md-8" style="padding:0px;">
	<ul class="menu" ref="menuIcon">
		<li class="menu_li"><router-link class="firLink" to="/index">主页</router-link></li>
		<li class="menu_li"><a :class="{'router-link-active': this.$route.name == 'front'}" class="firLink" href="#">前端开发<i class="iconfont icon-xiala"></i></a>
			<ul class="submenu">
				<li class="submenu_li"><router-link to="/front/html5">HTML5</router-link></li>
				<li class="submenu_li"><router-link to="/front/css3">CSS3</router-link></li>
				<li class="submenu_li"><router-link to="/front/javascript">JavaScript</router-link></li>
				<li class="submenu_li"><router-link to="/front/jquery">JQuery</router-link></li>
				<li class="submenu_li"><router-link to="/front/vue">Vue</router-link></li>
				<li class="submenu_li"><router-link to="/front/react">React</router-link></li>
			</ul>
		</li>
		<li class="menu_li"><router-link class="firLink" to="/mood"><span>心情小镇</span></router-link>
		</li>
		<li class="menu_li"><a :class="{'router-link-active': this.$route.name == 'works'}" class="firLink" href="#">作品案例<i class="iconfont icon-xiala"></i></a>
			<ul class="submenu">
				<li><a href="http://47.100.126.169/works/3DFiles/3D-Magic.html" target="_new">3D档案库</a></li>
				<li><a href="http://47.100.126.169/works/3DImages/" target="_new">3D相册</a></li>
				<li><a href="http://47.100.126.169/works/PlaneWars/" target="_new">飞机大战</a></li>
				<li><a href="https://bettersong.github.io/bettersong/zmindex.html" target="_new">博客v1.0</a></li>
				<li><a href="/works/five">子菜单B</a></li>
				<li><a href="/works/six">子菜单B</a></li>
				<li><a href="/works/seven">子菜单B</a></li>
			</ul>
		</li>
		<li class="menu_li"><a :class="{'router-link-active': this.$route.name == 'fullStack'}" class="firLink" href="#">全栈开发<i class="iconfont icon-xiala"></i></a>
      <ul class="submenu">
				<li><router-link to="/fullStack/node">Node</router-link></li>
				<li><router-link to="/fullStack/php">PHP</router-link></li>
				<li><router-link to="/fullStack/python">Python</router-link></li>
			</ul>
      </li>
		<li class="menu_li"><router-link class="firLink" to="/brokenWords">碎言碎语</router-link></li>
        <li class="menu_li"><router-link class="firLink" :class="{'router-link-active': this.$route.name == 'aboutBlog'}" to="/aboutBlog">关于博客</router-link></li>
	</ul>
    </div>
    <div class="col-md-2 input">
       <div class="input-group">
      <input type="text" class="form-control" placeholder="搜索...">
      <span class="input-group-btn">
        <button class="btn btn-search" type="button">搜索</button>
      </span>
      <div ref="play" class="play" @click="playMusic">
          <p id="before" ref="before"></p><img src="../../../static/images/music.png"/>
          <audio src="./static/music/叶洛洛 - 我的将军啊.mp3" ref="music"></audio>
      </div>
    </div>
    </div>
</div>
</div>
</div>
<transition enter-active-class="animated bounceInRight" leave-active-class="animated zoomOutRight">
<div class="row row-phone pre-scrollable" v-show="isShow">
  <div class="col-md-4 col-phone">
      <ul class="menu-phone" ref="menuIcon">
		<li><router-link to="/index">主页</router-link></li>
		<li @click="subIsShow1 = !subIsShow1"><a href="#" :class="{'router-link-active': this.$route.name == 'front'}" class="firLink phone-a">前端开发<font class="iconfont icon-xiala"></font></a></li>
        <transition enter-active-class="animated lightSpeedIn" leave-active-class="animated lightSpeedOut">
			<ul class="submenu-phone" v-show="subIsShow1">
				<li><router-link to="/front/html5">HTML5</router-link></li>
				<li><router-link to="/front/css3">CSS3</router-link></li>
				<li><router-link to="/front/javascript">JavaScript</router-link></li>
				<li><router-link to="/front/jquery">JQuery</router-link></li>
				<li><router-link to="/front/vue">Vue</router-link></li>
				<li><router-link to="/front/react">React</router-link></li>
			</ul>
		</transition>
		<li><router-link class="firLink" to="/mood">心情小镇</router-link></li>
		<li><a class="firLink" href="#">作品案例</a></li>
		<li @click="subIsShow2 = !subIsShow2"><a href="#" :class="{'router-link-active': this.$route.name == 'fullStack'}" class="firLink phone-a">全栈开发<font class="iconfont icon-xiala"></font></a></li>
        <transition enter-active-class="animated flipInX" leave-active-class="animated flipOutX">
          <ul class="submenu-phone" v-show="subIsShow2">
				<li><router-link to="/fullStack/node">Node</router-link></li>
				<li><router-link to="/fullStack/php">PHP</router-link></li>
				<li><router-link to="/fullStack/python">Python</router-link></li>
		  </ul>
        </transition>
		<li><router-link class="firLink" to="/brokenWords">碎言碎语</router-link></li>
        <li><router-link class="firLink" :class="{'router-link-active': this.$route.name == 'aboutBlog'}" to="/aboutBlog">关于博客</router-link></li>
	</ul>
      </div>
</div>
</transition>
</div>
</template>
<script>
// import '../../../static/js/blog'
export default {

name: 'Head',
components: {},
data() {
//这里存放数据
return{
    isShow: false,
    subIsShow1: false,
    subIsShow2: false,
    linkName:'',
    mark:true,
};
},
mounted(){
     this.ListenMusic()
},
methods: {
   showMenu(){
       console.log(this.$refs.menuIcon);
       this.isShow = !this.isShow;
   },
   //音乐播放
   playMusic(){
    if(this.mark){
    this.$refs.music.play();
    this.$refs.play.className = "play rotate";
    this.$refs.before.style.display="none";
    }else{
        this.$refs.music.pause();
        this.$refs.play.className="play";
        this.$refs.before.style.display="block";
    }
    this.mark=!this.mark;
   },
   //监听音乐播放
   ListenMusic(){
    this.$refs.music.addEventListener("ended",()=>{
    this.$refs.play.className="play rotate";
    this.$refs.before.style.display="none";
    this.mark=true;
    this.$refs.music.play();
    });
   }
   
},
watch:{
    '$route' (to,form){
       this.isShow = false
    }
}
}
</script>
<style lang="css" scoped>
 @import '../../../static/css/head.css';
 .container{
     max-height:62px;
 }
 .head{
     position:fixed;
     top:0px;
     width:100%;
     z-index: 9999;
 }
 .head-top{
    box-shadow: 0 5px 9px #ccc;
 }
 .play {
    width:35px;
    height:35px;
    position:relative;
    border-radius:50%;
    margin-left:10px;
    cursor:pointer;
}
.play img{
    width:35px;
    height:35px;
    border-radius:50%;
    right:0px;
    top:0px;
    position:absolute;
}
.rotate{
        /*css3自定义动画:动画的名称 时间 匀速 无限重复*/
        animation:rot 8s linear infinite;
        transform-origin: 50% 50%;
            }
        /*css3动画帧*/
@keyframes rot{
            from{transform:rotate(0deg);/*css3变换：旋转*/}
            to{transform:rotate(360deg)}
            }
#before{
    position:absolute;
    width:35px;
    height:2px;
    background:#999;
    transform:rotate(-45deg);
    right:0px;
    top:17px;
}
 .head-line{
    width:100%;
    height:2px;
    background: red;
    animation: headanimation 6s ease 1s infinite alternate;
 }
 .router-link-active{
     color: #3cd4c9 !important;
    border-bottom: 2px solid #3cd4c9;
 }

 @keyframes headanimation {
     0%{
        background: red; 
     }
     25%{
         background: yellow;
     }
     50%{
         background:blue;
     }
     75%{
         background:green;
     }
     100%{
         background:red;
     }
 }
.head-main{
   width:100%;
   background:#f0f1f3;
   height:75px
}
.input-group{
   margin-top:15px;
}
.blogName{
   margin-top: 10%;
   }
 h4 span{  
        float:left;  
        position: relative;  
    }  

    h4 span:nth-child(1){  
        animation:jump 1s linear 0s infinite alternate;  
    }  

    h4 span:nth-child(2){  
        animation:jump 1s linear 0.2s infinite alternate;  
    }  

    h4 span:nth-child(3){  
        animation:jump 1s linear 0.4s infinite alternate;  
    }  

    h4 span:nth-child(4){  
        animation:jump 1s linear 0.6s infinite alternate;  
    }  
    @keyframes jump  
    {  
        0%{  
            top:0px;  
            color:red;  
        }  
        50%{  
            top:-10px;  
            color:green;  
        }  
        100%{  
            top:10px;  
            color:blue;  
        }  
    }
    .btn-search{
        background:#66ccff;
        color:#fff;
    }
    .logo{
        display: flex;
        padding-left:0px !important;
        padding-right:0px !important;
    }
    a{text-decoration: none;}
    @media (min-width: 795px) and (max-width: 1320px)  {
        .container{max-width: 100%;}
        .submenu li{min-width: 100px !important;}
        .input{display:none;}
        .menu{width:100%;}
        .menu li{
            min-width: 13%;
        }
    }
    @media (max-width: 795px) {
        
        .phone-a{
            display:flex;
        }
        .container{
            max-width: 100%;
        }
    .menu,.input{
     display:none;
    }
    .logo{
        width:100% !important;
    }
    .blogName{
        margin-top:25px;
    }
    .zhankai{
        display:block !important;
        position:absolute;
        right:5%;
        top:20%;
    }
    .menu-phone{
        text-align: left;
        padding:20px;
        background:url("../../../static/images/bg.png");
        height:100%;
    }
    .menu-phone img{
        vertical-align: middle;
    }
    .menu-phone a{
        color:#fff;
    }
    .menu-phone li{
        margin-top:15px;
        padding-left:10px;
        line-height:32px;
        border-bottom:1px solid #fff;
    }
    .submenu-phone{
        padding-left:15px;
    }
    .submenu-phone li{
        border-bottom:1px dashed #fff;
    }
    .col-phone{
        padding-right:0;
        min-height:800px;
    }
    .row-phone{
        width:50%;
        position:absolute;
        right:0;
        top:70px;
        padding-right:0;
    }
    .pre-scrollable{
        max-height:500px !important;
    }
}
     
</style>