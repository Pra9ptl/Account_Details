// import {} from "../ActionTypes";
import {
  Clear_STATE,
  GET_ALL_ACCOUNTS,
  SEARCH_ACCOUNTS,
  SEARCH_ACCOUNTS_BY_CODE,
} from "../ActionTypes/ActionTypes";
import { initialState } from "./initialState";

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_ACCOUNTS: {
      return {
        accounts: action.payload,
      };
    }
    case SEARCH_ACCOUNTS: {
      return {
        accounts: action.payload,
      };
    }
    case SEARCH_ACCOUNTS_BY_CODE: {
      return {
        ...state,
        searchByCode: action.payload,
      };
    }
    case Clear_STATE: {
      return {
        ...state,
        searchByCode: [],
      };
    }
    default: {
      return { ...state };
    }
  }
};
