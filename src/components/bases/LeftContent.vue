<!-- leftContent -->
<template>
<div class='leftContent'>
            <div class="main-right">
               <div class="mr_box mr_top">
                <div class="row">
                    <div class="col-md-6 text-left" style="padding:0px;">
                        <button type="button" class="btn btn-primary btn-sm">博客简介</button>
                        </div>
                    <div class="col-md-6"></div>   
                </div>
                <div style="margin-top:15px;">
                    <img src="http://47.100.126.169/zmengBlog/static/images/405.jpg" class="img-responsive" alt="Responsive image">
                </div>
                <p class="blogIntroduce text-left">
                    <span style="color:#3cd4c9">逐梦博客:</span> xxxxx.com，一个关注Web前端开发技术、关注用户体验、坚持全栈开发的个人网站，愿景：成为宇宙中最具有代表性的技术博客，期待您的参与,<router-link to="/AboutBlog">了解更多...</router-link>
                </p>
               </div>
               <div class="mr_box mr_mid">
                   <div class="page-header mr_title text-left">
                     <span class=""><font class="iconfont icon-zhifeiji"></font>最近更新</span>
                    </div>
                    <div class="new_box">
                        <ul>
                            <li v-for="(item,index) in wenzhangData.slice(0,6)" :key="index">
                                <div class="container">
                                <div class="row">
                                <div class="col-md-4" style="overflow:hidden;padding:5% 0;">
                                    <img :src="item.img" class="img-fluid rounded center-block"/>
                                </div>
                                <div class="col-md-8">
                                    <div class="page-header al_title text-left">
                                        <p style="margin:0"><router-link :to="'/pageDetail/'+item.tag" class="title">{{item.title}}</router-link></p>
                                        <span class="time">{{item.time}}</span>
                                    </div>
                                </div>
                                </div>
                                </div>
                            </li>
                        </ul> 
                    </div>
               </div>
               <div class="mr_box mr_bom">
                   <div class="page-header mr_title text-left">
                     <span class=""><font class="iconfont icon-biaoqian"></font>标签云</span>
                    </div>
                    <div class="tag_box">
                        <ul>
                            <li v-for="(item, index) in tagsArr" :key=index :style="{background:item.bgColor}">
                                {{item.name}}
                            </li>
                        </ul>
                    </div>
               </div>
               <div class="mr_box mr_bom">
                   <div class="page-header mr_title text-left">
                     <span class=""><font class="iconfont icon-pinglun"></font>精彩评论</span>
                    </div>
              <div class="">
                <div class="comment">
                    <ul class="list-group">
                        <li class="com_list" v-for="(item,index) in commentData" :key="index">
                            <div class="float-left"> 
                                <img class="img-responsive" src="../../../static/images/user2.png" alt="user">
                            </div>
                            <div class="float-left com_content">
                                <span class="username">{{item.name}}</span>
                                <span class="float-right">{{item.maxtime.split(' ')[0]}}</span>
                                <p>{{item.wzcontent}}</p>
                                <p>评:<router-link :to="'/pageDetail/'+item.tag">{{item.title}}</router-link></p>
                            </div>
                        </li>
                    </ul>
                </div>
              </div>
               </div>
               <div class="mr_box mr_bom text-left">
                   <div class="page-header mr_title">
                     <span class=""><font class="iconfont icon-tongji"></font>站点统计</span>
                    </div>
                    <div class="tj_tag">
                        <ul>
                            <li>标签：20</li>
                            <li>文章：{{staticData.wzNum}}</li>
                            <li>评论：{{staticData.wzcommentNum}}</li>
                            <li>分类：9</li>
                            <li>最后更新：{{staticData.newTime}}</li>
                        </ul>
                    </div>
               </div>
            </div>
            </div>
</template>
<script>
export default {
name: 'leftContent',
components: {},
created(){
    //获取站点数据
    this.getData()
    //获取评论数据
    this.getComData()
    this.bus.$on('newList',(msg)=>{
         this.wenzhangData = msg;
    })
},
beforeDestroy(){
    // console.log(this.wenzhangData)
    this.bus.$emit('newList',this.wenzhangData)
},
data() {
//这里存放数据
return {
     wenzhangData:'',
     staticData:{},
     commentData:[],
     tagsArr:[
        {id:1, name:'html5',bgColor:'#f5cd79'}, {id:2, name:'css3',bgColor:'#f8a5c2'},
        {id:3, name:'JavaScript',bgColor:'#9466ff'}, {id:4, name:'Vue',bgColor:'#0fb9b1'},
        {id:5, name:'Canvas',bgColor:'#20bf6b'}, {id:6, name:'Jquery',bgColor:'#e77f67'},
        {id:7, name:'Ajax',bgColor:'#596275'}, {id:8, name:'Bootstrap',bgColor:'#f5cd79'},
        {id:9, name:'React',bgColor:'#9466ff'}, {id:10, name:'PHP',bgColor:'#20bf6b'},
        {id:11, name:'Node',bgColor:'#3cd4c9'}, {id:12, name:'SASS',bgColor:'#0fb9b1'},
        {id:13, name:'Iconfont',bgColor:'#596275'}, {id:14, name:'Python',bgColor:'#f5cd79'},
        {id:15, name:'小程序',bgColor:'#f8a5c2'}, {id:16, name:'Angular',bgColor:'#e77f67'},
        {id:17, name:'Linux',bgColor:'#20bf6b'}, {id:18, name:'Github',bgColor:'#596275'},
        {id:19, name:'Webpack',bgColor:'#9466ff'},{id:20, name:'Axios',bgColor:'#f8a5c2'},
    ]
};
},
methods: {
    //获取站点数据
   getData(){
      this.axios.get(this.GLOBAL.backendPath+'Manage/statisAPI').then(res=>{
          this.staticData = res.data
          console.log(this.staticData)
        //   console.log(res)
      }).catch(err=>{
          console.log(err)
      })
   },
   //获取评论数据
   getComData(){
       this.axios.get(this.GLOBAL.backendPath+'Manage/commentAPI').then(res=>{
        //    console.log(res.data)
           this.commentData = res.data
           console.log(this.commentData)
       }).catch(err=>{
           console.log(err)
       })
   }
},
}
</script>
<style scoped>
@import '../../assets/css/mainContent.css';
.al_title{
    font-size: 12px;
    padding:10% 0;
    overflow: hidden;
}
.time{
    position:absolute;
    bottom:10%;
}
.username{
    color: #333;
}
.comment img{
    width:40px;
    height:40px;
}
.com_content{
    max-width: 190px;
    margin-left:10px;
    font-size:14px;
    color:#999;
    text-align: left;
}
.com_list{
    border-bottom: 1px #efefef dashed;
    padding:10px 0;
}
.com_content p,.com_content span{
    margin:0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>