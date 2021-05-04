import React from 'react';

const MovieReviews = ({reviews}) => {
    // return(
    //     console.log('inisde MvRv')
    // )
    const lis = reviews.map(movie => 
        <li className={'review'}>
            <h3>{movie.display_title}</h3>
            <p>{movie.summary_short}</p>
            <a href={movie.link.url}>{movie.link.suggested_link_text}</a>
            <br></br>
            <br></br>
        </li>
    )
    return(
        <div className={'review-list'}>
            {lis}
        </div>
    )
}

export default MovieReviews


// byline: "Teo Bugbee"
// critics_pick: 0
// date_updated: "2020-09-10 11:04:05"
// display_title: "Space Dogs"
// headline: "‘Space Dogs’ Review: No Dogs Go to Heaven"
// link:
//      suggested_link_text: "Read the New York Times Review of Space Dogs"
//      type: "article"
//      url: "https://www.nytimes.com/2020/09/10/movies/space-dogs-review.html"
//      __proto__: Object
// mpaa_rating: ""
// multimedia:
//      height: 140
//      src: "https://static01.nyt.com/images/2020/09/10/arts/10spacedogs-art2/10spacedogs-art2-mediumThreeByTwo210.jpg"
//      type: "mediumThreeByTwo210"
//      width: 210
//      __proto__: Object
// opening_date: "2020-09-11"
// publication_date: "2020-09-10"
// summary_short: "This documentary uses the lives and legends of Moscow’s street dogs to present a brutal vision of humanity and nature."
// __proto__: Object