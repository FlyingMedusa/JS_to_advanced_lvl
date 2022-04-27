/* eslint quotes: ["error", "double"] */

class Country {
  constructor(currency, language, currencyConvertRatioToUsd) {
    this.currency = currency;
    this.language = language;
    this.currencyConvertRatioToUsd = currencyConvertRatioToUsd;
    this.isShengen = true;
  }

  convertMoney(valueInLocalCurrency) {
    return valueInLocalCurrency * this.currencyConvertRatioToUsd;
  }
}

const poland = new Country("PLN", "Polish", 1 / 4);
const souvenirInPln = 50;
const souvenirInUsd = poland.convertMoney(souvenirInPln);
console.log(souvenirInUsd);
