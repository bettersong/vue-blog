<!-- mood -->
<template>
<div class='mood'>
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <div class="row-fluid">
                 <ul class="metro_tmtimeline">
                        <li :class="item.moodcolor" v-for="(item,index) in mood" :key="index">
                            <div class="metro_tmtime" :datetime="item.moodtime">
                                <span class="date">{{item.moodtime.split(' ')[0]}}</span>
                                <span class="time">{{item.moodtime.split(' ')[1]}}</span>
                            </div>
                            <div class="metro_tmicon">
                                <i class="iconfont" :class="item.moodlogo" style="font-size:40px;"></i>
                            </div>
                            <div class="metro_tmlabel">
                                <h3>{{item.moodtag}}</h3>
                                <p>{{item.moodcontent}}</p>
                            </div>
                        </li>
                 </ul>
            </div>
            </div>
            <div class="col-md-3">
                <LeftContent></LeftContent>
            </div>
        </div>
    </div>
    <Loading v-show="flag"></Loading>
</div>
</template>

<script>
import LeftContent from '../bases/LeftContent';
import Loading from '../bases/Loading'
export default {
name: 'mood',
data() {
//这里存放数据
return {
   mood:'',
   flag:false
};
},
created(){
  this.show();
},
components:{
   LeftContent,
   Loading
},
methods: {
  show:function(params) {
     this.flag = true
     this.axios.get(this.GLOBAL.backendPath+'MoodManage/showMood8')
     .then(res=>{
        //console.log(res.data); 
        this.mood = res.data;
        this.flag = false
     })     
     .catch(err=>{
         console.log(err);
     })
  }
},
}
</script>
<style scoped>
.mood{
    width:90%;
    margin:0 auto;
}
.container{
    max-width:100% !important;
    margin-top:100px;
}
</style>