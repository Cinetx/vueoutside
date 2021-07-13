<template>
  <div class="app-form__radio-wrapper">
    <h3 class="app-form__sub-title">Что уменьшаем?</h3>

    <div class="app-form__radio radio">
      <input class="radio__input visually-hidden" id="payment-radio" name="cut-radio" type="radio" checked>
      <label class="radio__label" for="payment-radio">Платеж</label>
    </div>

    <div class="app-form__radio radio">
      <input class="radio__input visually-hidden" id="term-radio" name="cut-radio" type="radio">
      <label class="radio__label" for="term-radio">Срок</label>
    </div>

  </div>
</template>

<script>
export default {
  name: 'WhatReduce',

}
</script>