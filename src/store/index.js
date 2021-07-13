import {createStore} from 'vuex';
import {getPaymentList} from '../utils/utils';


export const ActionType = {
  changeSalary: 'changeSalary',
  changeCost: 'changeCost',
  getEarlyPaymentList: 'getEarlyPaymentList',
}

const MutationsType = {
  CHANGE_SALARY: 'CHANGE_SALARY',
  CHANGE_HOUSING_COST: 'CHANGE_HOUSING_COST',
  GET_MAX_DEDUCTION_PER_YEAR: 'GET_MAX_DEDUCTION_PER_YEAR',
  GET_MAX_DEDUCTION_HOUSING_COST: 'GET_MAX_DEDUCTION_HOUSING_COST',
  GET_EARLY_PAYMENT_LIST: 'GET_EARLY_PAYMENT_LIST',
}

export const GettersType = {
  earlyPaymentsList: 'earlyPaymentsList',
}

export default createStore({
  state: {
    salary: 0,
    housingCost: 0,
    maxDeductionPerYear: 0,
    maxDeductionHousingCost: 0,
    earlyPaymentsList: [],
  },
  getters: {
    earlyPaymentList: ({earlyPaymentsList}) => ([earlyPaymentsList]),
  },

  mutations: {
    CHANGE_SALARY(state, salary) {
      state.salary = Number(salary);
    },

    CHANGE_HOUSING_COST(state, cost) {
      state.housingCost = Number(cost);
    },

    GET_MAX_DEDUCTION_PER_YEAR(state, salary) {
      state.maxDeductionPerYear = (salary * 12) * 0.13;
    },

    GET_MAX_DEDUCTION_HOUSING_COST(state, cost) {
      state.maxDeductionHousingCost = cost * 0.13;
    },

    GET_EARLY_PAYMENT_LIST(state, list) {
      state.earlyPaymentsList = list
    }
  },
  actions: {
    changeSalary({commit}, salary) {
      commit(MutationsType.CHANGE_SALARY, salary)
      commit(MutationsType.GET_MAX_DEDUCTION_PER_YEAR, salary)
    },

    changeCost({commit}, cost) {
      commit(MutationsType.CHANGE_HOUSING_COST, cost)
      commit(MutationsType.GET_MAX_DEDUCTION_HOUSING_COST, cost)
    },

    getEarlyPaymentList({commit, state}) {
      commit(MutationsType.GET_EARLY_PAYMENT_LIST, getPaymentList(state.maxDeductionHousingCost, state.maxDeductionPerYear))
    },
  },
  modules: {}
})

