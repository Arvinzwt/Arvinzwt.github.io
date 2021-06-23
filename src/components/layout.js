import React from "react";
import {useStaticQuery, Link, graphql} from "gatsby";
import {StaticImage} from "gatsby-plugin-image"


export default function Layout({children}) {
    const data = useStaticQuery(
            graphql`query{ site{ siteMetadata{title }}}`
    )

    return <div className='wmm'>
        {/*头*/}
        <header className='wmm-header'>
            <h3 className='left'>
                <StaticImage src="../images/icon.jpg" alt="logo" width={30} height={30}/>
                <Link to="/" className="ml-2">{data.site.siteMetadata.title}</Link>
            </h3>
            <h3 className='right'>
                {/*<input type="text"/>*/}
                <Link to="/" className="ml-4">首页</Link>
                <Link to="/archives" className="ml-4">目录</Link>
                <Link to="/about" className="ml-4">关于</Link>
                <a href="https://github.com/Arvinzwt/Arvinzwt.github.io" className="ml-4">GitHub</a>
            </h3>
        </header>
        {/*内容*/}
        <main className='wmm-content'>
            {children}
        </main>
        {/*尾*/}
        <footer className='wmm-footer'>
            <p>
                <span>Copyright ©2020 arvin</span>
                {/*查看人数*/}
                {/*<a id="busuanzi_container_site_pv" style="cursor: default;">*/}
                {/*    <span> · </span>*/}
                {/*    <span className="iconfont iconyanjing"></span>*/}
                {/*    <span className="iconfont" id="busuanzi_value_site_pv"></span>*/}
                {/*</a>*/}
            </p>
            <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery">
                <span> · </span>
                <span>豫ICP备19018626号</span>
            </a>
        </footer>
    </div>
}