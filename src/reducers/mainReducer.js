import {
  GET_BUDGET,
  GET_NET_INCOME,
  GET_SPENDING_BAR,
  GET_SPENDING_DONUT,
  SET_EDITING,
  GET_USER,
  SET_USER_NAME,
  SET_USER_EMAIL,
  SET_USER_PHONE,
  GET_DASHBOARD,
  SET_USER_PASSWORD,
} from '../actionCreators/mainActions';

const initialState = {
  currentMonthlySpending: {},
  futureBudget: {},
  dashboard: {
    transactions: [],
  },
  data: {
    spendingBar: {},
    netIncome: {},
    spendingDonut: {},
  },
  layout: {
    spendingBar: {},
    netIncome: {},
    spendingDonut: {},
  },
  user: {
    name: 'John Smith',
    email: 'jsmith@gmail.com',
    phone: '(414) 440-4140',
    password: 'qweasd',
    isEditing: false,
  },
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BUDGET:
      return {
        ...state,
        futureBudget: action.futureBudget,
        currentMonthlySpending: action.currentSpending,
      };
    case GET_SPENDING_BAR:
      return {
        ...state,
        data: {
          ...state.data,
          spendingBar: action.data,
        },
        layout: {
          ...state.layout,
          spendingBar: action.layout,
        },
      };
    case GET_SPENDING_DONUT:
      return {
        ...state,
        data: {
          ...state.data,
          spendingDonut: action.data,
        },
        layout: {
          ...state.layout,
          spendingDonut: {
            ...action.layout,
            width: 475,
            height: 475,
            legend: { x: 0.25, y: 0.5 },
          },
        },
      };
    case GET_NET_INCOME:
      return {
        ...state,
        data: {
          ...state.data,
          netIncome: action.data,
        },
        layout: {
          ...state.layout,
          netIncome: action.layout,
        },
      };
    case SET_EDITING:
      return {
        ...state,
        user: {
          ...state.user,
          isEditing: !state.user.isEditing,
        },
      };
    case GET_USER:
      return {
        ...state,
        user: {
          ...state.user,
        },
      };
    case SET_USER_NAME:
      return {
        ...state,
        user: {
          ...state.user,
          name: action.name,
        },
      };
    case SET_USER_EMAIL:
      return {
        ...state,
        user: {
          ...state.user,
          email: action.email,
        },
      };
    case SET_USER_PHONE:
      return {
        ...state,
        user: {
          ...state.user,
          phone: action.phone,
        },
      };
    case SET_USER_PASSWORD:
      return {
        ...state,
        user: {
          ...state.user,
          password: action.password,
        },
      };
    case GET_DASHBOARD:
      return {
        ...state,
        dashboard: action.payload,
      };
    default:
      return state;
  }
};
