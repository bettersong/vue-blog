<!-- brokenWords -->
<template>

<div class='brokenWords'>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="text_box">
                    <textarea class="text" placeholder="说点什么吧..." v-model="sug"></textarea>
                </div>
                <div class="row text_tools">
                        <div class="left_tools col-md-8 text-left">
                            <label>昵称：<input type="text" v-model="name"></label>
                            <label>邮箱：<input type="text" v-model="email"></label>
                        </div>
                        <div class="right_tools ml-auto col-md-4">
                            <button class="btn float-right changBtn" @click="add">畅言一下</button>
                        </div>
                </div>
                <div class="text_content">
                    <div class="text_top">
                       <div class=" ly_left float-left">留言</div>
                       <div class="float-right"><span class="number">{{suggestion.length}}</span>条留言</div>
                    </div>
                    <div></div>
                    <ul>
                        <li v-for="(item, index) in suggestion" :key="index">
                            <div class="img_box">
                                <img src="../../../static/images/user.jpg" class="img-fluid rounded-circle">
                            </div>
                            <div class="row text-left" style="margin:0;">
                                <div class="col-md-12">
                                    <span style="color:#3cd4c9">{{item.name}}</span>
                                    <i class="iconfont icon-level1" style="color: #f76438;"></i>
                                    <span class="time"><i class="iconfont icon-shijian"></i>{{item.time | time}}</span>
                                    </div>
                                <div class="col-md-12" style="font-size:15px;color:#666">{{item.content}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
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
import Loading from '../bases/Loading'
export default {
name: 'brokenWords',
components: {Loading},
data() {
//这里存放数据
return {
    name:'',
    email:'',
    sug:'',
    flag:false,
    alertFlag:false,
    suggestion:'',
    alertContent:''
};
},
created() {
    this.show();
},  
methods: {
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
        this.flag = true;
        this.axios.post(this.GLOBAL.backendPath+'Broken/addBroken',this.$qs.stringify({
            name:this.name,
            email: this.email,
            content:this.sug,
            time:new Date()
        })).then(res=>{
            console.log(res);
            this.sug = this.name = this.email = '';
            this.show();
            this.flag = false;
            this.alertFlag = true
            this.alertContent = '留言成功 ^_^'
            this.setTime()
        }).catch(err=>{
            alert(err);
        })
        
    },
    setTime(){
       setTimeout(() => {
           this.alertFlag = false
       }, 2000);
    },
    show(){
       this.axios.get(this.GLOBAL.backendPath+'Broken/showBroken')
    .then(res=>{
        this.suggestion = res.data;
    })
    .catch(err=>{
        console.log(err);
    })
    }
},
filters:{
    time(value){
        var d = new Date(value);
        var year = d.getFullYear();
        var mouth = d.getMonth()+1;
        var day = d.getDate();
        var hour = d.getHours();
        var minute = d.getMinutes();
        var second = d.getSeconds();
        if(mouth<10){
            mouth = '0' + mouth;
        }
        if(day<10){
            day = '0' + day;
        }
        if(hour<10){
            hour = '0' + hour;
        }
        if(minute<10){
            minute = '0' + minute;
        }
        if(second<10){
            second = '0' + second;
        }
        return year+'-'+mouth+'-'+day +'  '+ hour+':'+minute+':'+second;
    }
},
}
</script>
<style scoped>
.brokenWords{
    width:90%;
    margin:0 auto;
}
.container{
    max-width:100% !important;
    margin-top:100px;
}
.col-md-12{
    background:#fff;
    border-radius:8px;
    padding:15px;
}
.text_box{
    width:100%;
    background:#fff;
    border:1px solid #3cd4c9;
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
    border:1px solid #3cd4c9;
    padding:0 5px;
}
.changBtn{
    background:#3cd4c9;
    color:#fff;
}
.img_box{
    max-width:50px;
    max-height:auto;
}
.text_content{
    margin-top:20px;
}
.text_content li{
    display: flex;
    margin:20px 10px;
    border-bottom: 1px dashed #ccc;
    padding: 15px 0;
}
.text_content .col-md-12{
    padding:0 10px;
}
.text_top{
    width:100%;
    height:30px;
    border-bottom:1px solid #3cd4c9;
    color:#3cd4c9;
}
.number{
    font-weight: bold;
    font-size: 25px;
}
.ly_left{
    border-left:3px solid #3cd4c9;
    padding-left:5px;
}
.time{
    color:#999;
    font-size:12px;
}
</style>