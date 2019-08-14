<!-- pageDetail -->
<template>
<div class='pageDetail'>
    <!-- <router-view></router-view> -->
    <div class="container">
        <div class="row">
            <div class="col-md-9 pagebox">
                <div class="page-header al_title text-left">
                   <router-link to="/index">首页</router-link><i class="iconfont icon-xiangyou"></i>
                   <router-link to="">{{this.wenzhangData.bigclass}}</router-link><i class="iconfont icon-xiangyou"></i>
                   <router-link to=''>{{this.wenzhangData.smclass}}</router-link><i class="iconfont icon-xiangyou"></i>
                   <router-link to="">{{this.wenzhangData.title}}</router-link>
                </div>
                <div class="page-content">
                    <div class="page-c-title">
                      <h3>{{this.wenzhangData.title}}</h3>
                      <div class="tag">
                          <span><i class="iconfont icon-shijian"></i>{{this.wenzhangData.time}}</span>
                          <span><i class="iconfont icon-wodered"></i>作者：逐梦</span>
                          <span><i class="iconfont icon-zitiyulan"></i>阅读：{{this.wenzhangData.see}}</span>
                      </div>
                    </div>
                    <div class="page-c-content text-left" v-html="this.wenzhangData.content"></div>
                    
                </div>
            <div class="page_foot">
                    <div class="btns">
                        <span @click="zanAdd(wenzhangData.id,wenzhangData.zan)">点赞</span>
                        <span class="shang" @mouseover="zf=true" @mouseleave="zf=false">
                            打赏
                            <transition enter-active-class="animated bounceIn" leave-active-class="animated zoomOut">
                                <div class="zfb" v-show="zf">
                                    <img :src="zfbimg" class="img-responsive">
                                </div>
                            </transition>
                        </span>
                    </div>
                    <div class="page_li">
                        <span class="prev">上一篇:<router-link :to="prevCon.link">{{prevCon.title}}</router-link></span>
                        <span class="next">下一篇:<router-link :to="nextCon.link">{{nextCon.title}}</router-link></span>
                    </div>
                <div class="form">
                  <div class="text_box">
                    <textarea class="text" placeholder="请正确填写邮箱，否则您的评论可能会被删除！" v-model="sug"></textarea>
                   </div>
                   <div class="row text_tools">
                        <div class="left_tools col-md-8 text-left">
                            <label>昵称：<input type="text" v-model="name" placeholder="[必填]"></label>
                            <label>邮箱：<input type="text" v-model="email" placeholder="[必填]"></label>
                        </div>
                        <div class="right_tools ml-auto col-md-4">
                            <button class="btn float-right changBtn" @click="add">发表评论</button>
                        </div>
                   </div>
                </div>
                <div class="comment">
                   <ul class="list-group">
                    <li class="list-group-item" v-for="(item,index) in wenzhangCom" :key="index">
                         <div class="float-left"> 
                            <img class="img-responsive" src="../../../static/images/user2.png" alt="user">
                        </div>
                        <div class="float-left com_content">
                            <span class="username">{{item.name}}</span>
                            <p>{{item.wzcontent}}</p>
                        </div>
                        <div class="float-right">
                            <span class="time">{{item.wztime}}</span>
                            <span class="answer" @click="answer">回复</span>
                        </div>
                    </li>
                    </ul>
                </div>
            </div>
            </div>
            <div class="col-md-3">
               <LeftContent></LeftContent>
            </div>
        </div>
    </div> 
    <transition enter-active-class="animated bounceInUp" leave-active-class="animated fadeOut">
      <div class="alert alert-success" v-show="alertFlag">{{alertContent}}</div>
    </transition>
    <Loading v-show="flag"></Loading>
</div>

</template>

