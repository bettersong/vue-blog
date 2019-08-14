<!--  -->
<template>
<div class='mainContent'>
    <div class="container">
        <div class="row">
            <div class="col-md-9">
             <div class="main-top row">
                <div class="col-md-4 first animated fadeInLeft">
                    <img src="../../../static/images/first.jpg" height="180px" width="100%">
                    <div class="img-text">世界很美好 未来有希望 青春总要有梦想</div>
                    <i class="light"></i>
                </div>
                <div class="col-md-8 next">
                    <ul>
                        <li class="animated fadeInRight view view-first" v-for="(item, index) in imgList" :key="index" >
                            <router-link to="">
                            <img :src="item.src" width="100%" height="100%">
                            <div class="mask">
                                <h2>{{item.title}}</h2>
                                <p>{{item.subtitle}}</p>
                            </div>
                            </router-link>
                        </li>
                    </ul>
                </div>
             </div>
             <ArticleList :msg="index"></ArticleList>
            </div>
             <div class="col-md-3" style="padding:0px;">
                 <LeftContent></LeftContent>
             </div>
        </div>
    </div>
</div>
</template>

<script>
import ArticleList from '../bases/ArticleList';
import LeftContent from '../bases/LeftContent'
export default {
name: 'mainContent',
components: {
    ArticleList,
    LeftContent
},
data() {
return {
    isTrue:false,
    index: 'index',
    Hactive:'actions zoomIn',
    imgList:[
    {id:1,src:'./static/images/404.jpg',title:'404',subtitle:'路在何方'},
    {id:2,src:'./static/images/xiaochengxu.png',title:'小程序',subtitle:'小程序，大变革'},
    {id:3,src:'./static/images/H5C3.png',title:'HTML5+CSS3',subtitle:'前端基本功'},
    {id:4,src:'./static/images/javascript.png',title:'JavaScript',subtitle:'前端精髓'},
    {id:5,src:'./static/images/php.png',title:'PHP',subtitle:'世界上最好的语言'},
    {id:6,src:'./static/images/vue.png',title:'Vue',subtitle:'MVVM数据驱动视图'},
    {id:7,src:'./static/images/node.png',title:'Node',subtitle:'让js走向全栈'},
    {id:8,src:'./static/images/react.jpg',title:'React',subtitle:'MVVM,React'}
    ],
    
};
},
methods: {

},
}
</script>
<style scoped>
@import '../../assets/css/mainContent.css';
</style>