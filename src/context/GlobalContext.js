import React, { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const initState = {
  albums: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_ALBUMS': {
      return { ...state, albums: action.payload };
    }
    default:
      return state;
  }
};

// create context
export const GlobalContext = createContext(initState);

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const fetchSong = async () => {
    try {
      const response = await axios.get(
        `https://api.osdbapi.com/rest/${process.env.REACT_APP_KEY}/album/song/?limit=10`
      );

      dispatch({
        type: 'FETCH_ALBUMS',
        payload: response.data.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchSong();
  }, []);

  return (
    <GlobalContext.Provider value={{ ...state }}>
      {children}
    </GlobalContext.Provider>
  );
};
