export interface CurrencyInfo {
    code: string;
    symbol: string;
  }
  
export interface Conversion {
    currencyInfo: CurrencyInfo;
    rate: number;
    timestamp: number;
}
  
export interface CurrencyConversion {
    baseCurrencyInfo: CurrencyInfo;
    conversions: Conversion[];
}
  