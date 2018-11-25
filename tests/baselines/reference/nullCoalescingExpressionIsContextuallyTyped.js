//// [nullCoalescingExpressionIsContextuallyTyped.ts]
// The ?? operator permits the operands to be of any type.
// If the ?? expression is contextually typed, the operands are contextually typed by the
// same type and the result is of the best common type of the contextual type and the two
// operand types.

var r: { a: string } = { a: '', b: 123 } ?? { a: '', b: true };

//// [nullCoalescingExpressionIsContextuallyTyped.js]
// The ?? operator permits the operands to be of any type.
// If the ?? expression is contextually typed, the operands are contextually typed by the
// same type and the result is of the best common type of the contextual type and the two
// operand types.
var _a;
var r = (_a = { a: '', b: 123 }) != null ? _a : { a: '', b: true };
