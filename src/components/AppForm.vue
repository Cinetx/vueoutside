<template>
  <div class="page-main__app-form-popup">
    <form class="app-form">
      <header class="app-form__header">
        <h2 class="app-form__title">Налоговый вычет</h2>
        <router-link to="/">
          <button class="app-form_close button" aria-label="Закрыть" type="button">
            <svg aria-hidden="true" width='12' height='12'>
              <use href="img/sprite.svg#close"></use>
            </svg>
          </button>
        </router-link>
        <p class="app-form__start-text">Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового
          вычета составляет не более 13% от своего официального годового дохода.</p>
      </header>

      <HousingCost />
      <Calculate/>
      <ResultList/>
      <WhatReduce/>

      <button class="app-form__submit button button--red" type="submit">Добавить</button>
    </form>
  </div>
</template>

<script>
import Calculate from "./Calculate";
import ResultList from "./ResultList";
import WhatReduce from "./WhatReduce";
import HousingCost from "./HousingCost";

export default {
  name: 'AppFrom',
  components: {HousingCost, WhatReduce, ResultList, Calculate},
}
</script>

