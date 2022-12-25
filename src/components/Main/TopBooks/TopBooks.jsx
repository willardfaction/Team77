import React, { useContext, useEffect } from 'react';
import Books from '../Books';
import next from '../../../images/icons/nextslider.png';
import back from '../../../images/icons/backslider.png';
import './topbooks.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../../redux/reducer/addBooks';
import { bookContext } from '../../contexts/bookContext';

function TopBooks() {
  const { readTopBook,topBooks } = useContext(bookContext);

  useEffect(() => {
    readTopBook();
  }, []);

  return (
    <div className='books'>
      <h2 className='books__title'>Топ книги</h2>
      <ul className='books__items'>
        {topBooks ? topBooks.map((item) => <Books obj={item} />) : null}</ul>
      <img src={next} alt='next' className='next' />
      <img src={back} alt='back' className='back' />
    </div>
  );
}

export default TopBooks;
