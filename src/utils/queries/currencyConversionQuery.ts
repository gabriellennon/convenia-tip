import gql from 'graphql-tag';

export const ALL_CURRENCY_CODES = gql`
  query GetCurrencyConversion ($baseCurrency: String! $convertCurrencies: [String]!) {
    currencyConversion (baseCurrency: $baseCurrency convertCurrencies: $convertCurrencies) {
      baseCurrencyInfo {
        code
        symbol
      }
      conversions {
        currencyInfo {
          code
          symbol
        }
        rate
        timestamp
      }
    }
  }
`;
