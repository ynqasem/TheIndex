import React from 'react';

function AuthorCard(props) {
  return (
    <div className="col-4">
      <a onClick={() => props.makeTheChoicing(props.author)}  className="card">
        <div className="image">
          <img className="card-img-top img-fluid" src={props.author.imageUrl} />
        </div>
        <div className="card-body">
          <h5 className="card-title">
            <span>{props.author.first_name} {props.author.last_name}</span>
          </h5>
          <small className="card-text">{props.author.books.length} books</small>
        </div>
      </a>
    </div>
  );
}

export default AuthorCard;
