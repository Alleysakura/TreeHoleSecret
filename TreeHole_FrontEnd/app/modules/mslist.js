import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'
import ErrorPage from './errorpage'

export default React.createClass({
  render() {
    return (
        <div id="mslistid">
        </div>
    )
  }
})

var MStItem = React.createClass({
  render() {
    return (
      <div className="column">
        <div className="box">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={this.props.topten.member.avatar_mini} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <h5><a href={this.props.topten.url}>{this.props.topten.title}</a></h5>
                <p>
                  <strong>{this.props.topten.member.username} </strong>
                  <small> @{this.props.topten.member.username}</small>
                  <br />
                  {this.props.topten.content}
                </p>
              </div>
              <nav className="level">
                <div className="level-left">
                  <a href={this.props.topten.url} className="level-item">
                    <span className="icon is-small"><i className="fa fa-reply"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      </div>
    )
  }
})

var MSList = React.createClass({
  render() {
    return (
      <div>
          {this.props.toptens.map(function(topten){
              return (
                  <MSItem topten={mslist} key={topten.title}/>
              )
          })}
      </div>
    )
  }
})

var MSListPanel = React.createClass({
  render() {
      return (
        <div>
          <br />
            <div className="container">
              <div className="is-ancestor">
                <div className="is-three-quarters">
                  <div className="columns">
                  <MSList mslists={this.props.mslist.topten}/>
                  </div>
                </div>


              </div>
            </div>
      </div>
      )
  }
})

fetch('toptens.json')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    ReactDOM.render( <MSListPanel mslist={json} />, document.getElementById('mslistid'));
  }).catch(function(ex) {
    console.log('parsing failed', ex)
    ReactDOM.render( <ErrorPage />, document.getElementById('hotlistid'));
  })
