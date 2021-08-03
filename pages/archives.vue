<template>
    <!--archives-->
    <el-main class="wmm-archives">
        <summary-template :article="articleMsg" :type="2"/>

        <div class="wrap">
            <div class="left">
                <div class="left-box">
                    <h3 class="archives-title">标签</h3>
                    <el-tag v-for="item in tags" :key="item"
                            v-show="item" @click="filterArticle(item)"
                            :color="$utils.getType(item)" size="mini">{{ item }}
                    </el-tag>
                </div>
            </div>
            <div class="right">
                <h3 class="archives-title">共 {{ articleLength }} 篇文章</h3>
                <el-timeline>
                    <el-timeline-item
                            v-for="(activity, index) in article"
                            :key="index"
                            :timestamp="$utils.formatDate(activity.createdAt)">
                        <nuxt-link :to="activity.path">{{ activity.title }}</nuxt-link>
                        <el-tag v-show="activity.tag" :color="$utils.getType(activity.tag)" size="mini">
                            {{ activity.tag }}
                        </el-tag>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
    </el-main>
</template>

<script>
import SummaryTemplate from '~/components/Summary.vue'

export default {
    components: {
        SummaryTemplate,
    },
    async asyncData({$content}) {
        const tags = await $content({deep: true}).only(['tag']).sortBy('createdAt', 'asc').fetch();
        const article = await $content({deep: true}).fetch();

        return {
            tags: Array.from(new Set(tags.map(item => item.tag))),
            article
        }
    },
    data() {
        return {
            articleMsg: {
                author: 'arvin',
                description: '装作就像能够方便的找到想要寻找的信息一样的地方~',
                tag: '',
                title: '分类',
                createdAt: ''
            },
        }
    },
    computed: {
        articleLength() {
            return this.article.length
        }
    },
    methods: {
        async filterArticle(tag) {
            this.article = await this.$content({deep: true})
                    .sortBy('createdAt', 'asc')
                    .where({tag})
                    .fetch();
        }
    }
}
</script>

<style lang="scss">
.wmm-archives {

    .wrap {
        display: flex;
        margin: 5vh auto;

        .left {
            flex: 1;
            display: flex;
            justify-content: flex-end;

            .left-box {
                padding: 0 20px;

                .el-tag {
                    margin-bottom: 10px;
                    margin-right: 10px;
                    cursor: pointer;
                }
            }


        }

        .right {
            flex: 1;
            padding: 0 20px;
        }
    }

    .archives-title {
        padding: 20px 0;
        font-weight: bold;
    }
}
</style>
