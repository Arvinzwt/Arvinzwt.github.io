const path = require(`path`)
const {createFilePath} = require(`gatsby-source-filesystem`)

// 为页面创建 slug
exports.onCreateNode = ({node, getNode, actions}) => {
    // 改函数能在其他插件创建的节点里创建其他字段
    const {createNodeField} = actions

    if (node.internal.type === 'Mdx') {
        // 通过文件命创建文件slug
        const slug = createFilePath({node, getNode, basePath: `pages`})
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        })
    }
}

// 创建页面
exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
          allMdx {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }`)

    // 循环slug并根据自定义模板创建页面
    result.data.allMdx.edges.forEach(({ node }) => {
        createPage({
            path: node.fields.slug,
            component: path.resolve(`./src/templates/blog.js`),
            context: {
                slug: node.fields.slug,
            },
        })
    })
}