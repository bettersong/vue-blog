<!-- rightTag -->
<template>
<div class='rightTag'>
    <div class="leftOne"></div>
     <div class="rightOne">
         <p>联系方式</p>
         <p class="fontColor">187****9195</p>
         <p>QQ</p>
         <p class="fontColor">1833717392</p>
         <p>添加微信</p>
         <img src="../../../static/images/wx.png" width="80px" height="80px" alt="微信"/>
     </div>
</div>
</template>

<script>

export default {
name: 'rightTag',
components: {},
data() {
//这里存放数据
return {
    isShow:false
};
},
methods: {

},
}
</script>
<style scoped>
.rightTag{
    position:fixed;
    top:35%;
    height:280px;
    right:0;
    font-size: 12px;
    display:flex;
}
.leftOne{
    width:40px;
    height:150px;
    position: absolute;
    right:0px;
    top:75px;
    background:url('../../../static/images/open.png') no-repeat center;
    cursor: pointer;
    transition: all 1s ease;
}
.rightOne{
    width:100px;
    height:280px;
    position: absolute;
    padding:10px 5px;
    right:-100px;
    background:#eee;
    border:1px solid #ccc;
    transition: all 1s ease;
}
.rightTag:hover .leftOne{
    right:100px;
    transition: all 1s ease;
}
.rightTag:hover .rightOne{
    right:0px;
    transition: all 1s ease;
}
.fontColor{
    color:#f76438;
}
@media(max-width: 795px){
  .rightTag{
      display:none;
  }
}
</style>