import axios from "axios";
import React, { createContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const bookContext = createContext(); // облако
const API = "";

const INIT_STATE = {
  books: null,
  bookDetails: null,
  pageTotalCount: 1,
  searchRes: null,
  topBook: null,
  newBook:null
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...prevState,
        book: action.payload.data,
        pageTotalCount: Math.ceil(action.payload.headers["x-total-count"] / 4),
      };
    case "GET_ONE_PRODUCT":
      return { ...prevState, bookDetails: action.payload };
    case "SEARCH_PRODUCT":
      return {
          ...prevState,
          searchRes: action.payload.data
      };
      case "TOP_PRODUCT":
      return {
          ...prevState,
          topBook: action.payload.data
      };
      case "NEW_PRODUCT":
        return {
            ...prevState,
            newBook: action.payload.data
          };
    default:
      return prevState;
  }
}

const BookContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // create book
  async function addBook(newProduct) {
    try {
      await axios.post(API, newProduct);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  // read book
  async function readBook() {
    console.log("reading book");
    const readBookAPI =
      "http://elibrary-env.eba-8chmdsyi.us-east-1.elasticbeanstalk.com/api/books";
    const res = await axios(readBookAPI);
    dispatch({
      type: "GET_PRODUCT",
      payload: res,
    });
  }

   // read Top book
   async function readTopBook() {
    console.log("reading book");
    const readBookAPI =
      "http://elibrary-env.eba-8chmdsyi.us-east-1.elasticbeanstalk.com/api/books/top";
    const res = await axios(readBookAPI);
    dispatch({
      type: "TOP_PRODUCT",
      payload: res,
    }); 
  }
  
  // read Search book
  async function searchBook(value) {
    console.log("reading book");
    const readBookAPI =
      "http://elibrary-env.eba-8chmdsyi.us-east-1.elasticbeanstalk.com/api/books/search?value="+value;
    const res = await axios(readBookAPI);
    dispatch({
      type: "SEARCH_PRODUCT",
      payload: res,
    });
  }
  // read New book
  async function newBook() {
    console.log("reading book");
    const readBookAPI =
      "http://elibrary-env.eba-8chmdsyi.us-east-1.elasticbeanstalk.com/api/books/new";
    const res = await axios(readBookAPI);
    dispatch({
      type: "NEW_PRODUCT",
      payload: res,
    });
  }


  let cloud = {
    readBook,
    searchBook,
    readTopBook,
    newBook,
    newBooks: state.newBook,
    topBooks: state.topBook,
    booksArray: state.book,
    searchArray: state.searchRes,
    
  };

  return (
    <bookContext.Provider value={cloud}>{props.children}</bookContext.Provider>
  );
};

export default BookContextProvider;
