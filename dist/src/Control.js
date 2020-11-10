"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rethrow = void 0;
function rethrow(e1, e2) {
    e1.stack = e1.stack + '\n' + e2.stack;
    throw e1;
}
exports.rethrow = rethrow;
//# sourceMappingURL=Control.js.map