export type CurrencyCode = 'INR' | 'USD' | 'GBP' | 'AED';

export const CONVERSION_RATES: Record<CurrencyCode, { rate: number; symbol: string; prefix: string }> = {
  INR: { rate: 1, symbol: '₹', prefix: 'INR' },
  USD: { rate: 0.012, symbol: '$', prefix: 'USD' },
  GBP: { rate: 0.0095, symbol: '£', prefix: 'GBP' },
  AED: { rate: 0.044, symbol: 'د.إ', prefix: 'AED' },
};

export function formatCurrency(amountINR: number, currency: CurrencyCode): string {
  const conf = CONVERSION_RATES[currency] || CONVERSION_RATES.INR;
  const converted = Math.round(amountINR * conf.rate);
  
  if (currency === 'INR') {
    return `${conf.symbol}${converted.toLocaleString('en-IN')}`;
  }
  return `${conf.symbol}${converted.toLocaleString('en-US')}`;
}
