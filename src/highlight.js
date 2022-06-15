import { styleTags, tags } from '@lezer/highlight';

export const highlight = styleTags({
  'متغير دالة': tags.definitionKeyword,
  'استورد من صدر': tags.moduleKeyword,
  'إن إلا طالما كرر حاول أمسك أرجع ألقي قف أكمل': tags.controlKeyword,
  String: tags.string,
  VarDef: tags.definition(tags.variableName),
  'FuncDecl/VarDef': tags.function(tags.definition(tags.variableName)),
  VarName: tags.variableName,
  'CallExpr/VarName': tags.function(tags.variableName),
  PropDef: tags.definition(tags.propertyName),
  PropName: tags.propertyName,
  'CallExpr/MemberExpr/PropName': tags.function(tags.propertyName),
  Number: tags.number,
  Bool: tags.bool,
  عدم: tags.null,
  Comment: tags.lineComment,
  ArithOp: tags.arithmeticOperator,
  CmpOp: tags.compareOperator,
  LogicOp: tags.logicOperator,
  '،': tags.separator,
  '=': tags.updateOperator,
  '.': tags.derefOperator,
  '( )': tags.paren,
  '[ ]': tags.bracket,
  '{ }': tags.brace,
});
