import { styleTags, tags } from '@lezer/highlight';

export const highlight = styleTags({
  'متغير دالة': tags.definitionKeyword,
  'استورد من صدّر': tags.moduleKeyword,
  'إن وإن إلا طالما كرر لكل في حاول أمسك أرجع ألقي واصل إكسر':
    tags.controlKeyword,
  String: tags.string,
  VarDef: tags.definition(tags.variableName),
  'Params/VarDef LambdaParams/VarDef': tags.function(
    tags.definition(tags.variableName),
  ),
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
  'و أو': tags.operatorKeyword,
  '،': tags.separator,
  UpdateOp: tags.updateOperator,
  DefOp: tags.definitionOperator,
  '.': tags.derefOperator,
  '|': tags.punctuation,
  '( )': tags.paren,
  '[ ]': tags.bracket,
  '{ }': tags.brace,
});
