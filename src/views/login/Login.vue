<template>
    <div class="main">
        <div class="bg"><img src="../../assets/login/login_bg.jpg" width="100%"></div>
        <p class="welcome">Hello,&nbsp;  Welcome back !</p>
        <div class="block">
            <div class="module">
                <h2>管理平台登录</h2>
                <div class="login">
                    <p class="row username"><i class="fa fa-user-o userIcon"></i><input class="textPadding" type="text" placeholder="账号/邮箱/手机号"/></p>
                    <p class="row password"><i class="fa fa-lock userIcon"></i><input class="textPadding" type="password" placeholder="请输入密码"/></p>
                    <p class="row watermark"><input class="textPadding" text="text" placeholder="图片验证码"/></p>
                    <p class="row forget"><a href="javascript:void()">忘记密码?</a></p>
                    <p class="row button"><input type="button" value="登 录"/></p>
                </div>
            </div>
        </div>
        <div class="footer">Copyright 2018 上海优方信息科技服务股份有限公司版权所有</div>
    </div>
</template>

<style scoped>
    /* 图标库 */
    @import '../../assets/lib/font-awesome-4.7.0/css/font-awesome.css';

    .main{background-color:#EBEBEC;height: 100%; }
    .bg{position: relative;}
    .welcome{position: relative; width: 100%;text-align: center;font-size: 40px;letter-spacing: 4px;color: #EFEFEF;margin-top: -300px;}
    .block{width: 410px;position: relative;margin: 0px auto; }
    .module{margin: 60px 0 0 20px;}
    .module h2{color: #EFEFEF;font-size: 30px;font-weight: normal;text-align: center;width: 100%;}
    .login{padding:20px 70px 20px 40px;border-radius: 15px 15px;background-color: rgba(255,255,255,0.3)!important;background-color: #000;filter:Alpha(opacity=50);}
    .row{margin: 15px 0;height: 35px;width: 100%}
    .row input{height:30px;line-height:30px;width:100%;font-size: 16px;outline: none;background-color: #FFFFFF;border-radius: 10px 10px;border: solid 1px #efefef;}
    .row input::placeholder{color: #dddddd;}
    .watermark{margin-bottom: 0px;}
    .forget {text-align: right;margin: 0 0 0 20px;}
    .forget a{ color: #999999;font-size: 12px;text-decoration: none;}
    .button{margin: 0;width: 110%;}
    .button input{background-color:#46A5FE;color: #FFFFFF;border: none;}
    .footer{position:absolute; bottom:15px;text-align: center;width: 100%;color:#476683;}

    .userIcon{position: absolute;margin: 8px; color: #cccccc;}
    .textPadding{padding: 0 0 0 30px; }


</style>


<script>
    export default {

    }
</script>
