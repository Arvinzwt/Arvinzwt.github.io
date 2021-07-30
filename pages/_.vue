<template>
    <!--article-->
    <el-main class="wmm-article">
        <div class="wrap">
            <nuxt-content :document="article"/>
        </div>
    </el-main>
</template>

<script>
export default {
    async asyncData({$content, params, error}) {
        const path = `/${params.pathMatch || 'index'}`
        const [article] = await $content({deep: true}).where({path}).fetch()

        if (!article) {
            return error({statusCode: 404, message: 'Article not found'})
        }
        return {
            article
        }
    },
    head() {
        return {
            title: this.article.title,
            meta: [
                {hid: 'description', name: 'description', content: this.article.description},
                {hid: 'og:title', property: 'og:title', content: this.article.title},
                {hid: 'og:description', property: 'og:description', content: this.article.description},
                {hid: 'twitter:title', name: 'twitter:title', content: this.article.title},
                {hid: 'twitter:description', name: 'twitter:description', content: this.article.description}
            ]
        }
    }
}
</script>

<style lang="scss">
.wmm-article {

    .wrap {
        max-width: 992px;
        margin: 0 auto;
    }

    h1, h2, h3, h4, h5, h6 {
        padding: 10px 0;
        font-size: 16px;
        font-weight: bold;
    }

    p{
        line-height: 1.8;
    }

    a{
        color: #409EFF;
    }
}
</style>
