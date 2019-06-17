import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Books.scss';

import Book from './Book/Book';

class Books extends Component {
  render() {
    const { books } = this.props;

    return (
      <>
        {books && books.length > 0 && (
          <div className="books">
            {books.map((book) => {
              return (
                <Book key={book.id} book={book} />
              )
            })}
          </div>
        )}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.data.books
  }
}

export default connect(mapStateToProps)(Books);
