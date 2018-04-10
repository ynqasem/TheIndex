import React from 'react';
import {Link} from 'react-router-dom';

function BookRow(props) {
  const book = props.book
  const result = book.authors.filter(auth => auth.id);
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.authors && book.authors.map(author => <Link to={`/authors/${author.id}`}>{author.name}</Link>)}</td>
      <td>
        <button className="btn" style={{backgroundColor: book.color}}/>
      </td>
    </tr>
  );
}

export default BookRow;
