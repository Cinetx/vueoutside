<template>
  <div class="calculate">
    <label class="calculate__label" for="housing-cost">Стоимость жилья</label>
    <div class="calculate__input-wrapper">
      <input @change="changeInputCost" class="calculate__input" id="housing-cost" placeholder="Введите данные"
             type="text" inputmode="numeric" pattern="[0-9]*">
      <small class="calculate__error">Поле&nbsp;обязательно&nbsp;для&nbsp;заполнения</small>

    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import {ActionType} from '../store'


export default {
  name: 'HousingCost',

  methods: {
    ...mapActions([ActionType.changeCost]),

    changeInputCost(evt) {
      this.changeCost(evt.target.value)
    },
  },
}
</script>
