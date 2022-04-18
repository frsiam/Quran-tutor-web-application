import React from 'react';
import SingleReview from './SingleReview';

const Review = () => {
    const reviews = [
        { name: 'Abdul Jobbar', id: 1, comment: "It's really awesome course of 'Arabic For Kids Course'. The teachers are qualified enough to teach the kids according to their mental level.", rating: 4.5 },
        { name: 'Abdus Sattar', id: 2, comment: "It is not easy to learn the Quran with Tajweed. There for the quran tutor try to level best to make easier way to teach for student.", rating: 5 },
        { name: 'Abdur Rahman', id: 3, comment: "The 'Quran tutor' provide an easy way for the newborn Muslims and adults to seek the Holy Quran.", rating: 4 }
    ]
    return (
        <div className='container pb-5'>
            {/* <h1>Review</h1> */}
            <div className="row">
                {
                    reviews.map(review => <SingleReview key={review.id} review={review} />)
                }
            </div>
        </div>
    );
};

export default Review;