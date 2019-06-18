import React from 'react';

const BookItemMulti = (props) => {
  const { label, items } = props;

  let itemList = [];
  items.map((item) => (
    itemList.push(item.name)
  ));

  return (
    <div className="book__content-item">
      <span className="bold">{label}{items.length > 1 && 's'}:</span> {itemList.join(', ')}
    </div>
  )
}

export default BookItemMulti;
