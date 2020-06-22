import {greet} from './greet';


describe('greet', () => {
  it('should include the same in the message', () => {
    expect(greet('vreneli')).toContain('vreneli');
  });
});
