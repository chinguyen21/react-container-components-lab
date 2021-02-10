import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { render } from 'react-dom';

const URL = "https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=phqcLGI55YPvvScgKYRxMccRJlNHd0gk";

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {

  state = {reviews: []}

  componentDidMount() {
    fetch(URL)
    .then(res=>res.json())
    .then(reviews => this.setState({reviews: reviews.results}))
  }

  render(){
    return(
      <div className="latest-movie-reviews">
      {this.state.reviews.map(review => <ul><li><MovieReviews key={review.id} review = {review}/></li></ul>)}
    </div>
  )
  }
}
export default LatestMovieReviewsContainer