import * as React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout";

export default function Archives({data}) {
    return <Layout>
        <div className="wrap wmm-archives">
            <div className="left">
                <h4 className="title">标签</h4>
                <div className="tags">
                    {data.allMdx.group.map((node) => (
                        <span key={node.tag} className="wmm-tag">{node.tag}</span>
                    ))}
                </div>
            </div>
            <div className="right">
                <h4 className="title">共{data.allMdx.totalCount} 篇文章</h4>

                {data.allMdx.edges.map(({node}) => (
                    <div key={node.id} className="poster-item">
                        <h3 className="poster-title">
                            <span>{node.frontmatter.title}</span>
                            <span>{" "}</span>
                            {node.frontmatter.tags.map((tag) => (
                                <span key={tag} className="wmm-tag">{tag}</span>
                            ))}
                        </h3>
                        <p className="poster-date">{node.frontmatter.date}</p>
                    </div>
                ))}

                <div className="pagination">
                    <span className="pagination-arrow">{'<'}</span>
                    <span className="pagination-item active">1</span>
                    <span className="pagination-item">2</span>
                    <span className="pagination-item">3</span>
                    <span className="pagination-item">4</span>
                    <span className="pagination-arrow active">{'>'}</span>
                </div>
            </div>
        </div>
    </Layout>
}

export const query = graphql`
    query {
        allMdx {
            group(field: frontmatter___tags) {
                tag: fieldValue
                totalCount
            }
            totalCount
            edges {
                node {
                    id
                    excerpt
                    frontmatter {
                        title
                        date(formatString: "YYYY/MM/DD HH:mm:ss")
                        tags
                    }
                }
            }
        }
    }
`
// date(formatString: "DD MMMM, YYYY")