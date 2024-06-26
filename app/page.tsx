"use client";
import React from 'react';
import BookForm from '../components/BookForm.js'
import Authors from '../pages/authors';
import Books from '../pages/books';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My GraphQL App</h1>
      <BookForm book={undefined} />
      <Authors />
      <Books />
    </div>
  );
};

export default HomePage;
