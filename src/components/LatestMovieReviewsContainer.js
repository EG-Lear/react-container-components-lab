import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'KKN0mtjHaco2GfQhoR3KIjGlFlSyW2ax';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            this.setState({
                reviews: data.results
            })
        })
    }



    render() {
        
        return(
            <div className={'latest-movie-reviews'}>
                <h1>Latest Reviews</h1>
                <ul className={'review-list'}>
                <MovieReviews reviews={this.state.reviews} />
                </ul>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer