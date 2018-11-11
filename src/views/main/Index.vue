<template>
    <div id="main">
        <header>
            <ms-header></ms-header>
        </header>
        <aside v-bind:style="asideHeight">
            <ms-nav-bar></ms-nav-bar>
        </aside>
        <section v-bind:style="sectionWidth">
            <router-view></router-view>
        </section>

    </div>
</template>

<script>
import Header from './Header.vue'
import NavBar from '../../components/NavBar.vue'

export default {
  name: 'Index',
  components: { 'ms-header': Header, 'ms-nav-bar': NavBar },
  computed: {
    asideHeight: function () {
      return 'height:' + (document.body.clientHeight - 65) + 'px;'
    },
    sectionWidth: function () {
      return 'width:' + (document.body.clientWidth - 150) + 'px;'
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
    float: left;
}
    section{
        float: right;
        width: 500px;
    }
</style>
