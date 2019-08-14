<!--  -->
<template>
<div class="pageContainer">
<div class='articleList' v-show="listFlag">
    <div class="page-header mr_title text-left" ><span><font class="iconfont icon-huo2" style="color:red"></font>最新文章</span></div>
    <ul class="list-group">
  <li class="list-group-item" style="padding:10px 0px;margin-top:10px;" v-for="(item, index) in wenzhangList.slice(tag*this.pagesNum,tag*this.pagesNum+this.pagesNum)" :key="index">
      <div class="container">
        <div class="row">
          <div class="col-md-4" style="overflow:hidden;">
              <img :src="item.img" class="img-fluid rounded center-block"/>
          </div>
          <div class="col-md-8">
              <div class="page-header al_title text-left">
                <span class="type">{{item.smclass}}</span>
                <span class="title">{{item.title}}</span>
              </div>
              <p class="text-left content">
                  {{GetChinese(item.content)}}
              </p>
              <div class="wen_bto">
                  <div class="row">
                    <div class="col-md-8 col-sm-7">
                        <ul>
                            <li><i class="iconfont icon-shijian"></i>{{item.time}}</li>
                            <li><i class="iconfont icon-liulan"></i>{{item.see}}</li>
                            <li @click="zanAdd(item.id,item.zan)"><i class="iconfont icon-dianzan_kuai"></i>
                            {{item.zan}}</li>
                        </ul>
                    </div>
                    <div class="col-md-4 col-sm-5 text-right" @click="item.see++">
                        <router-link :to="'/pageDetail/'+item.tag" class="readMore">阅读详情</router-link>
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
  </li>
</ul>
   <div class="row" style="margin:0px;">
     <ul class="pagesInner">
      <li class="page" @click="prevHandel">上一页</li>
      <li class="page" v-for="(item, index) in pages" :key="index" :class="{active: item === currentPage}" @click="select(item)">
        <span>{{item}}</span>
      </li>
      <li class="page" @click="nextHandel">下一页</li>
    </ul>
   </div>
    
  </div>
  <div v-show="!listFlag">博主会努力更新该类文章的哦</div>
  <Loading v-show="flag"></Loading>
</div>
</template>
<script>

