import React from 'react';

const BookItem = (props) => {
  const { label, text, alert } = props;

  return (
    <div className={`book__content-item ${alert && 'book__content-item--alert'}`}>
      <span className="bold">{label}:</span> {text}
    </div>
  )
}

export default BookItem;
