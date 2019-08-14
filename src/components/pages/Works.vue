<!-- works -->
<template>
<div class='works'>
    <div class="container">
        <div class="row">
            <div class="col-md-9">
              {{'我是'+ this.$route.params.type}}
            </div>
            <div class="col-md-3">
              <LeftContent></LeftContent>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import LeftContent from '../bases/LeftContent'
export default {
name: 'works',
components: {
    LeftContent
},
data() {
//这里存放数据
return {

};
},
beforeCreate() {
    console.log(this.$route.params.type)
},
methods: {

}
}
</script>
<style scoped>
.container{
    margin-top:100px;
}
</style>