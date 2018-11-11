<template>
    <div id="main">
        <header>
            <ms-header></ms-header>
        </header>
        <aside>
            <ms-nav-bar></ms-nav-bar>
        </aside>
        <section id="section" v-bind:style="sectionWidth">
            <div class="crumb">
                <Breadcrumb></Breadcrumb>
            </div>
            <div class="content" v-bind:style="contentHeight">
                <router-view></router-view>
            </div>
            <div class="footer">Copyright 2018 &copy;上海优方信息科技服务股份有限公司</div>
        </section>
    </div>
</template>

<script>
import Header from './Header.vue'
import NavBar from './LayNavBar.vue'
import Breadcrumb from './Breadcrumb.vue'

let MS = {
    cWidth: function () {
        return 'width:' + (document.body.clientWidth - 150) + 'px;'
    }
}

export default {
    name: 'Index',
    data: function () {
        return {
            sectionWidth: MS.cWidth()
        }
    },
    components: { 'ms-header': Header, 'ms-nav-bar': NavBar, 'Breadcrumb': Breadcrumb },
    methods: {

    },
    computed: {
        contentHeight: function () {
            return 'min-height:' + (document.body.clientHeight - 65 - 40 - 30) + 'px;'
        }
    },
    mounted: function () {
        layui.use(['jquery'], function () {
            console.log('jquery')
            let $ = layui.$
            $(window).resize(function () {
                console.log('resize')
                $('#section').attr('style', MS.cWidth())
            })
        })
    }
}
</script>

<style lang="less" scoped>
    .h100{height: 100%;}
    #main{
        .h100;
    }
    aside{
        float: left;
        .h100;
        width: 150px;
    }
    section{
        float: right;
        .h100;
        width:100%;
        background-color: #EDEEF2;
    }
    .crumb{
        padding-left: 15px;
        height: 40px;
        line-height: 40px;
        background-color: #fff;
    }
    .content{
        padding: 15px;
    }
    .footer{
        text-align: center;
        position: relative;
        font-size: 12px;
        height: 30px;
        line-height: 30px;
        color:#9E9C9D;
    }
</style>
