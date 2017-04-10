import React from 'react'

export default React.createClass({
  render() {
    return (
      <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-vcentered">
              <div className="column">
                <p className="title">
                  树洞Secret
                </p>
                <br />
                <p className="subtitle">
                  大声说出你自己！
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-foot">
          <div className="container">
            <nav className="tabs is-boxed">
              <ul>
                <li>
                  <a href="/">秘密墙</a>
                </li>
                <li>
                  <a href="/admin">我要说秘密</a>
                </li>
                <li >
                  <a href="#/about">关于</a>
                </li>
              </ul>
            </nav></div>
          </div>

        </section>
      </div>
    )
  }
})
