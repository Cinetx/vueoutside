<template>
      <li class="result__item">
        <input class="checkbox__input visually-hidden" type="checkbox" name="early-payment"
               :value="item"
               :id="'early-payment'+id" checked>
        <label class="result__label checkbox__label" :for="'early-payment'+id">
          <span class="result__total">{{item}}</span> рублей {{declOfNumPreText(id)}} <span class="result__year">{{id}}{{declOfNumEnd(id)}} год</span>

        </label>
      </li>

</template>

<script>

export default {
  name: 'ResultItem',

  props: {
    item: {
      type: Number,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    }
  },

  methods: {
    declOfNumEnd(n) {
      if (n === 3) {
        return '-ий';
      }
      if (n === 1 || n === 4 || n === 5 || n === 9) {
        return '-ый';
      }
      if (n === 2 || n === 6 || n === 7 || n === 8) {
        return '-ой';
      }
    },

    declOfNumPreText(n) {
      if (n === 2) {
        return 'во';
      }
      return 'в'
    }
  }
}
</script>
