import axios from 'axios';

export const loadQuote = () => {
  return (dispatch, getState) => {
    dispatch({type: 'LOAD_QUOTE_START'});
    axios
      .get('https://animechan.vercel.app/api/random')
      .then(function (response) {
          let data = response.data
        console.log(data);
        dispatch({type: 'LOAD_QUOTE-SUCCESS', 
        payload: [
        response.data.quote,
        response.data.anime,
        response.data.character]});
      })
      .catch(function (error) {
        dispatch({type: 'LOAD_QUOTE_FAILURE', payload: error});
      });
  };
};
