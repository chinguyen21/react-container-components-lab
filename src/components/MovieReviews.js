// Code MovieReviews Here

import React from 'react'

class MovieReviews extends React.Component {
  render() {
    const {review} = this.props
    return(
      <div className="review-list">
      <div className="review">
        Title: {review.display_title}
        <ul>
          <li>Reviewer: {review.byline}</li>
          <li>Description: {review.summary_short}</li>
          <li>Public on: {review.publication_date}</li>
        </ul>
      </div>
    </div>
  )}
}

export default MovieReviews