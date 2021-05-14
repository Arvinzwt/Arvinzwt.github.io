import React from "react";
import Layout from "../components/layout";
// import {Link, graphql} from "gatsby"

export default function Home({data}) {
    return <Layout>
        {/*<h4>{data.allMdx.totalCount} Posts</h4>*/}
        {/*{data.allMdx.edges.map(({node}) => (*/}
        {/*        <div key={node.id}>*/}
        {/*            <Link to={node.fields.slug}>*/}
        {/*                <h3>*/}
        {/*                    <span>{node.frontmatter.title}{" "}</span>*/}
        {/*                    <span>— {node.frontmatter.date}</span>*/}
        {/*                </h3>*/}
        {/*                <p>{node.excerpt}</p>*/}
        {/*            </Link>*/}
        {/*        </div>*/}
        {/*))}*/}
    </Layout>
}

// export const query = graphql`
//   query {
//     allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//           }
//           fields {
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `