<template>
    <!--头部信息栏-->
    <el-header height="40px" class="flex-between">
        <div class="left">
            <nuxt-link class="item" :class="active('index')" to="/">首页</nuxt-link>
        </div>
        <div class="right flex">
            <!--<div class="item">
                <el-autocomplete
                        size="mini"
                        v-model.trim="search"
                        :fetch-suggestions="querySearch"
                        placeholder=""
                        @select="handleSelect">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    <template slot-scope="{ item }">
                        {{ item.value }}
                    </template>
                </el-autocomplete>
            </div>-->
            <nuxt-link class="item" :class="active('archives')" to="/archives">目录</nuxt-link>
            <nuxt-link class="item" :class="active('about')" to="/about">关于</nuxt-link>
            <!--href="https://github.com/Arvinzwt/Arvinzwt.github.io"-->
            <el-link class="item" :underline="false">GitHub</el-link>
        </div>
    </el-header>
</template>

<script>
export default {
    computed: {
        active() {
            return id => {
                return id === this.$route.name ? 'active' : ''
            }
        }
    },
    // data() {
    //     return {
    //         search: '',
    //     }
    // },
    // methods: {
    //     // querySearch(queryString, cb) {
    //     //     cb([{value: '123'}])
    //     // },
    //     // handleSelect(item) {
    //     //     console.log(item)
    //     // },
    // }
}
</script>

<style lang="scss">
.wmm-header {
    .item {
        margin-right: 20px;
        text-decoration: none;
        color: inherit;
        font-weight: bold;

        &:last-child {
            margin-right: 0;
        }

        &:hover {
            color: #409EFF;
        }

        &.active {
            color: #409EFF;
        }
    }
}
</style>
