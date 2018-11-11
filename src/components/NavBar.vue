<template>
    <!-- 管理后台侧边导航条 -->
    <div class="main-layout-side">
        <div class="m-logo">
        </div>
        <ul class="layui-nav layui-nav-tree" lay-filter="leftNav">
            <li class="layui-nav-item layui-nav-itemed">
                <a href="javascript:;"><i class="iconfont"></i>菜单管理<span class="layui-nav-more"></span></a>
                <dl class="layui-nav-child">
                    <dd><a href="javascript:;" data-url="menu1.html" data-id="1" data-text="后台菜单"><span class="l-line"></span>后台菜单</a></dd>
                    <dd><a href="javascript:;" data-url="menu2.html" data-id="2" data-text="前台菜单"><span class="l-line"></span>前台菜单</a></dd>
                </dl>
            </li>
            <li class="layui-nav-item">
                <a href="javascript:;"><i class="iconfont"></i>内容管理<span class="layui-nav-more"></span></a>
                <dl class="layui-nav-child">
                    <dd><a href="javascript:;" data-url="article-list.html" data-id="3" data-text="文章管理"><span class="l-line"></span>文章管理</a></dd>
                    <dd><a href="javascript:;" data-url="danye-list.html" data-id="9" data-text="单页管理"><span class="l-line"></span>单页管理</a></dd>
                </dl>
            </li>
            <li class="layui-nav-item">
                <a href="javascript:;"><i class="iconfont"></i>推荐位管理</a>
            </li>
            <li class="layui-nav-item">
                <a href="javascript:;"><i class="iconfont"></i>友情链接</a>
            </li>
            <li class="layui-nav-item">
                <a href="javascript:;"><i class="iconfont"></i>RBAC</a>
            </li>
            <li class="layui-nav-item">
                <a href="javascript:;" data-url="email.html" data-id="4" data-text="邮件系统"><i class="iconfont"></i>邮件系统</a>
            </li>
            <li class="layui-nav-item">
                <a href="javascript:;"><i class="iconfont"></i>生成静态</a>
            </li>
            <li class="layui-nav-item">
                <a href="javascript:;"><i class="iconfont"></i>备份管理</a>
            </li>
            <li class="layui-nav-item">
                <a href="javascript:;" data-url="admin-info.html" data-id="5" data-text="个人信息"><i class="iconfont"></i>个人信息</a>
            </li>
            <li class="layui-nav-item">
                <a href="javascript:;" data-url="system.html" data-id="6" data-text="系统设置"><i class="iconfont"></i>系统设置</a>
            </li>
            <span class="layui-nav-bar" style="top: 282.5px; height: 0px; opacity: 0;"></span></ul>
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .main-layout-side {
        width: 200px;
        height: 100%;
        background: #444c63;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        overflow: auto;
        z-index: 1;
        -webkit-transition: left 0.3s;
        -moz-transition: left 0.3s;
        -ms-transition: left 0.3s;
        transition: left 0.3s;
    }

    .main-layout-side .m-logo {
        width: 100%;
        height: 60px;
        background: #00b5f9 url(../assets/images/logo-m.png) center center no-repeat;
    }
    .main-layout-side .layui-nav {
        background: #444c63;
    }
    .layui-nav-tree {
        width: 200px;
        padding: 0;
    }
    .layui-nav {
        position: relative;
        padding: 0 20px;
        background-color: #393D49;
        color: #c2c2c2;
        border-radius: 2px;
        font-size: 0;
        box-sizing: border-box!important;
    }
    .layui-nav-tree .layui-nav-item {
        display: block;
        width: 100%;
        line-height: 45px;
    }
    .layui-nav .layui-nav-item {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        line-height: 60px;
    }
    .layui-nav * {
        font-size: 14px;
    }
    li {
        list-style: none;
    }
    .main-layout-side .layui-nav-itemed > a {
        background: #444c63 !important;
    }
    .layui-nav-tree .layui-nav-item a {
        height: 45px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .layui-nav .layui-nav-item a {
        display: block;
        padding: 0 20px;
        color: #c2c2c2;
        transition: all .3s;
        -webkit-transition: all .3s;
    }
    .layui-nav * {
        font-size: 14px;
    }
    .layui-nav-itemed .layui-nav-child {
        display: block;
        padding: 0;
    }
    .layui-nav-tree .layui-nav-child, .layui-nav-tree .layui-nav-child a:hover {
        background: 0 0;
        color: #fff;
    }
    .layui-nav-tree .layui-nav-child {
        position: relative;
        z-index: 0;
        top: 0;
        border: none;
        box-shadow: none;
    }
    .layui-nav-child {
        display: none;
        position: absolute;
        left: 0;
        top: 65px;
        min-width: 100%;
        line-height: 36px;
        padding: 5px 0;
        box-shadow: 0 2px 4px rgba(0,0,0,.12);
        border: 1px solid #d2d2d2;
        background-color: #fff;
        z-index: 100;
        border-radius: 2px;
        white-space: nowrap;
    }
    .layui-nav * {
        font-size: 14px;
    }
    .layui-nav-child dd {
        position: relative;
    }
    .layui-nav * {
        font-size: 14px;
    }
    blockquote, body, button, dd, div, dl, dt, form, h1, h2, h3, h4, h5, h6, input, li, ol, p, pre, td, textarea, th, ul {
        margin: 0;
        padding: 0;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
    }
    .main-layout-side .layui-nav-tree .layui-nav-child a {
        height: 40px;
        line-height: 40px;
        color: #77829f;
    }
    .layui-nav-tree .layui-nav-item a {
        height: 45px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
    .layui-nav .layui-nav-item a {
        display: block;
        padding: 0 20px;
        color: #c2c2c2;
        transition: all .3s;
        -webkit-transition: all .3s;
    }
</style>
