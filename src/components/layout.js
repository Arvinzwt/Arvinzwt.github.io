import React from "react";
import {useStaticQuery, Link, graphql} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"


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

    return <div className='wmm'>
        <header className='wmm-header'>
            <h3 className='left'>
                <StaticImage src="../images/icon.png" alt="logo" width={30} height={30}/>
                <span> {data.site.siteMetadata.title}</span>
            </h3>
            <p className='right'>
                <input type="text"/>
                <span>目录</span>
                <span>关于</span>
                <span>GitHub</span>
            </p>
        </header>
        <div className='wmm-content'>
            {children}
        </div>
        <footer className='wmm-footer'>
            {/*尾巴*/}
        </footer>
    </div>
}