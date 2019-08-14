<!-- foot -->
<template>
<div class='foot'>
    <p>注：当前博客为 <span style="color:red">逐梦</span>自主研发，版权所有</p>
    <p>该网站已运行：<span id="htmer_time"></span></p>
    <p>© 2018 - {{new Date().getFullYear()}} <span class="foot_tag">逐梦原创</span></p>
</div>
</template>

<script>
import "../../assets/js/timer.js";
export default {
name: 'foot',
components: {},
data() {
//这里存放数据
return {

};
},
methods: {

},
}
</script>
<style scoped>
.foot{
    margin-top:30px;
    padding:10%;
    height:190px;
    background:url("../../../static/images/footer_bg.jpg") center center no-repeat;
}
.foot p{
    font-size:14px;
}
.foot p:nth-child(1){
    color:#999;
}
.foot p:nth-child(2){
    color:#3cd4c9;
}
.foot_tag{
    background: rgb(148, 102, 255);
    padding: 5px 10px;
    color: #fff;
    border-radius: 5px;
}
</style>