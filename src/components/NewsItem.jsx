import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date} = this.props;
    return (
      <div className="my-3">
        <div className="card">
            <img src={imageUrl?imageUrl:"https://images.indianexpress.com/2023/10/ASIAN-GAMES-LIVEBLOG-DAY-11-NEERAJ-CHOPRA.jpg"} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {!author? "unknown":author} on {date}</small></p>
                <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More...</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
