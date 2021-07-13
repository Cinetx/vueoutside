import {MAX_TAX_DEDUCTION} from '../const';

export function getPaymentList(maxDeductionHousingCost, maxDeductionPerYear) {
  let earlyPaymentsList = []

  if (maxDeductionHousingCost > MAX_TAX_DEDUCTION) {
    maxDeductionHousingCost = MAX_TAX_DEDUCTION;
  }

  for (let i = 0; i < maxDeductionHousingCost;) {
    if (maxDeductionHousingCost > maxDeductionPerYear) {
      maxDeductionHousingCost = maxDeductionHousingCost - maxDeductionPerYear;
      earlyPaymentsList.push(maxDeductionPerYear)
    }

    if (maxDeductionHousingCost < maxDeductionPerYear) {
      earlyPaymentsList.push(maxDeductionHousingCost)
      maxDeductionHousingCost = 0
    }
  }
  return earlyPaymentsList
}

export function declOfNum(n) {
  console.log(n)
  if (n === 1 ||
    n === 4 ||
    n === 5 ||
    n === 9) {
    return '-ый';
  }
    if (n === 3) {
      return '-ий';
    }

  if (n === 1) {
    return '-ий';
  }
  if (
    n === 2 ||
    n === 6 ||
    n === 7 ||
    n === 8
  ) {
    return '-ой';
  }
}
