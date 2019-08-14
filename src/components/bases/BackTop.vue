<!-- backTop -->
<template>
<transition enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutRight">
  <div class='backTop' v-show="isShow" @click="backTopHandel">
    <font class="iconfont icon-fanhuidingbu"></font>
</div>
</transition>

</template>

<script>

export default {
name: 'backTop',
components: {},
created () {
    this.backTop();
},
data() {
//这里存放数据
return {
    isShow: false
};
},
methods: {
    backTop(){
        var scrollTop = ''
        window.onscroll = () =>{
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if(scrollTop>400){
            this.isShow = true;
        }
        else{
            this.isShow = false;
        }
        }
    },
    backTopHandel(){
        console.log(window);
        $("html, body").animate({scrollTop:0},{easing: "linear" })
        //window.scroll(0,0);
    }
},
}
</script>
<style scoped>
.backTop{
    position: fixed;
    right:20px;
    bottom:80px;
    cursor: pointer;
}
.icon-fanhuidingbu{
    font-size:35px;
    color:#3cd4c9;
}
.bat_ico{
    width:50px;
    height:50px;
    background:yellowgreen;
}
</style>