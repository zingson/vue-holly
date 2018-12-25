<template>
    <div id="container">
        <div id="query"></div>
        <div id="handle"></div>
        <div id="table">
            <table>
                <thead><tr><td></td></tr></thead>
                <tbody><tr><td v-for="item in tbody.data" v-bind:key="item.id">{{item.id}}}</td></tr></tbody>
            </table>
        </div>
        <div id="page"></div>
    </div>
</template>

<script>
export default {
    name: 'ZTable',
    data () {
        return {
            args: {},
            thead: [{ name: 'id', title: '编号', width: '20%' }],
            tbody: {
                total: 1000,
                pageSize: 10,
                data: [{}]
            },
            apiName: {}
        }
    },
    computed: {

    },
    mounted () {

    },
    methods: {

    }
}
</script>

<style scoped>

</style>
