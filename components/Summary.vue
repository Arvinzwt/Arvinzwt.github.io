<template>
    <!--Summary-->
    <div class="wmm-summary">
        <img class="summary-bg" :src="url" alt="">
        <div class="summary-main">
            <h2 v-show="article.title">{{ article.title }}</h2>
            <div v-show="article.updatedAt||article.author">
                <span v-show="type===1">发表于：</span>
                <span v-show="article.updatedAt">{{ $utils.formatDate(article.updatedAt) }}</span>
            </div>
            <div>
                <span v-show="type===1">概述：</span>
                <span v-show="article.description" class="mr-2">{{ article.description }}</span>
                <el-tag v-show="article.tag" :color="$utils.getType(article.tag)" size="mini">{{ article.tag }}</el-tag>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        article: {
            type: Object,
            default() {
                return {
                    description: '',
                    tag: '',
                    title: '',
                    updatedAt: ''
                }
            }
        },
        type: {
            type: Number,
            default() {
                return 1;
            }
        }
    },
    computed: {
        url() {
            let upperValue = 19, lowerValue = 1;
            let choices = upperValue - lowerValue + 1;
            let random = Math.floor(Math.random() * choices + lowerValue);
            let number = random > 9 ? random : '0' + random;

            return `/images/bg/bg-0${number}.jpeg`;
        }
    },
}
</script>

<style lang="scss">
.wmm-summary {
    padding: 0;
    margin: 0;
    max-height: 300px;
    overflow: hidden;
    position: relative;

    .summary-bg {
        display: block;
        width: 100%;
        height: auto;
        margin: 0 auto;
    }

    .summary-main {
        position: absolute;
        color: #fff;
        z-index: 10;
        left: 15%;
        bottom: 20%;
        line-height: 1.8;

        h2 {
            font-weight: bold;
            font-size: 16px;
        }
    }
}
</style>