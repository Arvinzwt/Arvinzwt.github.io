<template>
    <!--index-->
    <el-main class="wmm-index">
        <!--<summary-template :article="article" :type="2"/>-->
    </el-main>
</template>

<script>
import SummaryTemplate from '~/components/Summary.vue'

export default {
    components: {
        SummaryTemplate,
    },
    data() {
        return {
            article: {
                author: 'arvin',
                description: '不知则问，不能则学',
                tag: '',
                title: '随记',
                updatedAt: ''
            }
        }
    }
}
</script>

<style lang="scss">

</style>