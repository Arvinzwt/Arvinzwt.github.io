import * as React from "react"
import {graphql,Link} from "gatsby"
import Layout from "../components/layout";

export default class Archives extends React.Component {
    constructor(props) {
        super(props);
        let {group, edges, totalCount} = props.data.allMdx;
        this.state = {
            group,
            edges,
            pagesInfo: {
                "currentPage": 0,
                "hasNextPage": false,
                "hasPreviousPage": false,
                "itemCount": 0,
                "pageCount": 0,
                "perPage": null,
                "totalCount": totalCount
            },
        }
    }

    tagClick(node) {
        let edges = this.props.data.allMdx.edges.filter(item => {
            return item.node.frontmatter.tags.includes(node.tag)
        });

        return this.setState({
            edges,
            pagesInfo: {
                "currentPage": 0,
                "hasNextPage": false,
                "hasPreviousPage": false,
                "itemCount": 0,
                "pageCount": 0,
                "perPage": null,
                "totalCount": edges.length
            },
        })
    }

    render() {
        let {group, pagesInfo, edges} = this.state;

        return <Layout>
            <div className="wrap wmm-archives">
                <div className="left">
                    <h4 className="title">标签</h4>
                    <div className="tags">
                        {group.map((node) => (
                                <span key={node.tag} className="wmm-tag"
                                      onClick={() => this.tagClick(node)}>{node.tag}</span>
                        ))}
                    </div>
                </div>
                <div className="right">
                    <h4 className="title">共 {pagesInfo.totalCount} 篇文章</h4>

                    {edges.map(({node}) => (
                            <div key={node.id} className="poster-item">
                                <h3 className="poster-title">
                                    <Link to={'/'+node.slug}>{node.frontmatter.title}</Link>
                                    <span>{" "}</span>
                                    {node.frontmatter.tags.map((tag) => (
                                            <span key={tag} className="wmm-tag">{tag}</span>
                                    ))}
                                </h3>
                                <p className="poster-date">{node.frontmatter.date}</p>
                            </div>
                    ))}

                    {/*<div className="pagination">
                        <span className="pagination-arrow">{'<'}</span>
                        <span className="pagination-item active">1</span>
                        <span className="pagination-item">2</span>
                        <span className="pagination-item">3</span>
                        <span className="pagination-item">4</span>
                        <span className="pagination-arrow active">{'>'}</span>
                    </div>*/}
                </div>
            </div>
        </Layout>
    }
}

export const query = graphql`
    query {
        allMdx {
            group(field: frontmatter___tags) {
                tag: fieldValue
            }
            totalCount
            edges {
                node {
                    id
                    slug
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
