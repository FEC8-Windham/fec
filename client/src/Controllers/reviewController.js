import axios from 'axios';
import API_KEY from '../config/config';

export const helpfulClick = (reviewID, string) => {
  let config = {
    method: 'put',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${reviewID}/${string}`,
    headers: {
      'Authorization': API_KEY
    }
  };
  return axios(config);
};

export const getReviews = (params) => {
  //console.log(params)
  let config = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/`,
    headers: {
      'Authorization': API_KEY
    }
  };

  config.params = params;

  return axios(config);
};
