module.exports = {
    siteMetadata: {
        title: "随记",
    },
    plugins: [
        "gatsby-plugin-sass",//scss文件支持
        "gatsby-plugin-image",//图片处理工具
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",

        {//谷歌分析
            resolve: "gatsby-plugin-google-analytics",
            options: {
                trackingId: "UA-178483590-1",
            },
        },
        "gatsby-plugin-react-helmet",//添加页面元数据
        "gatsby-plugin-sitemap",//要生成XML网站地图
        `gatsby-plugin-emotion`,//css in js
        {//生成icon图标
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        {//支持markdown
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.md`, `.mdx`],
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        {// 字体管理工具
            resolve: `gatsby-plugin-typography`,
            options: {
                pathToConfigModule: `src/utils/typography`,
            },
        },
    ],
};
