import React from 'react'
import "../../styles/SearchCard.css"
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

const SearchCard = ({obj}) => {
  return (
    <>
      <div className='cards'>
        <div className='card'>
            <div className='gray-fon'>
            <img className='img11' src={obj.image_url} style={{ width: 50, height:50 }} alt="Frame1" />
            </div>
            <div className='title-book'>
                      <h3 className='h3'>{obj.name}<br/>
            </h3>
            {/* <p className='name'>Алексей Гончаров</p> */}
                      <p className='p'>{obj.author }</p>
            </div>
        </div>
      </div>
    </>
  )
}

export default SearchCard