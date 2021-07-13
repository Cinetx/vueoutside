<template>
  <div class="app-form__calculate-wrapper calculate">
    <label class="calculate__label" for="monthly-salary">Ваша зарплата в месяц</label>
    <div class="calculate__input-wrapper">
      <input @change="changeInputSalary" class="calculate__input" id="monthly-salary" placeholder="Введите данные" type="text" inputmode="numeric" pattern="[0-9]*">
      <small class="calculate__error">Поле&nbsp;обязательно&nbsp;для&nbsp;заполнения</small>
    </div>
    <button @click="getPaymentList" class="calculate__button button button-text button-text--red" type="button">Рассчитать</button>
  </div>
</template>

<script>
import { mapActions} from 'vuex';
import {ActionType} from '../store'


export default {

  name: 'Calculate',
  data: ()=>({
    // monthlySalary: 20,
  }),
  methods: {
    ...mapActions([ActionType.changeSalary, ActionType.getEarlyPaymentList]),

    changeInputSalary(evt){
      this.changeSalary(evt.target.value)
    },

    getPaymentList() {
      this.getEarlyPaymentList();
    }
  },

  computed: {
    // ...mapGetters([GettersType.salary])
  }
}
</script>
