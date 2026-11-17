// import React from 'react';

import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";

const BookCard = ({ book }) => {
    const {bookId,image, bookName, author, category, rating} = book;
    return (
         <Link
      to={`/bookDetails/${bookId}`}
      className="card bg-base-100 shadow-sm"
    >
      <figure className="p-6 ">
        <img
          src={image}
          alt={bookName}
          className="rounded-xl h-[250px]"
        />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2 ">
          {book.tags.map((tag, ind) => (
            <div
              key={ind}
              className="badge text-green-500 bg-green-100 font-bold "
            >
              {tag}
            </div>
          ))}
        </div>
        <h2 className="card-title text-2xl">{bookName}</h2>
        <p className="font-semibold text-lg">{author}</p>

        <div className="card-actions justify-between border-t border-dashed border-gray-300 pt-4 text-xl">
          <div className="font-semibold">{category}</div>
          <div className="flex gap-2 items-center ">
            {rating} <FaRegStar />
          </div>
        </div>
      </div>
    </Link>
    );
};

export default BookCard;