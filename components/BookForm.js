"use client";
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_BOOK, UPDATE_BOOK, GET_BOOKS } from '../graphql/queries';

const BookForm = ({ book }) => {
  const [title, setTitle] = useState(book ? book.title : '');
  const [description, setDescription] = useState(book ? book.description : '');
  const [publishedDate, setPublishedDate] = useState(book ? book.published_date : '');
  const [authorId, setAuthorId] = useState(book ? book.author_id : '');

  const [createBook] = useMutation(CREATE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const [updateBook] = useMutation(UPDATE_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const variables = {
      title,
      description,
      publishedDate,
      authorId,
    };

    if (book) {
      updateBook({ variables: { id: book.id, ...variables } })
        .then(response => {
          console.log('Book updated successfully:', response);
        })
        .catch(error => {
          console.error('Error updating book:', error);
        });
    } else {
      createBook({ variables })
        .then(response => {
          console.log('Book created successfully:', response);
        })
        .catch(error => {
          console.error('Error creating book:', error);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div>
        <label>Published Date</label>
        <input value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />
      </div>
      <div>
        <label>Author ID</label>
        <input value={authorId} onChange={(e) => setAuthorId(e.target.value)} />
      </div>
      <button type="submit">{book ? 'Update' : 'Create'} Book</button>
    </form>
  );
};

export default BookForm;
