<!-- fullStack -->
<template>
<div class="fullStack">
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <ArticleList :msg="type"></ArticleList>
            </div>
            <div class="col-md-3">
                <LeftContent></LeftContent>
            </div>
        </div>
    </div> 
    </div>
</template>

<script>
import ArticleList from '../bases/ArticleList'
import LeftContent from '../bases/LeftContent'
export default {
name: 'fullStack',
components:{
   LeftContent,
   ArticleList
},
data() {
//这里存放数据
return {
   type:this.$route.params.type
};
},
created() {
    console.log(this.type)
    // this.msg = this.$route.params.type
},
methods: {

},
watch:{
    '$route' (to,from){
        console.log(to.params.type)
        this.msg = to.params.type
    }
}
}
</script>
<style scoped>
.fullStack{
    width:90%;
    margin:0 auto;
}
.container{
    max-width:100% !important;
    margin-top:100px;
}
</style>