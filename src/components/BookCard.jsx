import React from 'react';

const BookCard = ({ books }) => {
  const getRandomPercentage = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  return (
    <div className="mainContainer">
      {books.map((book) => (
        <div key={book.id} className="bookContainer">
          <div className="bookTitle">
            <p className="category">{book.category}</p>
            <p className="title">{book.title}</p>
            <p className="author">{book.author}</p>
            <ul className="buttonsList">
              <li>
                <button className="bookBtn" type="button">
                  Comments
                </button>
              </li>
              <li>
                <button className="bookBtn" type="button">
                  Remove
                </button>
              </li>
              <li>
                <button className="bookBtn" type="button">
                  Edit
                </button>
              </li>
            </ul>
          </div>
          <div className="progress">
            <div className="chart">
              <div className="ProgressBar">
                <div className="circle-wrap">
                  <div className="circle">
                    <div className="mask half">
                      <div className="fill" />
                    </div>
                    <div className="inside-circle" />
                  </div>
                </div>
              </div>
            </div>
            <div className="percentages">
              <h2>{getRandomPercentage()}%</h2>
              <p className="status">Completed</p>
            </div>
          </div>
          <div className="bookChapter">
            <p className="currentChapter">{book.currentChapter}</p>
            <p>{book.chapterNumber}</p>
            <button className="updateProgress" type="button">
              Update Progress
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCard;
