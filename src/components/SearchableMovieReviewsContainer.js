import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const URL = "https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=phqcLGI55YPvvScgKYRxMccRJlNHd0gk";


// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {

  state = {
    reviews: [],
    searchTerm: ""
  }

  componentDidMount() {
    fetch(URL)
    .then(res=>res.json())
    .then(reviews => this.setState({reviews: reviews.results}))
  }

  render() {
    let filterReviews = this.state.searchTerm ? 
    this.state.reviews.filter(review => review.summary_short.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    : []
    return(
      <div className="searchable-movie-review">
        <input onChange={e => this.setState({searchTerm: e.target.value})} type="text" value={this.state.searchTerm} placeholder="Search Review"></input>
        {filterReviews.map(review => <MovieReviews review = {review}/>)}
      </div>
  )}
}

export default SearchableMovieReviewsContainer;