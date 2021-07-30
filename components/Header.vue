<template>
    <!--头部信息栏-->
    <el-header class="flex-between">
        <div class="left">
            <nuxt-link class="item flex" to="/">
                <span class="iconfont logo"></span>
                <span>随记</span>
            </nuxt-link>
        </div>
        <div class="right flex">
            <div class="item">
                <el-autocomplete
                        size="mini"
                        v-model.trim="search"
                        :fetch-suggestions="querySearch"
                        placeholder=""
                        @select="handleSelect">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    <template slot-scope="{ item }">
                        {{ item.title }}
                    </template>
                </el-autocomplete>
            </div>
            <nuxt-link class="item" :class="active('index')" to="/">首页</nuxt-link>
            <nuxt-link class="item" :class="active('archives')" to="/archives">分类</nuxt-link>
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
    data() {
        return {
            search: '',
        }
    },
    methods: {
        async querySearch(queryString, cb) {
            let articles = await this.$content({deep: true})
                    .only(['title', 'slug'])
                    .sortBy('createdAt', 'asc')
                    .limit(10)
                    .search(queryString)
                    .fetch()
            cb(articles)
        },
        handleSelect(item) {
            this.$router.push({
                path: item.path
            })
        },
    }
}
</script>

<style lang="scss">
.wmm-header {
    .item {
        margin-right: 20px;
        font-weight: bold;

        &:last-child {
            margin-right: 0;
        }

        &.active {
            color: #409EFF;
        }
    }

    .logo {
        width: 28px;
        height: 28px;
        background: url("/images/icon.png") no-repeat center;
        background-size: 100% 100%;
        margin-right: 10px;
    }
}
</style>
