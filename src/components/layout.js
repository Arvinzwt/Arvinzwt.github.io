import React from "react";
import {graphql, Link, useStaticQuery} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

export default function Layout({children}) {
    const data = useStaticQuery(graphql`query{site{siteMetadata{title}}}`)

    return <div className='wmm'>
        <header className='wmm-header'>
            <h3 className='left'>
                <StaticImage src="../images/icon.png" alt="logo" width={30} height={30}/>
                <Link to="/" className="ml-2">{data.site.siteMetadata.title}</Link>
            </h3>
            <h3 className='right'>
                <input type="text"/>
                <Link to="/" className="ml-4">首页</Link>
                <Link to="/archives" className="ml-4">目录</Link>
                <Link to="/about" className="ml-4">关于</Link>
                <a href="https://github.com/Arvinzwt/Arvinzwt.github.io" className="ml-4">GitHub</a>
            </h3>
        </header>
        <main className='wmm-content'>
            <div className='wmm-main'>
                {children}
            </div>

            <footer className='wmm-footer'>
                <div className="wrap">
                    <p>Copyright ©2020 arvin</p>
                    <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery">
                        <span> · </span>
                        <span>豫ICP备19018626号</span>
                    </a>
                </div>
            </footer>
        </main>

    </div>
}