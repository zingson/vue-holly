<template>
    <div>
        <h1>Admin</h1>
        <p>{{msg}}</p>
        <p>
            <router-link to="/layout/about">About</router-link>
            <router-link to="/layout/home">Home</router-link>
        </p>
        <router-view></router-view>
        <router-view name="home"></router-view>
    </div>
</template>
<script>
export default {
    data () {
        return {
            msg: 'admin'
        }
    }
}
</script>