<script>
import LeftContent from '../bases/LeftContent'
import Loading from '../bases/Loading'
export default {
name: 'pageDetail',
components: {},
data() {
return {
    alertFlag:false,
    alertContent:'',
    flag:false,
    wenzhangData:'',
    activeId: '',
    wenzhang:'',  //文章
    wenzhangCom:[],  //该文章文章评论
    now:'',
    name:'',
    email:'',
    sug: '',
    htmlCon: '',
    prevCon:{name:'',link:''},
    nextCon:{name:'',link:''},
    wenzahngList:'',  //所有文章评论,
    wzindex:'',
    zf:false,
    zfbimg:'.././static/images/zfb.jpg'
};
},
components:{
   LeftContent,
   Loading
},
created () {
    // console.log(this.wenzhangData)
    this.wzindex = this.wenzhang.length-this.$route.params.id
    this.now = this.$route.params.id
    this.flag = true
    this.getWenzhangData()
    this.activeId = this.$route.params.id - 1;
},
methods: {
    //请求数据
    getWenzhangData(){
       this.axios.post(this.GLOBAL.backendPath+'Manage/wenzhangAPI',this.$qs.stringify({
        type:'detail'
    })).then((response)=>{
        this.wenzhang = response.data[0]  //文章
        console.log(this.wenzhang)
        this.wenzahngList = response.data[1]  //文章评论
        this.getComData()
        this.seeNumAdd()  //浏览数增加
        console.log(this.wenzhangCom)
        this.showhtml()

        this.flag = false
    }).catch((error)=>{
       alert(error);
    });
    },
    zanAdd(id,zan){
         console.log(id,zan)
         this.axios.post(this.GLOBAL.backendPath+'Manage/zanAddAPI',this.$qs.stringify({
            id:id,
            zan:zan
        })).then((res)=>{
            this.wenzhangList = res.data
            this.alertFlag = true
        this.alertContent = '谢谢哟^_^'
        this.setTime()
            //  console.log(res)
         }).catch((err)=>{
             console.log(err)
         })
   },
    //浏览数
    seeNumAdd(){
         this.axios.post(this.GLOBAL.backendPath+'Manage/seeAddAPI',this.$qs.stringify({
            id:this.wenzhangData.id,
            see:this.wenzhangData.see
        })).then((res)=>{
            //  console.log(res)
         }).catch((err)=>{
             console.log(err)
         })
    },
    getComData(){
        const wzindex = this.wenzhang.length-this.$route.params.id
        // console.log(wzindex)
        this.wenzhangData = this.wenzhang[wzindex];//当前文章
        console.log(this.wenzhangData.id)
        this.wenzhangCom = [];
        //遍历的到该文章的文章评论
        this.wenzahngList.forEach((item,index)=>{
              if(item.wzid == this.wenzhangData.id){
                   this.wenzhangCom.push(item)
              }
        })
    },
    setTime(){
       setTimeout(() => {
           this.alertFlag = false
       }, 2000);
    },
    showhtml(){
        const wzindex = this.wenzhang.length-this.$route.params.id   //当前文章在数组中的下标
        if(this.now==this.wenzhang.length){
            this.prevCon = {title:'已经是最新的了',link:''}
            this.nextCon = {title:`${this.wenzhang[+wzindex+1].title}`,link:`/pageDetail/${parseInt(+this.now-1)}`}
        }else if(this.now == 1){
            this.prevCon = {title:`${this.wenzhang[+wzindex-1].title}`,link:`/pageDetail/${parseInt(+this.now+1)}`}
            this.nextCon = {title:`已经是最后一篇了`,link:''}
        }else{
            this.prevCon = {title:`${this.wenzhang[+wzindex-1].title}`,link:`/pageDetail/${parseInt(+this.now+1)}`}
            this.nextCon = {title:`${this.wenzhang[+wzindex+1].title}`,link:`/pageDetail/${parseInt(+this.now-1)}`}
        }
    },
    answer(){
        this.alertFlag = true
        this.alertContent = '只有博主能够回复哦^_^'
        this.setTime()
    },
    add(){
        if(this.sug == '' || this.name == '' || this.email == ''){
            this.alertFlag = true
            this.alertContent = '所填项均不能为空！'
            this.setTime()
            return
        }else if(this.email.indexOf('@') <0){
            this.alertFlag = true
            this.alertContent = '邮箱格式不正确！'
            this.setTime()
            return
        }
        var date = new Date()
        var year = date.getFullYear(),month = date.getMonth()+1, day = date.getDate(),hour = date.getHours(),minutes = date.getMinutes(),seconds = date.getSeconds();
        if(month<10){
            month ='0'+ month;
        }else if(day<10){
            day = '0'+day;
        }else if(hour<10){
            hour = '0'+hour;
        }else if(minutes<10){
            minutes = '0'+minutes;
        }else if(seconds<10){
            seconds = '0'+seconds;
        }
        var time = year+ '-' + month + '-' +day +' '+hour+':'+minutes+':'+seconds;
        const wzindex = this.wenzhang.length-this.$route.params.id
        this.axios.post(this.GLOBAL.backendPath+'WzComment/addWzCommentAPI',this.$qs.stringify({
            name:this.name,
            email: this.email,
            content:this.sug,
            wzid:this.wenzhang[wzindex].id,
            time:time
        })).then(res=>{
            console.log(res);
            this.wenzahngList = res.data
            this.getComData()
            this.sug = this.name = this.email = ''
            this.alertFlag = true
            this.alertContent = '评论成功！'
            this.setTime()
        }).catch(err=>{
            this.alertFlag = true
            this.alertContent = err
        })
    }
},
watch: {
    '$route' (to, from) {
      this.now = to.params.id
      this.wenzhangData = this.wenzhang[to.params.id-1]
      this.getWenzhangData()
      this.getComData()
      this.showhtml()
    }
},
}
</script>
<style scoped>
.pagebox{
    margin-bottom:20px;
}
.pageDetail{
    width:90%;
    margin:0 auto;
}
.container{
    max-width:100% !important;
    margin-top:100px;
}
.al_title{
    background: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size:14px;
}
.comment{
    margin-top:20px;
}
.username{
    color: skyblue;
}
.comment img{
    width:40px;
    height:40px;
}
.shang{
    position:relative;
}

