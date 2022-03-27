const CurrencyFormatter = (lang, price, currency) => {
  let options;

  // If no currency is passed, set a decimal style
  if (currency === null) {
    options = {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    };
  } else {
    options = {
      style: 'currency',
      currency: currency,
    };
  }

  return new Intl.NumberFormat(lang, options).format(price);
};

module.exports = CurrencyFormatter
