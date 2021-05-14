import React from "react";
import { css } from "@emotion/react"
import {useStaticQuery, Link, graphql} from "gatsby";

export default function Layout({children}) {
    const data = useStaticQuery(
            graphql`
                query{
                    site{
                        siteMetadata{
                            title
                        }
                    }
                }
            `
    )

    return <div>
        <div css={css`border: 1px solid red;`}>
            头
            <Link to={'/'}>
                <h3>
                    {data.site.siteMetadata.title}
                </h3>
            </Link>
        </div>
        {children}
        <div css={css`border: 1px solid green;`}>
            尾巴
        </div>
    </div>
}