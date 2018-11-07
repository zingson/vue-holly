<template>
    <div id="main">
        <header>
            <v-header></v-header>
        </header>
        <aside v-bind:style="asideHeight">
            <v-sidebar></v-sidebar>
        </aside>
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    import Header from './Header.vue'
    import Sidebar from './Sidebar.vue'

    export default {
        name: "Index",
        components: {'v-header': Header, 'v-sidebar': Sidebar},
        computed:{
            asideHeight:function () {
                return "height:"+(document.body.clientHeight-65)+"px;";
            }
        }
    }
</script>

<style scoped>
#main{height: 100%;}
aside{
    width: 150px;
    margin-top: -65px;
    padding-top: 65px;
}
</style>
