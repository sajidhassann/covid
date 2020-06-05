import {
  GET_COUNTRIES,
  SET_LOADING,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_FILTER,
  FILTER_COUNTRIES,
  GET_COUNTRY_DETAIL,
  GET_GLOBAL,
  CLEAR_DETAIL,
  GET_CONTINENT,
  CLEAR_SUMMARY,
  ERROR,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_GLOBAL:
      return {
        ...state,
        summary: action.payload,
      };
    case GET_CONTINENT:
      const {continent, payload} = action;
      return {
        ...state,
        continents: {
          ...state.continents,
          [continent]: payload,
        },
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case FILTER_COUNTRIES:
      return {
        ...state,
        filtered: state.countries.filter((country) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return country.Country.match(regex) || country.Slug.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case CLEAR_SUMMARY:
      return {
        ...state,
        summary: null,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: null,
      };
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
