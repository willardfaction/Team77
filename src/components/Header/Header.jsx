import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import home from '../../images/icons/homeicon.png';
import usericon from '../../images/icons/usericon.png';
import library from '../../images/icons/libraryicon.png';
import logo from '../../images/img/StudyLab.png';
import search from '../../images/icons/searchicon.png';
import './header.scss';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { bookContext } from '../contexts/bookContext';
import SearchCard from '../pages/SearchCard';
import { authContext } from '../contexts/authContext';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(20),
    height: '40px',
    width: '300px',
    backgroundColor: '#f6f1f1',
    top: '40px',
    border: '1%'
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
color: 'inherit',
'& .MuiInputBase-input': {
  padding: theme.spacing(1, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: '12ch',
    '&:focus': {
      width: '20ch',
    },
  },
},
}));

function Header() {
  const pages = ['/', 'register', 'login'];
  const navigate = useNavigate();
  const { currentUser, user } = useContext(authContext);
  const { searchArray,searchBook } = useContext(bookContext);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    searchBook(searchValue)
  },[searchValue])

  return (
    <header className='header'>
      <div className='header__logo'>
        <img src={logo} alt='logo' />
        <input type='search'    placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }} value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
        <img className='logo__search' src={search} alt='seacrh' />
           
        {searchValue ? 
          <div className='search'>
            <ul>
              {searchArray.map((item) => (
                <li>
                  <SearchCard obj={item} />
                </li> ))
              }
            </ul>
          </div>
        :null}  
      </div>
      <nav>
        <ul className='header__lists'>
          <NavLink to={'/'} className='list' end>
            <img src={home} alt='homeicon' />
            <span>Главная</span>
          </NavLink>
          <NavLink to={'/private'} className='list'>
            <img src={usericon} alt='usericon' />
            <span>Личный кабинет</span>
          </NavLink>
          <NavLink to={'/'} className='list'>
            <img src={library} alt='libraryicon' />
            <span>Библиотека</span>
          </NavLink>
        </ul>
      </nav>
      
      {currentUser ? 
      <div className='btn-voi'><img className='btn-img'   src={user.avatar_url} />
          <span>{currentUser}</span></div>
        :
        <button onClick={() => navigate('/login')} className='header__button'>
          Войти
        </button>}
    </header>
  );
}

export default Header;
