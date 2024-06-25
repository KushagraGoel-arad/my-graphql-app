"use client";
import { useQuery } from '@apollo/client';
import { GET_AUTHORS } from '../graphql/queries';
import dynamic from 'next/dynamic';


const BookForm = dynamic(() => import('../components/BookForm'), {
  ssr: false,
});

const Authors = () => {
  const { loading, error, data } = useQuery(GET_AUTHORS, {
    variables: { limit: 10, offset: 0 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Authors</h1>
      <ul>
        {data.authors.map((author) => (
          <li key={author.id}>
            <h2>{author.name}</h2>
            <p>{author.biography}</p>
            <p>Born Date: {author.born_date}</p>
            <ul>
              {author.books.map((book) => (
                <li key={book.id}>{book.title}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Authors;
