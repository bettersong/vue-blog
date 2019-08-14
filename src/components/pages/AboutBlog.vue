<!-- aboutBlog -->
<template>
<div class='aboutBlog'>
    <div class="container">
        <div class="row">
            <div class="col-md-8">
                <div class="my_top">
                    <div class="user">
                         <div class="user_img"></div>
                    </div>
                    <div class="user_mes">
                    <div class="fir_line">
                         <span>逐梦</span>
                         <span><img src="../../../static/images/vip9.png"/></span>
                    </div>
                    <div class="sec_line">
                       <button class="btn guan" @click="add">关注</button>
                    </div>
                </div>
                <div class="user_bottom">
                    <ul>
                        <li>人气:{{mine.renqi | numMore}}</li>
                        <li>粉丝:{{mine.fensi | numMore}}</li>
                        <li>关注:{{mine.guanzhu | numMore}}</li>
                    </ul>
                </div>
                </div>
                <div class="page-header text-left tagLine">
                    博主简介
                </div>
                <div class="my_mid text-left">
                    <ul>
                        <li>
                            <span>姓名：{{mine.name}}</span>
                            <span>名族：{{mine.nature}}</span>
                        </li>
                        <li>
                            <span>星座：{{mine.star}}</span>
                            <span>学历：{{mine.education}}</span>
                        </li>
                        <li>
                            <span>籍贯：{{mine.birthplace}}</span>
                            <span>专业：{{mine.profession}}</span>
                        </li>
                        <li>
                            <span>目标城市：{{mine.city}}</span>
                            <span>&nbsp;</span>
                        </li>
                        <li>
                            <span style="width:100%">自我说明：</span>
                        </li>
                        <li class="zw_content">
                            {{mine.introduce}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
name: 'aboutBlog',
components: {},
data() {
return {
   renqi: 999,
   fensi: 990,
   guanzhu: 88,
   mine:''
};
},
created() {
    this.axios.get(this.GLOBAL.backendPath+'AboutBlog/showInfo').then((response)=>{
      this.mine = response.data;
    }).catch(function(error){
        alert(error);
        console.log(error);
    })
},
methods: {
   add(){
       //parseInt(this.mine.fensi) += 1;
       this.mine.fensi = parseInt(this.mine.fensi) + 1
   }
},
filters: {
    numMore(val){
          if(val>=999){
              return 999 + '+';
          }else{
              return val;
          }
    }
}
}
</script>
<style scoped>
.brokenWords{
    width:90%;
    margin:0 auto;
}
.container{
    max-width:100% !important;
    margin-top:80px;
}
.col-md-8{
    margin:0 auto;
    border:1px solid #ccc;
    padding:10px;
    background: #fff;
    border-radius: 8px;
}
.my_top{
    width:100%;
    height:300px;
    background: url('../../../static/images/my_bg.jpg') no-repeat center 0/ 100%;
    position:relative;
    box-shadow:1px 3px 8px #666;
}
.user{
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    margin: auto;
    width: 90px;
    height: 90px;
}
.user_img{
    width:100%;
    height:100%;
    border-radius: 50%;
    background:url('../../../static/images/my.jpg') no-repeat center 100%/ 100%;
}
.user_mes{
    position: absolute;
    top:40%;
    width:100%;
    color:#fff;
}
.fir_line{
    text-align: center;
    font-size:18px;
    margin:2%;
}
.guan{
    padding:5px 10px;
    color:#fff;
    background:#f76438
}
.user_bottom{
    width:45%;
    height:10%;
    background:#fff;
    position:absolute;
    left:0;
    bottom:0;
    border-radius: 0 15px 0 0;
}
.user_bottom ul{
    width:90%;
    margin:0 auto;
    display:flex;
    justify-content: space-between;
}
.tagLine{
    margin-top:20px;
    line-height:40px;
    border-bottom:1px solid #3cd4c9;
}
.my_mid span{
    width:50%;
    display: block;
    float:left;
    line-height: 40px;
}
.zw_content{
    text-indent: 2rem;
    font-size: 13px;
    line-height:30px;
    color:#999;
}
@media(max-width: 795px){
    .user_bottom{
        width:80%;
    }
}
</style>