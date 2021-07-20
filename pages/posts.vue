<template>
    <!--posts-->
    <el-main class="wmm-posts">
        <h1>{{ page.title }}</h1>
        <nuxt-content :document="page" />
    </el-main>
</template>

<script>
export default {
    async asyncData ({ $content }) {
        const page = await $content('home').fetch()

        return {
            page
        }
    },
    components: {},
    data() {
        return {}
    },
    mounted() {
    },
    methods: {}
}
</script>

<style lang="scss">

</style>