import Loading from '../bases/Loading'
export default {
name: 'articleList',
components: {Loading},
props:['msg'],
data() {
//这里存放数据
return {
     flag:false,
     wenzhangList:'',
     currentPage: 1, //当前页码 
     totalPages: '',  //总页码
     pagesNum: 9, //每页数据量
     tag:0,
     listFlag:true
};
},
created() {
    this.flag = true
    console.log(this.msg)
    this.getWenzhang()
},
methods: {
    //请求数据
    getWenzhang(){
       this.axios.post(this.GLOBAL.backendPath+'Manage/wenzhangAPI',this.$qs.stringify({
           type:this.msg
       })).then((res)=>{
    //   console.log(res.data)
      this.wenzhangList = res.data[0]
      if(this.wenzhangList.length == 0){
          this.listFlag = false
      }
      console.log(this.wenzhangList)
      const total = res.data.length;
      this.totalPages = Math.ceil(total/this.pagesNum);
      this.bus.$emit('newList',this.wenzhangList);
      this.flag = false
   }).catch((error)=>{
      console.log(error)
   })
    },
    //正则提取中文
    GetChinese(strValue) {  
    if(strValue!= null && strValue!= ""){  
        var reg = /[\u4e00-\u9fa5]/g;   
        return strValue.match(reg).join("");  
    }  
    else  
        return "";  
   },
   //赞
   zanAdd(id,zan){
         console.log(id,zan)
         this.axios.post(this.GLOBAL.backendPath+'Manage/zanAddAPI',this.$qs.stringify({
            id:id,
            zan:zan
        })).then((res)=>{
            this.wenzhangList = res.data
             console.log(res)
         }).catch((err)=>{
             console.log(err)
         })
   },
    scrollto(){
       document.body.scrollTo = 500;
       document.documentElement.scrollTop = 500;
    },
   select(item){
      //console.log(item);
      if(isNaN(item)){
         console.log('no');
      }else{
          this.currentPage = item;
          this.tag = this.currentPage - 1;
          this.scrollto();
      }
   },
   prevHandel(){
       if(this.currentPage <= 1){
           this.currentPage = 1;
       }else{
          this.currentPage--;
          this.tag = this.currentPage - 1;
          this.scrollto()
       }
   },
   nextHandel(){
       if(this.currentPage>=this.totalPages){
          this.currentPage = this.totalPages;
       }else{
          this.currentPage++;
          this.tag = this.currentPage - 1;
          this.scrollto()
       }
   }
},
watch:{
    '$route' (to,from){
        // console.log('msg:'+this.msg)
        // console.log(to.params.type)
        this.msg = to.params.type
        if(this.msg != 'index'){
           this.getWenzhang()
           this.listFlag = true
        }
        
    }
},
computed: {
    pages() {
      const c = this.currentPage;
      const t = this.totalPages;
      if(t==1){
          return [1];
      }else if(t==2){
          return [1,2];
      }
      else if(t==3){
          return [1,2,3]
      }
      else if(t==4){
          return [1,2,3,4]
      }
      else if(t==5){
          return [1,2,3,4,5]
      }
      else if (c > 5) {
        return [1, 2, 3, 4, '...', t]
      }else if (c >= t - 4) {
        return [1, '...', t-4, t-3, t-2, t-1, t]
      }else{
        return [1, '...', c-1, c, c+1,'...', t]
      }
    }
  },
filters:{
    imgUrl: function(value) {
        return '../../../static/images'+value;
    }
}
}
</script>
<style scoped>
.articleList{
    margin-top:10px;
}
.al_title{
    border-bottom: 1px solid #999;
    margin-bottom: 10px;
}
.al_title .title{
    font-size: 18px;
    display:inline-block;
    padding-left:10px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    max-width: 70%;
}
.type{
    float:left;
    padding:2px 10px;
    background:#3cd4c9;
    border-radius: 6px;
    color:#fff;
}
.content{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    max-height:80px;
    line-height:28px;
    color:#999;
}
.mr_title span{
    border-bottom: 2px solid #007bff;
    padding: 5px 0;
}
.wen_bto ul{
    display: flex;
}
.wen_bto ul li{
    font-size:13px;
    margin-right:10px;
    cursor: pointer;
    color: #e77f67;
    transition: all 1s ease;
}
.list-group-item img{
    overflow: hidden;
    transition: all 0.6s ease;
}
.list-group-item img:hover{
    transform: scale(1.1);
    transition: all 0.6s ease;
}
.list-group-item:hover:after{
    width:100%;
    transition: all 1s ease;
}
.list-group-item:after{
    content: "";
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 0;
    height: 1px;
    background: #9466ff;
    -webkit-transition: .4s;
    transition: .4s;
}
.readMore{
    background: #9466ff;
    padding: 5px 10px;
    color: #fff;
    border-radius: 5px;
    font-size: 14px;
}
.list-group-item{
    border-radius: 0.25rem;
}
.pagesInner{
    display: flex;
    margin:30px auto 10px;
}
.pagesInner li{
    border:1px solid #999;
    padding:2px 8px;
    margin:2px;
    border-radius: 3px;
    cursor: pointer;
}
.pagesInner li:hover,.active{
    background:#3cd4c9;
    border:1px solid #3cd4c9 !important;
    color:#fff;
}
@media (max-width: 1320px) {
.al_title{
    border-bottom: 1px solid #999;
    margin-bottom: 10px;
    margin-top:10px;
}
.al_title .title{
    max-width: 50%;
    font-size:16px;
}
}
</style>