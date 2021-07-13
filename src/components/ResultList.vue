<template>
  <div class="app-form__result result">
    <h3 class="result__title">Итого можете внести <br>в качестве досрочных:</h3>
    <ul class="result__list">
      <ResultItem v-for="(item, index) in paymentsList" :item="item" :id="index+1" :key="index" />
    </ul>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import ResultItem from './ResultItem';

export default {
  name: 'ResultList',
  components: {ResultItem},
  computed: mapState({paymentsList: state => state.earlyPaymentsList}),
}
</script>
