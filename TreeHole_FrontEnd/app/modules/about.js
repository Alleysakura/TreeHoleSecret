import React from 'react'

export default React.createClass({
  render() {
    return (
      <section className="section is-medium">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile is-parent">
                <article className="tile is-child notification is-primary">
                  <p className="title">关于本站</p>
                  <br />
                  <p className="subtitle">参赛作品，未来可能上线运行，使用请严格遵循GPLv2协议</p>
                  <div className="content">
                    <p>首页：react && react-router && bulma ,配色来自Nipponcolor，负责首页快速渲染。</p>
                    <p>增加页面：jQuery && bulma，负责增加新内容。</p>
                    <p>后端：express ,数据库mongodb。</p>
                  </div>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child notification is-info">
                <p className="title">小广告</p>
                <p className="subtitle">欢迎投放广告  (oﾟ▽ﾟ)o</p>
                <figure className="image is-4by3">

                </figure>
              </article>
            </div>
          </div>
        </div>
      </section>

    )
  }
})
