const { parser } = require('./dist/index.cjs');

const code = `
متغير كائن = { الاسم، العمر: 16 }
`;

parser.parse(code).iterate({
  enter(node) {
    console.log(String(node));
  },
});
