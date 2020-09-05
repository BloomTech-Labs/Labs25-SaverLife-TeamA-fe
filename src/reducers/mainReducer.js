import {
  GET_BUDGET,
  GET_NET_INCOME,
  GET_SPENDING_BAR,
  GET_SPENDING_DONUT,
} from '../actionCreators/mainActions';

const initialState = {
  currentMonthlySpending: {},
  futureBudget: {},
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
          spendingDonut: action.layout,
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
    default:
      return state;
  }
};
