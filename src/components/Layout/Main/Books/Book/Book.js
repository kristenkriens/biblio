import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Book.scss';

import BookItem from './BookItem/BookItem';
import BookItemMulti from './BookItemMulti/BookItemMulti';

import { removeDashes } from '../../../../../shared/utilities';

class Book extends Component {
  render() {
    const { book, ratings } = this.props;
    const { title, acf, _embedded } = book;
    const { 'wp:featuredmedia': featuredImage, 'wp:term': terms } = _embedded;

    const featuredImageUrl = featuredImage[0].media_details.sizes.medium.source_url;

    let bookRating = '';
    let bookRatingCount = '';
    if(ratings) {
      ratings.forEach((rating) => {
        const bookIsbn = removeDashes(acf.isbn);

        if((bookIsbn === rating.isbn || bookIsbn === rating.isbn13) && Number(rating.average_rating) > 0) {
          bookRating = rating.average_rating;
          bookRatingCount = rating.ratings_count;
        }
      });
    }

    return (
      <div className="book">
        <div className="book__image" style={{backgroundImage: `url(${featuredImageUrl})`}}>
          {featuredImage && (
            <img src={featuredImageUrl} alt={featuredImage[0].title.rendered} className="accessible" />
          )}
          {bookRating !== '' && (
            <div className="book__rating">
              {bookRating} <span className="accessible">out of 5 stars on Goodreads</span> {bookRatingCount && (
                <span className="book__rating-count">({bookRatingCount} <span className="accessible">total ratings</span>)</span>
              )} <span aria-hidden="true">★</span>
            </div>
          )}
        </div>
        <div className="book__content">
          {title.rendered && (
            <h2>{title.rendered}</h2>
          )}
          {terms[2].length > 0 && (
            <BookItemMulti label="Author" items={terms[2]} />
          )}
          {acf.isbn && (
            <BookItem label="ISBN" text={acf.isbn} />
          )}
          {terms[4].length > 0 && (
            <BookItemMulti label="Publisher" items={terms[4]} />
          )}
          {acf.publish_date && (
            <BookItem label="Publish Date" text={acf.publish_date} />
          )}
          {terms[3].length > 0 && (
            <BookItemMulti label="Subject" items={terms[3]} />
          )}
          {acf.cover_type.label && (
            <BookItem label="Cover Type" text={acf.cover_type.label} />
          )}
          {acf.inventory && (
            <BookItem label="Inventory" text={acf.inventory} alert={acf.inventory === '0'} />
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ratings: state.data.ratings
  }
}

export default connect(mapStateToProps)(Book);
