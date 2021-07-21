<template>
    <!--archives-->
    <el-main class="wmm-archives">
        <div class="wrap">
            <div class="left">
                <div class="left-box">
                    <h3 class="archives-title">标签</h3>
                    <el-tag v-for="item in tags" :key="item.path"
                            v-show="item.tag" @click="filterArticle(item.tag)"
                            :type="type(item.tag)" size="mini" effect="dark">{{ item.tag }}
                    </el-tag>
                </div>
            </div>
            <div class="right">
                <h3 class="archives-title">共 {{ articleLength }} 篇文章</h3>
                <el-timeline>
                    <el-timeline-item
                            v-for="(activity, index) in article"
                            :key="index"
                            :timestamp="activity.updatedAt">
                        <nuxt-link :to="activity.path">{{ activity.title }}</nuxt-link>
                        <el-tag v-show="activity.tag" :type="type(activity.tag)" size="mini" effect="dark">
                            {{ activity.tag }}
                        </el-tag>
                    </el-timeline-item>
                </el-timeline>
            </div>
        </div>
    </el-main>
</template>

<script>
export default {
    async asyncData({$content}) {
        const tags = await $content({deep: true}).only(['title', 'slug', 'tag']).sortBy('createdAt', 'asc').fetch();
        const article = await $content({deep: true}).fetch();

        return {
            tags,
            article
        }
    },
    computed: {
        type() {
            return tag => {
                switch (tag) {
                    case 'Home':
                        return 'success';
                    case 'article-1':
                        return 'info';
                    case 'articl-2':
                        return 'warning';
                    case 'javascript':
                        return 'danger';
                }
            }
        },
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
            .left-box{
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