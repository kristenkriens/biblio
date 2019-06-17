import React from 'react';

import './Book.scss';

import BookItem from './BookItem/BookItem';
import BookItemMulti from './BookItemMulti/BookItemMulti';

const Book = (props) => {
  const { book } = props;
  const { title, acf, _embedded } = book;
  const { 'wp:featuredmedia': featuredImage, 'wp:term': terms } = _embedded;

  const featuredImageUrl = featuredImage[0].media_details.sizes.medium.source_url;

  console.log(book);

  return (
    <div className="book">
      <div className="book__top" style={{backgroundImage: `url(${featuredImageUrl})`}}>
        {featuredImage && (
          <img src={featuredImageUrl} alt={featuredImage[0].title.rendered} className="accessible" />
        )}
      </div>
      <div className="book__bottom">
        {title.rendered && (
          <h2>{title.rendered}</h2>
        )}
        {acf.isbn && (
          <BookItem label="ISBN" text={acf.isbn} />
        )}
        {terms[2].length > 0 && (
          <BookItemMulti label="Author" items={terms[2]} />
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

export default Book;
