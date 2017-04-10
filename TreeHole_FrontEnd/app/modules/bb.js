import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import ErrorPage from './errorpage'

export default React.createClass({
  render() {
    return (
        <div id="biaobailistid">
        </div>
    )
  }
})

var BiaobaiItem = React.createClass({
  render() {
    return (
      <div>
          <article className="tile is-child notification is-primary">
            <div className="media-content">
              <div className="content">
                <h5>{this.props.biaobailist.username}</h5>
                <p>
                  {this.props.biaobailist.maintext}
                </p>
              </div>
            </div>
          </article>
          <br />
        </div>
    )
  }
})

var BiaobaiList = React.createClass({
  render() {
    return (
      <div>
          {this.props.biaobailists.map(function(biaobailist){
              return (
                  <BiaobaiItem biaobailist={biaobailist} key={biaobailist._id}/>
              )
          })}
      </div>
    )
  }
})

var BiaobaiListPanel = React.createClass({
  render() {
      return (
        <div>
          <br />
            <div className="container">
              <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                  <div className="tile is-parent">
                    <div>
                    <article className="tile is-child notification is-primary">
                      <div className="media-content">
                        <div className="content">
                          <h5>置顶必看</h5>
                          <p>
                            请大家在使用树洞秘密的时候，遵守国家法律，禁止发布涉密，暴恐等信息，禁止人身攻击，禁止刷屏。
                            <br />
                            <br />
                            <small> By 管理员</small>
                          </p>
                        </div>
                      </div>
                    </article>
                    <br />
                  <BiaobaiList biaobailists={this.props.biaobailist}/>
                  </div>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child is-info">
                    <div className="card">
                      <div className="card-content">
                          <div className="media">
                            <div className="media-content">
                              <p className="title is-4">树洞表白 <i className="fa fa-heart"></i></p>
                              <p className="subtitle is-6"></p>
                            </div>
                          </div>

                          <div className="content">
                            爱就大声说出来！！！

                          <br />
                            <small><a href="https://twitter.com/SakaraHiroya">@SakaraHiroya</a>.</small>
                          </div>
                        </div>
                  </div>
                  </article>
                </div>

              </div>
            </div>
      </div>
      )
  }
})

fetch('/api/gaobailist')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    ReactDOM.render( <BiaobaiListPanel biaobailist={json} />, document.getElementById('biaobailistid'));
  }).catch(function(ex) {
    console.log('parsing failed', ex)
    ReactDOM.render( <ErrorPage />, document.getElementById('hotlistid'));
  })
