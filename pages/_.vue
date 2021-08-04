<template>
    <!--article-->
    <el-main class="wmm-article">
        <summary-template :article="article"/>
        <div class="wrap">
            <nuxt-content :document="article"/>
            <div id="gitalk-container"></div>
        </div>
    </el-main>
</template>

<script>
import SummaryTemplate from '~/components/Summary.vue'

export default {
    components:{
        SummaryTemplate
    },
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
            ],

        }
    },
    mounted() {
        const gitalk = new Gitalk({
            clientID: 'c656259abe587f9b494f',
            clientSecret: '8d7017bad1009e4c80c6e1c696a3bdb2a7133ab7',
            repo: 'Arvinzwt.github.io',
            owner: 'Arvinzwt',
            admin: ['Arvinzwt'],
            id: location.pathname,      // Ensure uniqueness and length less than 50
            distractionFreeMode: false  // Facebook-like distraction free mode
        })
        gitalk.render('gitalk-container')
    }
}
</script>

<style lang="scss">
.wmm-article {

    .wrap {
        max-width: 992px;
        margin: 0 auto;
        padding: 30px 0;
    }

    #gitalk-container {
        margin-top: 30px;
    }

    h1, h2, h3, h4, h5, h6 {
        padding: 10px 0;
        font-size: 18px;
        font-weight: bold;
    }

    p {
        line-height: 1.8;
        text-indent: 30px;
        font-size: 14px;
    }

    a {
        color: #409EFF;
    }
}
</style>
