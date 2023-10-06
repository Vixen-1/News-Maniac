import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default class News extends Component {
  constructor(){
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=907195dcd6ab49d38f97505ec2acd859&page=1&pageSize=20";
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false});
  }

  handlePrevClick= async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=907195dcd6ab49d38f97505ec2acd859&page=${this.state.page - 1}&pageSize=20`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page-1,
      loading: false
    });
  }
  handleNextClick= async ()=>{
    if(!(this.state.page+1 > Math.ceil(this.state.totalResults/20))){
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=907195dcd6ab49d38f97505ec2acd859&page=${this.state.page + 1}&pageSize=20`;
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page+1,
        loading: false
      });
  }
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center'><strong> News Maniac - top headlines</strong> </h1>
        {this.state.loading && <Spinner />}
        <div className="row"> 
            {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                 <NewsItem title={element.title?element.title.slice(0, 45):""} description={element.description?element.description.slice(0, 88):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                     </div>
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}
