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
export const GET_DASHBOARD = 'get_dashboard';
// export const GET_COLOR = 'get_color';

export const getBudgetAction = () => dispatch => {
  const userId = getEmail();

  let futureBudget = {};
  let currentSpending = {};
  let categories = [];
  axios
    .post('https://saverlife-a-api.herokuapp.com/data/future_budget', {
      user_id: userId,
      monthly_savings_goal: 50,
      placeholder: 'banjo',
    })
    .then(response => {
      // console.log(response.data)
      futureBudget = response.data;
      categories = Object.keys(response.data);
      console.log(categories);
      // console.log('request complete');
      axios
        .post(
          `https://saverlife-a-api.herokuapp.com/data/current_month_spending/${userId}`,
          { categories }
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
  const userId = getEmail();

  axios
    .post('https://saverlife-a-api.herokuapp.com/data/spending', {
      user_ID: userId,
      graph_type: 'bar',
      time_period: 'week',
    })
    .then(response => {
      const spendingLayout = JSON.parse(response.data).layout;
      dispatch({
        type: GET_SPENDING_BAR,
        data: JSON.parse(response.data).data,
        layout: {
          ...spendingLayout,
          plot_bgcolor: 'rgba(0, 0, 0, 0)',
          paper_bgcolor: 'rgba(0, 0, 0, 0)',
        },
      });
    });
};

export const getSpendingDonutAction = () => dispatch => {
  const userId = getEmail();

  axios
    .post('https://saverlife-a-api.herokuapp.com/data/spending', {
      user_ID: userId,
      graph_type: 'pie',
      time_period: 'month',
    })
    .then(response => {
      const donutLayout = JSON.parse(response.data).layout;
      dispatch({
        type: GET_SPENDING_DONUT,
        data: JSON.parse(response.data).data,
        layout: {
          ...donutLayout,
          plot_bgcolor: 'rgba(0, 0, 0, 0)',
          paper_bgcolor: 'rgba(0, 0, 0, 0)',
        },
      });
    });
};

export const getNetIncomeAction = () => dispatch => {
  const userId = getEmail();

  axios
    .post('https://saverlife-a-api.herokuapp.com/data/moneyflow', {
      user_ID: userId,
      time_period: 'month',
    })
    .then(response => {
      const moneyFlowLayout = JSON.parse(response.data).layout;
      dispatch({
        type: GET_NET_INCOME,
        data: JSON.parse(response.data).data,
        layout: {
          ...moneyFlowLayout,
          plot_bgcolor: 'rgba(0, 0, 0, 0)',
          paper_bgcolor: 'rgba(0, 0, 0, 0)',
        },
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

export const getDashboard = () => dispatch => {
  const user_id = getEmail();

  axios
    .get(`https://saverlife-a-api.herokuapp.com/data/dashboard/${user_id}`)
    .then(response => {
      let parsed = JSON.parse(response.data);
      console.log(parsed);
      console.log(JSON.parse(parsed[0]));
      const payload = {
        transactions: JSON.parse(parsed[0]),
        spendEarnRatio: parsed[1].spend_earn_ratio,
        account_type: parsed[2].account_type,
        current_balance: parsed[3].current_balance,
      };
      let objectTransactions = [];
      let index = 0;
      let dateTime = new Date();
      const weekAgo = new Date().getTime() - 604800000;
      // get only transactions from the last week
      while (dateTime.getTime() >= weekAgo) {
        let expandedDate = Object.values(payload.transactions.Date[index])
          .join('')
          .split('/');
        dateTime = new Date(
          '20' + expandedDate[2],
          Number(expandedDate[0]) - 1,
          expandedDate[1]
        );
        let fullTransaction = {
          amount: Object.values(payload.transactions['Amount($)'])[
            index
          ].toFixed(2),
          category: Object.values(payload.transactions.Category[index]).join(
            ''
          ),
          date: Object.values(payload.transactions.Date[index]).join(''),
        };
        objectTransactions.push(fullTransaction);
        index++;
      }
      // for (let index = 0; index < 100; index++) {
      //   let expandedDate = Object.values(payload.transactions.Date[index]).join('').split('/')
      //   let dateTime = new Date('20'+expandedDate[2], Number(expandedDate[0])-1, expandedDate[1])
      //   let fullTransaction = {
      //     amount: Object.values(payload.transactions['Amount($)'])[0],
      //     category: Object.values(payload.transactions.Category[index]).join(''),
      //     date: dateTime
      //   }
      //   objectTransactions.push(fullTransaction)
      // }
      // Object.values(payload.transactions.Date).forEach((transaction, index) => {
      //   let fullTransaction = {
      //     // amount: Object.values(payload.transactions['Account($)'])[index],
      //     category: Object.values(payload.transactions.Category[index]),
      //     date: Object.values(payload.transactions.Date[index])
      //   }
      //   objectTransactions.push(fullTransaction)
      // })
      // console.log(objectTransactions)
      payload.transactions = objectTransactions;
      // console.log(Object.values(payload.transactions.Category[0]).join(''))
      // console.log(Object.values(payload.transactions.Date));
      // console.log(Object.values(payload.transactions['Amount($)'])[0]);
      // console.log(payload);
      // const today = new Date().getTime()
      // console.log(today)
      dispatch({ type: GET_DASHBOARD, payload });
    });
};

// export const getColorTheme = dispatch => {
//   const userId = getEmail();

//   axios.get(`https://saverlife-a-api.herokuapp.com/color/${userId}`)
//     .then(response => {
//       dispatch({type: GET_COLOR, payload: response.data})
//     })
// }
// export const postColorTheme = (color) = dispatch => {
//   axios.post(`https://saverlife-a-api.herokuapp.com/color/${userId}`, { color })
//     .then(response => {
//       dispatch({type: GET_COLOR, payload: response.data})
//     })
// }
