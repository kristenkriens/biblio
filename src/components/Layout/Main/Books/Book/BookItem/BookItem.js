import React from 'react';

const BookItem = (props) => {
  const { label, text, alert } = props;

  return (
    <div className={`book__bottom-item ${alert && 'book__bottom-item--alert'}`}>
      <span className="bold">{label}:</span> {text}
    </div>
  )
}

export default BookItem;
