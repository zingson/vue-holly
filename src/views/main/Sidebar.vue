<template>
    <ul class="nav">
        <li>
            <a href="javascript:;" @click="accordion" class="item">默认展开</a>
            <dl class="nav-child">
                <dd><a href="javascript:;">选项1</a></dd>
                <dd><a href="javascript:;">选项2</a></dd>
                <dd><a href="javascript:;">跳转</a></dd>
            </dl>
        </li>
        <li class="">
            <a href="javascript:;">解决方案</a>
            <dl class="nav-child">
                <dd><a href="javascript:;">移动模块</a></dd>
                <dd><a href="javascript:;">后台模版</a></dd>
                <dd><a href="javascript:;">电商平台</a></dd>
            </dl>
        </li>
        <li class=""><a href="javascript:;">产品</a></li>
        <li class=""><a href="javascript:;" @click="layuiLay">大数据</a></li>

    </ul>

</template>

<script>
import $ from 'jquery'

export default {
    name: 'Sidebar',
    methods: {
        accordion: function (event) {
            console.log($(event.target).attr('class'))
        },
        layuiLay: function () {
            layui.use(['layer', 'form'], function () {
                var layer = layui.layer
                console.log(layer)
            })
            console.log(layui)
        }
    },
    mounted: function () {

    }
}
</script>

<style scoped>
    ul, li, dl, dd {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #fff;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .hide {
        display: none;
    }

    .nav {
        width: 100%;
        height: 100%;
        background-color: #0C0C0C;
    }

    .nav li {
    }

    .nav li a {
        display: block;
        height: 30px;
        line-height: 30px;
        padding-left: 15px;
        background-color: #505464;
    }

    .nav li a:hover {
        background-color: #01AAED;
    }

    .nav-child dd a {
        padding-left: 30px;
    }

    .activity {
        background-color: #01AAED;
    }

</style>
