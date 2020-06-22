import {getCurrencies} from './getCurrencies';
import {readdirSync} from 'fs';


describe('getCurrencies', () => {
  it('shuld contain all currencies', () => {
    const result = getCurrencies();
    expect(result).toContain('EUR');
  });
});
