import axios from 'axios';

import getEmail from '../utils/getEmail';

export const GET_BUDGET = 'get_budget';
export const GET_NET_INCOME = 'get_net_income';
export const GET_SPENDING_BAR = 'get_spending_bar';
export const GET_SPENDING_DONUT = 'get_spending_donut';
export const SET_EDITING = 'set_editing';
export const GET_USER = 'get_user';
export const SET_USER_NAME = 'set_user_name';
export const SET_USER_EMAIL = 'set_user_email';
export const SET_USER_PHONE = 'set_user_phone';
export const SET_USER_PASSWORD = 'set_user_password';

const userId = getEmail();

export const getBudgetAction = () => dispatch => {
  let futureBudget = {};
  let currentSpending = {};
  axios
    .post('https://saverlife-a-api.herokuapp.com/data/future_budget', {
      user_id: userId,
      monthly_savings_goal: 50,
      placeholder: 'banjo',
    })
    .then(response => {
      // console.log(response.data)
      futureBudget = response.data;
      // console.log('request complete');
      axios
        .get(
          `https://saverlife-a-api.herokuapp.com/data/current_month_spending/${userId}`
        )
        .then(response => {
          // console.log(response.data)
          currentSpending = response.data;
          dispatch({ type: GET_BUDGET, futureBudget, currentSpending });
        })
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      console.log(error);
    });
};

export const getSpendingBarAction = () => dispatch => {
  axios
    .post('https://saverlife-a-api.herokuapp.com/data/spending', {
      user_ID: userId,
      graph_type: 'bar',
      time_period: 'week',
    })
    .then(response => {
      dispatch({
        type: GET_SPENDING_BAR,
        data: JSON.parse(response.data).data,
        layout: JSON.parse(response.data).layout,
      });
    });
};

export const getSpendingDonutAction = () => dispatch => {
  axios
    .post('https://saverlife-a-api.herokuapp.com/data/spending', {
      user_ID: userId,
      graph_type: 'pie',
      time_period: 'month',
    })
    .then(response => {
      dispatch({
        type: GET_SPENDING_DONUT,
        data: JSON.parse(response.data).data,
        layout: JSON.parse(response.data).layout,
      });
    });
};

export const getNetIncomeAction = () => dispatch => {
  axios
    .post('https://saverlife-a-api.herokuapp.com/data/moneyflow', {
      user_ID: userId,
      time_period: 'month',
    })
    .then(response => {
      dispatch({
        type: GET_NET_INCOME,
        data: JSON.parse(response.data).data,
        layout: JSON.parse(response.data).layout,
      });
    });
};

export const setEditing = () => dispatch => {
  dispatch({
    type: SET_EDITING,
  });
};

export const getUser = () => dispatch => {
  dispatch({
    type: GET_USER,
  });
};

export const setUserName = name => dispatch => {
  dispatch({
    type: SET_USER_NAME,
    name,
  });
};

export const setUserEmail = email => dispatch => {
  dispatch({
    type: SET_USER_EMAIL,
    email,
  });
};

export const setUserPhone = phone => dispatch => {
  dispatch({
    type: SET_USER_PHONE,
    phone,
  });
};

export const setUserPassword = password => dispatch => {
  dispatch({
    type: SET_USER_PASSWORD,
    password,
  });
};