.zfb{
    position: absolute;
    width: 200px;
    height: 200px;
    background: #fff;
    top: -210px;
    box-shadow: 1px 2px 5px #ccc;
    left: -50px;
}
.com_content{
    margin-left:10px;
    font-size:14px;
    color:#555;
    text-align: left;
}
.com_content p{
    margin:0;
}
.time,.answer{
    font-size:14px;
    color:#999;
    cursor:pointer;
}
.answer:hover{
    color:#ec6149;
    text-decoration: underline;
}
.list-group-item{
    margin-bottom:10px
}
.page-content,.page_foot{
    background:#fff;
    padding:20px;
}
.page-content{
    margin-top:20px;
}
.page-content h3{
    font-size:20px;
    margin:20px;
}
.tag span{
    font-size:14px;
    margin-right:10px;
}
.tag span i{
    margin-right:5px;
    vertical-align:middle;
}
.btns{
    padding:30px 0;
    border-bottom:1px dashed #ccc;
}
.btns span{
    display: inline-block;
    padding: 5px 30px;
    cursor: pointer;
    color: #fff;
    margin-right: 20px;
    border-radius: 20px;
}
.btns span:first-child{
    background-color: #1890ff;
}
.btns span:last-child{
    background-color: #ec6149;
}
.page-c-title{
   padding:10px;
   border-bottom:1px dashed #ccc;
}
.page_li{
    display: flex;
    justify-content: space-between;
    padding-top:10px;
}
.form{
    margin-top:20px;
}
.page_li span{
    display:inline-block;
    max-width: 300px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-wrap: normal;
}
.page_li span,.page_li a{
    font-size:14px;
    color:#555;
}
.page_li a:hover{
    text-decoration:underline;
    color:#1890ff;
}
.text_box{
    width:100%;
    background:#fff;
    border:1px solid #1890ff;
    border-radius:10px;
    padding: 5px;
}
.text{
    width:100%;
    height:100px;
    overflow-x: hidden;
    overflow-y: auto;
    resize: none;
    border:none;
}
.text:focus{
    outline:none;
}
.text_tools{
    display: flex;
    margin-top:10px;
}
.left_tools input{
    border:1px solid #1890ff;
    padding:0 5px;
}
.changBtn{
    background:#1890ff;
    color:#fff;
}
</style>