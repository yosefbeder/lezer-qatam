import { ExternalTokenizer } from '@lezer/lr';
import { end } from './parser.terms';

const newline = [0x000a, 0x000d, 0x2028, 0x2029];

const endToken = new ExternalTokenizer(input => {
  const { next } = input;

  if (newline.includes(next) || next == -1) {
    input.advance();
    input.acceptToken(end);
  }
});

export { endToken };
