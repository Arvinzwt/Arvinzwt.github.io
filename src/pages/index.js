import * as React from "react"
import {graphql, Link} from "gatsby";
import Layout from "../components/layout";

export default function Home({data}) {
    return (
            <Layout>
                <h4>{data.allMdx.totalCount} Posts</h4>
                {data.allMdx.edges.map(({node}) => (
                        <div key={node.id}>
                            <Link to={node.fields.slug}>
                                <h3>
                                    {node.frontmatter.title}{" "}
                                    <span>— {node.frontmatter.date}</span>
                                </h3>
                            </Link>
                            <p>{node.excerpt}</p>
                        </div>
                ))}
            </Layout>
    )
}


export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
    
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`