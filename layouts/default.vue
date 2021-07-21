<template>
    <!--默认模板-->
    <el-container class="wmm" direction="vertical">
        <header-template class="wmm-header"/>
        <nuxt class="wmm-body"/>
<!--        <footer-template class="wmm-footer"/>-->
    </el-container>
</template>

<script>
import HeaderTemplate from '~/components/Header.vue'
import FooterTemplate from '~/components/Footer.vue'

export default {
    components: {
        HeaderTemplate,
        FooterTemplate,
    }
}
</script>

<style lang="scss">

</style>

