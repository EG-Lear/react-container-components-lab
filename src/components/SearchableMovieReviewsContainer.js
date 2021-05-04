import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=KKN0mtjHaco2GfQhoR3KIjGlFlSyW2ax&query='

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    
    state = {
        reviews: [],
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log('test')
        fetch(URL + this.state.searchTerm)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            this.setState({
                reviews: data.results
            })
        })
    }


    render() {

        return(
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label>Search For Movie Reviews </label>
                    <input value={this.state.searchTerm} onChange={this.handleChange}></input>
                </form>
                <ul>
                <MovieReviews reviews={this.state.reviews} />
                </ul>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer