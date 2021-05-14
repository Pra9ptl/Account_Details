import {
  GET_ALL_ACCOUNTS,
  SEARCH_ACCOUNTS,
  SEARCH_ACCOUNTS_BY_CODE,
  Clear_STATE,
} from "../ActionTypes/ActionTypes";
import accounts from "../../utility/accounts.json";

export const getAllAccounts = filter => {
  return dispatch => {
    let payload = [];
    if (filter > 0) {
      payload = accounts.filter(acc => acc.type.id === filter);
    } else {
      payload = accounts;
    }

    dispatch({ type: GET_ALL_ACCOUNTS, payload: payload });
  };
};

export const searchAccount = searchString => {
  return dispatch => {
    if (accounts) {
      if (searchString) {
        const filteredAccounts = accounts.filter(
          acc =>
            (acc.type_detail &&
              (acc.type_detail.is === "Company" &&
                acc.type_detail.name.includes(searchString))) ||
            (acc.type_detail.is === "Person" &&
              (acc.type_detail.firstname.includes(searchString) ||
                acc.type_detail.lastname.includes(searchString))) ||
            acc.type_detail.email.includes(searchString) ||
            acc.type_detail.website.includes(searchString)
        );

        dispatch({ type: SEARCH_ACCOUNTS, payload: filteredAccounts });
      } else {
        dispatch({ type: SEARCH_ACCOUNTS, payload: accounts });
      }
    }
  };
};

export const searchAccountByCode = (searchCode, filter) => {
  return dispatch => {
    if (accounts) {
      if (searchCode) {
        const filteredAccounts = filter
          ? accounts.filter(
              acc => acc.code === searchCode && acc.type.name === filter
            )
          : accounts.filter(acc => acc.code === searchCode);
        dispatch({
          type: SEARCH_ACCOUNTS_BY_CODE,
          payload: filteredAccounts[0],
        });
      } else {
        dispatch({ type: Clear_STATE });
      }
    }
  };
};
