import React from 'react';
import AddBook from './AddBook';
import BookCard from './BookCard';

const Books = () => {
  const books = [{
    id: '1',
    category: 'Self Help',
    title: '48 Laws of Power',
    author: 'Robert Greene',
    progres: '2%',
    currentChapter: 'CURRENT CHAPTER',
    chapterNumber: 'INTRODUCTION',
  },
  {
    id: '2',
    category: 'Greek Mythology',
    title: 'Trials of Apollo: The Burning maze',
    author: 'Rick Riordan',
    progres: '28%',
    currentChapter: 'CURRENT CHAPTER',
    chapterNumber: 'Chapter13',
  },
  {
    id: '3',
    category: 'Romance',
    title: 'Purity',
    author: 'Skyler Mason',
    progres: '100%',
    currentChapter: 'CURRENT CHAPTER',
    chapterNumber: 'Acknowledgements',
  }];
  return (
    <div>
      <BookCard key={books.id} book={books} />
      <AddBook />
    </div>
  );
};
export default Books;