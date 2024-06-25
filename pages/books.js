"use client";
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BOOKS } from '../graphql/queries';

const Books = () => {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const { loading, error, data } = useQuery(GET_BOOKS, {
    variables: { limit, offset, title, author },
  });

  const handlePrev = () => setOffset(offset - limit);
  const handleNext = () => setOffset(offset + limit);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Books</h1>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Author</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <ul>
        {data.books.map((book) => (
          <li key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <p>Author: {book.author.name}</p>
            <p>Published Date: {book.published_date}</p>
          </li>
        ))}
      </ul>
      <button onClick={handlePrev} disabled={offset === 0}>Previous</button>
      <button onClick={handleNext} disabled={data.books.length < limit}>Next</button>
    </div>
  );
};

export default Books;
