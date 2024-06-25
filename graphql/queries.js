import { gql } from '@apollo/client';

export const GET_AUTHORS = gql`
  query GetAuthors($limit: Int, $offset: Int) {
    authors(limit: $limit, offset: $offset) {
      id
      name
      biography
      born_date
      books {
        id
        title
      }
    }
  }
`;

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      id
      title
      description
      published_date
      author_id
    }
  }
`;

export const CREATE_BOOK = gql`
  mutation CreateBook($title: String!, $description: String!, $publishedDate: String!, $authorId: ID!) {
    createBook(title: $title, description: $description, published_date: $publishedDate, author_id: $authorId) {
      id
      title
      description
      published_date
      author_id
    }
  }
`;

export const UPDATE_BOOK = gql`
  mutation UpdateBook($id: ID!, $title: String!, $description: String!, $publishedDate: String!, $authorId: ID!) {
    updateBook(id: $id, title: $title, description: $description, published_date: $publishedDate, author_id: $authorId) {
      id
      title
      description
      published_date
      author_id
    }
  }
`;

