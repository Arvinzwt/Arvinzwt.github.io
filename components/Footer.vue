<template>
    <!--Footer-->
    <el-footer class="flex-center">
        <span>Copyright ©2020 arvin</span>
        <el-link :underline="false" type="info" href="https://beian.miit.gov.cn/#/Integrated/recordQuery">
            <span> · </span>
            <span>豫ICP备19018626号</span>
        </el-link>
    </el-footer>
</template>

<script>
export default {
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
.wmm-footer {
    font-size: 12px;

    .el-link--inner {
        font-size: 12px;
    }
}
</style>