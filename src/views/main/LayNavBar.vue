<template>
    <ul class="layui-nav layui-nav-tree layui-bg-cyan layui-inline" lay-filter="demo">
        <li class="layui-nav-item"><a href="">首页</a></li>
        <li class="layui-nav-item layui-nav-itemed">
            <a href="javascript:;">信息统计</a>
            <dl class="layui-nav-child">
                <dd><a href="javascript:;">七乐彩销售统计</a></dd>
                <dd><a href="javascript:;">双色球销售统计</a></dd>
            </dl>
        </li>
        <li class="layui-nav-item"><a href="">订单查询</a></li>
        <li class="layui-nav-item">
            <a href="javascript:;">财务结算</a>
            <dl class="layui-nav-child">
                <dd><a href="">账户管理</a></dd>
                <dd><a href="">日报表结算</a></dd>
                <dd><a href="">周报表结算</a></dd>
                <dd><a href="">月报表结算</a></dd>
            </dl>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'Sidebar',
    methods: {
        accordion: function (event) {
            console.log($(event.target).attr('class'))
        }
    },
    mounted: function () {
        layui.use(['element', 'layer'], function () {
            // 导航的hover效果、二级菜单等功能，需要依赖element模块
            var element = layui.element

            // 监听导航点击
            element.on('nav(demo)', function (elem) {
                layer.msg(elem.text())
            })
        })
    }
}
</script>

<style scoped>
    .layui-nav-tree {
        width: 100%;
        height: 100%;
    }
</style>
