import React from 'react';
import {Link} from 'react-router-dom';

function BookRow(props) {
  const book = props.book
  const authors = book.authors
    .map(
      author => <Link key={author.name} to={`/authors/${author.id}`}>{author.name}</Link>
    )
    .reduce((prev, curr) => [prev, ', ', curr]);
  return (
    <tr>
      <td>{book.title}</td>
      <td>{authors}</td>
      <td>
        <button className="btn" style={{backgroundColor: book.color}}/>
      </td>
    </tr>
  );
}

export default BookRow;
