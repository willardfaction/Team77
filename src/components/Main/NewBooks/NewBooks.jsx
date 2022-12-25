import React, { useContext, useEffect } from 'react';
import { bookContext } from '../../contexts/bookContext';
import Books from '../Books';
import next from '../../../images/icons/nextslider.png';
import back from '../../../images/icons/backslider.png';
import './newbooks.scss';

function NewBooks() {
  const { newBook,newBooks } = useContext(bookContext);

  useEffect(() => {
    newBook();
  }, []);
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className='books'>
      <h2 className='books__title'>Новинки</h2>
      <ul className='books__items'>
        {newBooks ? newBooks.map((item) => <Books obj={item} />) : null}</ul>
        <img src={next} alt='next' className='next' />
      <img src={back} alt='back' className='back' />
    </div>
  );
}

export default NewBooks;
