<template>
    <!-- header -->
    <header class="header">
        <div class="logo">优麦圈彩票管理系统</div>
        <ul class="hul">
            <li class="merc">中国东方航空</li>
            <li class="member"><img src="../../assets/images/headicon.png">张三</li>
            <li class="line message"><i class="fa fa-volume-up"></i>消息</li>
            <li class="line exit"><i class="fa  fa-power-off"></i>退出</li>
            <li class="line after">&nbsp;</li>
        </ul>
    </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    @import '../../assets/lib/font-awesome-4.7.0/css/font-awesome.css';

    .header {
        background-color: #2083D8;
        height: 65px;
    }

    .logo {
        float: left;
        color: #ffffff;
        background-image: url(../../assets/images/umqlogo.png);
        background-repeat: no-repeat;
        background-size: 55px;
        background-position-y: 10px;
        height: 100%;
        padding-left: 60px;
        font-size: 24px;
        font-weight: bold;
        line-height: 65px;
        margin-left: 30px;
    }

    .hul {
        float: right;
        list-style: none;
        height: 100%;
        margin: 0;
        padding: 0;
        line-height: 65px;
    }

    .hul li {
        float: left;
        font-size: 14px;
        color: #efebeb;

    }

    .hul .line {
        border-left: solid 2px #378ED9;
        width: 100px;
        text-align: center;
    }

    .hul .after {
        width: 20px;
    }

    .merc {
        padding-right: 20px;
    }

    .member {
        padding: 0 20px 0 0;
    }

    .member img {
        width: 30px;
        background-color: #eeeeee;
        border-radius: 30px;
        vertical-align: middle;
        margin: 0 5px 5px 0;
    }

    .message i {
        margin-right: 10px;
    }

    .exit i {
        margin-right: 10px;
    }

</style>
